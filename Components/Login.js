import {Link} from '@react-navigation/native';
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

export default class Login extends React.Component {
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
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 0.3}}>
          <Image style={styl.logo} source={require('./Images/Whattsapp.png')} />
        </View>
        <View style={{flex: 0.4}}>
          <TextInput
            style={styl.textfiled}
            placeholder="username"
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
          <Link to={{screen: 'Signup'}} style={styl.forgot}>
            Forgot Password?
          </Link>

          <Text style={styl.text}>
            Not your computer? Use Guest mode to sign in privately.
          </Text>
          <View style={{flex: 0.3, flexDirection: 'row', marginTop: 40}}>
            <View>
              <TouchableOpacity
                style={{
                  width: 100,
                  backgroundColor: '#2196F3',
                  height: 30,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  marginTop: 30,
                  marginLeft: 40,
                }}
                onPress={() => navigate('Signup')}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                style={{
                  width: 100,
                  backgroundColor: '#2196F3',
                  height: 30,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  marginTop: 30,
                  marginLeft: 100,
                }}
                onPress={e => this.login()}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
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

  forgot: {
    color: '#2196F3',
    textAlign: 'right',
    marginRight: 40,
  },
  text: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
