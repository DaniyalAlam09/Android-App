import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {Component} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
// import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
// import Swipeable from 'react-native-swipe-gestures';
import Swipeable from 'react-native-gesture-handler/Swipeable';
// import Swipeable from 'react-native-swipeable';
// import SwipeRow from '@nghinv/react-native-swipe-row';
// import {SwipeListView} from 'react-native-swipe-list-view';
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
];

// draw a line after a list itrm
const Separator = () => (
  <View
    style={{
      flex: 1,
      height: 1,
      backgroundColor: '#444',
      width: '85%',
      marginLeft: '15%',
    }}
  />
);

// left swip
const LeftSwipeActions = () => {
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

const rightSwipeActions = () => {
  return (
    <View
      style={{
        flex: 0.4,
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      {/* // first btn view */}
      <View
        style={{
          flex: 0.5,
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

      {/* view for second btn */}
      <View
        style={{
          flex: 0.5,
          backgroundColor: '#4169E1',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#1b1a17',
            fontWeight: '600',
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}>
          Archive
        </Text>
      </View>
    </View>
  );
};
// complete swips
const swipeFromLeftOpen = () => {
  alert('Swipe from left');
};
const swipeFromRightOpen = () => {
  alert('Swipe from right');
};

const ListItem = text => (
  <Swipeable
    renderLeftActions={LeftSwipeActions}
    renderRightActions={rightSwipeActions}
    // onSwipeableRightOpen={swipeFromRightOpen}
    // onSwipeableLeftOpen={swipeFromLeftOpen}
  >
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
);

// export default class Whattsapp extends Component {
//   render() {
//     return (
//       <View>
//         <Text>whattsapp</Text>

//       </View>
//     );
//   }
// }

const Swip = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <Text>Whattsapp</Text>
        <FlatList
          numColumns={1}
          data={Data}
          keyExtractor={item => item.key}
          renderItem={({item}) => <ListItem {...item} />}
          ItemSeparatorComponent={() => <Separator />}
        />
      </SafeAreaView>
    </>
  );
};

export default Swip;
