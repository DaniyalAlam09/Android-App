import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  login() {
    Alert.alert(this.state.username, this.state.password);
  }
  signup() {
    Alert.alert(this.state.username, this.state.password);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 0.25}}>
          <Image style={styl.logo} source={require('./Google.jpg')} />
        </View>
        <View style={{flex: 0.5}}>
          <TextInput
            style={styl.textfiled}
            placeholder="Name"
            value={this.state.username}
            onChangeText={value =>
              this.setState({username: value})
            }></TextInput>
          <TextInput
            style={styl.textfiled}
            placeholder="username"
            value={this.state.username}
            onChangeText={value =>
              this.setState({username: value})
            }></TextInput>
          <TextInput
            style={styl.textfiled}
            placeholder="Email"
            value={this.state.username}
            onChangeText={value =>
              this.setState({username: value})
            }></TextInput>
          <TextInput
            style={styl.textfiled}
            placeholder="password"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={value =>
              this.setState({password: value})
            }></TextInput>
          <TextInput
            style={styl.textfiled}
            placeholder="Confirm password"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={value =>
              this.setState({password: value})
            }></TextInput>

          <View style={{flex: 0.3, flexDirection: 'row', marginTop: 40}}>
            <TouchableOpacity
              style={{
                width: 150,
                backgroundColor: '#2196F3',
                height: 30,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                marginTop: 30,
                marginLeft: 20,
              }}
              onPress={() => navigate('Login')}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                Login
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 150,
                backgroundColor: '#2196F3',
                height: 30,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                marginTop: 30,
                marginLeft: 40,
              }}
              onPress={e => this.signup()}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styl = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 40,
  },

  textfiled: {
    width: 300,
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
