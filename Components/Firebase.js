import {Text, View,TouchableOpacity,} from 'react-native';
import React, {Component} from 'react';
import database from '@react-native-firebase/database';

export class Firebase extends Component {
  componentDidMount() {
    database()
    .ref("/Courses/")
    .on("value", snapshot => {
      console.log("User data: ", snapshot.val());
    //         this.state.universities.forEach((detail) => {
    //     console.log(detail);
    //   });
    });
  }
  render() {
    return (
      <View>
         <TouchableOpacity
              style={{
                width: 150,
                backgroundColor: '#2196F3',
                height: 30,
                borderRadius: 5,
              }}
           >
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                Login
              </Text>
            </TouchableOpacity>
      </View>
    );
  }
}

export default Firebase;
