import React from 'react';
import { AppRegistry, View, Dimensions } from 'react-native-web';
// import AppNavigator from './AppNavigator';
import TabRoot from './TabRoot';
import { AsyncStorage } from 'react-native';
import { Buffer } from "buffer";
window.localStorage = AsyncStorage;
global.Buffer = Buffer;

const App = () => (
  <View style={{ height: Dimensions.get('window').height }}>
    <TabRoot />
    {/* <AppNavigator/> */}
  </View>
);

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });
