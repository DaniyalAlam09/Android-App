import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  // StyleSheet,
} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
// import {Home,pro} from '../Components/Images'

const Data = [
  {
    key: 0,
    name: 'Daniyal',
    id: 'sp19',
    unread: 1,
    time: '11:09',
    Image: require('./Me.jpg'),
  },
  {
    key: 1,
    name: 'Daniyal 2',
    id: 'sp19',
    unread: 2,
    time: '1:20',
    Image: require('./1.jpg'),
  },
  {
    key: 2,
    name: 'Daniyal 3',
    id: 'sp19',
    unread: 3,
    time: '12:55',
    Image: require('./2.jpg'),
  },
  {
    key: 3,
    name: 'Daniyal 4',
    id: 'sp19',
    unread: 12,
    time: '9:42',
    Image: require('./3.jpg'),
  },
  {
    key: 4,
    name: 'Daniyal 5',
    id: 'sp19',
    unread: 15,
    time: '2:09',
    Image: require('./4.jpg'),
  },
  {
    key: 5,
    name: 'Daniyal 6',
    id: 'sp19',
    unread: 12,
    time: '1:49',
    Image: require('./5.jpg'),
  },
  {
    key: 6,
    name: 'Daniyal 7',
    id: 'sp19',
    unread: 6,
    time: '5:12',
    Image: require('./6.jpg'),
  },
  {
    key: 7,
    name: 'Daniyal 8',
    id: 'sp19',
    unread: 2,
    time: '12:05',
    Image: require('./7.jpg'),
  },
  {
    key: 8,
    name: 'Daniyal 8',
    id: 'sp19',
    unread: 2,
    time: '12:05',
    Image: require('./7.jpg'),
  },
];
const rightaction = () => {
  return (
    <View
      style={{
        flex: 0.2,
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      {/* // first btn view */}
      <View
        style={{
          flex: 1,
          backgroundColor: '#708090',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: '600',
          }}>
          More
        </Text>
      </View>
    </View>
  );
};
const leftaction = () => {
  return (
    <View
      // here if we add property flex 1 it complete
      style={{
        flex: 0.2,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          fontWeight: '600',
          fontSize: 18,
        }}>
        Delete
      </Text>
    </View>
  );
};
export default function Whattsapp() {
  return (
    <View style={{flex: 1}}>
      <FlatList
        numColumns={1}
        keyExtractor={item => item.key}
        data={Data}
        renderItem={({item}) => (
          <TouchableOpacity>
            <Swipeable
              renderLeftActions={leftaction}
              renderRightActions={rightaction}>
              <View
                style={{
                  backgroundColor: '#B3DAC6',
                  width: '100%',
                  flex: 1,
                  height: 50,
                  marginBottom: 5,
                  flexDirection: 'row',
                }}>
                <View style={{flex: 0.15}}>
                  <Image
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'center',
                      marginTop: 5,
                    }}
                    source={item.Image}
                  />
                </View>
                <View style={{backgroundColor: '#F4F8F6', flex: 0.6}}>
                  <Text style={{color: '#111', fontSize: 18, marginLeft: 3}}>
                    {item.name}{' '}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text style={{fontWeight: '700'}}> {item.unread} </Text>
                  <Text style={{fontStyle: 'italic'}}> {item.time} </Text>
                </View>
              </View>
            </Swipeable>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  delbtn: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: 'red',
    padding: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  editbtn: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: 'orange',
    padding: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});
