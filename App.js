import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Whattsapp from './Components/Whattsapp';
import Home from './Components/Home';
import Corona from './Components/Corona';
import Setting from './Components/Setting';
import themeContext from './Components/ThemeContext';
import theme from './Components/theme';
import {EventRegister} from 'react-native-event-listeners';

import {LogBox} from 'react-native';
// import {DarkTheme, DefaultTheme} from 'react-native-paper';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const Stack = createNativeStackNavigator();

export default function App() {
  const [mode, setMode] = useState(false);
  useEffect(() => {
    let eventListener = EventRegister.addEventListener('changeTheme', data => {
      setMode(data);
    });
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  });
  return (
    <themeContext.Provider value={mode == true ? theme.dark : theme.light}>
      <NavigationContainer theme={mode == true ? DarkTheme : DefaultTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Whattsapp" component={Whattsapp} />
          <Stack.Screen name="Corona" component={Corona} />
          <Stack.Screen name="Setting" component={Setting} />
        </Stack.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
}

const styles = StyleSheet.create({});
