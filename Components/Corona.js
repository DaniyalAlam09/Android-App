import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
const axios = require('axios');

const Separator = () => <View style={styles.itemSeparator} />;

const Corona = () => {
  const [dataGlobal, setDataGlobal] = React.useState({});
  const [data, setData] = React.useState([]);
  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = React.useState([]);
  const [masterData, setMasterData] = React.useState([]);

  useEffect(() => {
    setFilterdata(Cases), setMasterData(Cases);
  }, []);

  // const [loading, setLoading] = React.useState(false);

  const Cases = () => {
    React.useEffect(() => {
      axios
        .get('https://api.covid19api.com/summary')
        .then(function (response) {
          setDataGlobal(response.data.Global);
          setData(response.data.Countries);
          // setLoading(false);
        })
        .then(function (responseJson) {
          setFilterData(responseJson);
          setMasterData(responseJson);
          // setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  };
  const searchFilter = text => {
    if (text) {
      const newData = masterdata.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterdata(newData);
      setSearch(text);
    } else {
      setFilterdata(masterdata);
      setSearch(text);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.global}>
          <View style={styles.totalCases}>
            <Text style={styles.textBold}>
              Total Cases: {dataGlobal.TotalConfirmed}
            </Text>
            <Text style={styles.textBold}>
              Total Deaths: {dataGlobal.TotalDeaths}
            </Text>
            <Text style={styles.textBold}>
              New Cases: {dataGlobal.NewDeaths}
            </Text>
            <Text style={styles.textBold}>
              New Cases: {dataGlobal.NewConfirmed}
            </Text>
          </View>
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
            data={filterData}
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
    color: '#de1212',
    fontSize: 28,
    fontWeight: '700',
    marginTop: 15,
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
    // justifyContent:"center"
  },
  // infoCases:{
  //     // flexDirection:"row"

  // },
  // infoDeaths:{

  // }
});
