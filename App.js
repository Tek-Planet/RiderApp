import 'react-native-gesture-handler';
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';


import React, { Component } from 'react'

import Root from './src/main';

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
          <View style={{flex:1}}>
             <Root />  
          </View>  
      </NavigationContainer>
    )
  }
}

export default App
