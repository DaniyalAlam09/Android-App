import {Text, View, TouchableOpacity, Image} from 'react-native';
// import React, {Component} from 'react';
// import SideMenu from 'react-native-side-menu';

export class Home extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 0.25}}>
          <Image
            style={{
              width: 350,
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 40,
            }}
            source={require('./Images/Welcome.webp')}
          />
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 150,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: '50%',
              backgroundColor: '#39980F',
              padding: 3,
              height: 50,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 30,
              marginLeft: 20,
            }}
            onPress={() => navigate('Whattsapp')}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 22}}>
              Whattsapp
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '50%',
              backgroundColor: 'red',
              padding: 3,
              height: 50,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 30,
              marginLeft: 20,
            }}
            onPress={() => navigate('Corona')}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
              Corona Updates
            </Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            style={{
              width: '50%',
              backgroundColor: 'purple',
              padding: 3,
              height: 50,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 30,
              marginLeft: 20,
            }}
            onPress={() => navigate('Firebase')}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
              Firebase
            </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={{
              width: '50%',
              backgroundColor: 'blue',
              padding: 3,
              height: 50,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 30,
              marginLeft: 20,
            }}
            onPress={() => navigate('Setting')}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
              Settings
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, flexDirection: 'row', marginTop: 40}}>
          <TouchableOpacity
            style={{
              flex: 0.48,
              width: 100,
              backgroundColor: '#2196F3',
              height: 30,
              //   borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              //   marginTop: 30,
              marginLeft: 20,
            }}
            onPress={() => navigate('Login')}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flex: 0.48,
              width: 150,
              backgroundColor: '#2196F3',
              height: 30,
              //   borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              //   marginTop: 30,
              marginLeft: 20,
            }}
            onPress={() => navigate('Signup')}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Home;
