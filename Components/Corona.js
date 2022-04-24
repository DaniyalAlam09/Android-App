import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
const axios = require('axios');

import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({
  name: 'test',
});

const createtable = () => {
  db.transaction(txn => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS Corna  (id INTEGER PRIMARY KEY AUTOINCREMENT, Country  VARCHAR(20), TotalConfirmed VARCHAR(20))`,
      [],
      (sqlTxn, res) => {
        console.log('table created successfully');
      },
    );
  });
};

const Separator = () => <View style={styles.itemSeparator} />;

const Corona = () => {
  const [dataGlobal, setDataGlobal] = React.useState({});
  const [data, setData] = React.useState([]);

  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = React.useState([]);
  const [masterData, setmasterData] = React.useState([]);

  // useEffect(() => {

  // }, []);

  // const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    axios
      .get('https://api.covid19api.com/summary')
      .then(function (response) {
        console.log(response.data);
        setDataGlobal(response.data.Global);
        setData(response.data.Countries);
        // console.log(data);
        setFilterData(response.data.Countries),
          setmasterData(response.data.Countries);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const InsertDBAction = () => {
    console.log('insertDB Called');
    db.transaction(tx => {
      for (let i = 0; i < data.length; i++) {
        tx.executeSql(
          'INSERT INTO Corna (Country, TotalConfirmed) VALUES (?,?)',
          [, data.Country, data.TotalConfirmed],

          (tx, results) => {
            console.log('Insert Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert(
                'Success',
                'User updated successfully',
                [
                  {
                    text: 'Ok',
                    onPress: () => Alert.alert('Yes', 'Updated'),
                    // this.props.navigation.navigate('HomeScreen')
                  },
                ],
                {cancelable: false},
              );
            } else {
              alert('Updation Failed');
            }
          },
        );
      }
    });
  };

  const SelectDBAction = () => {
    console.log('Select DB is Called');
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM Corna', [], (tx, results) => {
        var len = results.rows.length;
        console.log('select * results are = ', len);
        if (len > 0) {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i) {
            temp.push(results.rows.item(i));
            console.log(results.rows.item(i).Country);
            console.log(results.rows.item(i).TotalConfirmed);
          }

          this.setState({
            Country: results.rows.item(0).Country,
          });
          this.setState({
            TotalConfirmed: results.rows.item(0).TotalConfirmed,
          });
        } else {
          alert('No user found');
        }
      });
    });
  };

  const searchFilter = text => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(masterData);
      setSearch(text);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.global}>
          <View style={styles.totalCases}>
            <Text style={styles.textBold}>
              Total Cases:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
              {dataGlobal.TotalConfirmed}
            </Text>
            <Text style={styles.textBold}>
              Total Deaths:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
              {dataGlobal.TotalDeaths}
            </Text>
            <Text style={styles.textBold}>
              New Cases:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
              {dataGlobal.NewDeaths}
            </Text>
            <Text style={styles.textBold}>
              New Cases:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
              {dataGlobal.NewConfirmed}
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={InsertDBAction()}>
            <Text>Insert</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.allCountries}>
          <TextInput
            placeholder="Search Here"
            value={search}
            onChangeText={text => {
              searchFilter(text);
            }}
            style={{
              color: 'black',
              backgroundColor: 'white',
              textAlign: 'center',
              fontSize: 20,
            }}
          />
          <FlatList
            data={SelectDBAction}
            renderItem={({item}) => (
              <View style={styles.single}>
                <View style={styles.countryWrapper}>
                  <Text style={styles.countryText}>{item.Country}</Text>
                </View>
                <View style={styles.infoWrapper}>
                  <View style={styles.infoCases}>
                    <Text style={styles.infoText}>
                      Total Cases:{item.TotalConfirmed}
                    </Text>
                    <Text style={styles.infoText}>
                      New Cases: {item.NewConfirmed}
                    </Text>
                  </View>
                  <View style={styles.infoDeaths}>
                    <Text style={styles.infoText}>
                      Total Deaths: {item.TotalDeaths}
                    </Text>
                    <Text style={styles.infoText}>
                      New Deaths: {item.NewDeaths}
                    </Text>
                  </View>
                </View>
              </View>
            )}
            ItemSeparatorComponent={() => <Separator />}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Corona;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  itemSeparator: {
    flex: 1,
    height: 1.5,
    backgroundColor: 'black',
    width: '93%',
    marginLeft: '7%',
  },
  global: {
    flex: 0.3,
    backgroundColor: 'lightgray',
  },
  textBold: {
    color: 'red',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10,
    marginLeft: 15,
  },
  allCountries: {
    flex: 0.7,
    backgroundColor: 'lightgray',
  },
  single: {
    flex: 0.2,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  countryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    paddingLeft: 25,
  },
  countryWrapper: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoWrapper: {
    flex: 0.7,
  },
});
