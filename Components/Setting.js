import {Text, View, StyleSheet, Button, Switch} from 'react-native';
import React, {useState, useContext} from 'react';
import {EventRegister} from 'react-native-event-listeners';
import themeContext from './ThemeContext';
export default function Setting() {
  const [mode, setMode] = useState(false);
  const theme = useContext(themeContext);
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Text style={[styles.text, {color: theme.color}]}>Enable Dark Mode</Text>
      <Switch
        value={mode}
        onValueChange={value => {
          setMode(value);
          EventRegister.emit('changeTheme', value);
        }}
      />
      {/* <Button title="View Profile" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 20,
  },
});
