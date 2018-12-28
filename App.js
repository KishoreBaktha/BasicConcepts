/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import Component1 from  './components/component1/component1'
import Component2 from  './components/component2/component2'
import Component3 from  './components/component3/component3'
import Component4 from  './components/component4/component4'
import Component5 from  './components/component5/component5'
export default class App extends Component
{
  render()
  {
    return (
      <View>
       <Component1  />
       <Component2 />
       <Component3 />
       <Component4 />
       <Component5 />
      </View>

    );
  }
}
AppRegistry.registerComponent('App',()=>App);