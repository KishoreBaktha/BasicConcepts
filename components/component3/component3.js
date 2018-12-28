import React, {Component} from 'react';
import {AppRegistry, Text, View,TextInput,Switch} from 'react-native';
export default class component3 extends Component
{
    constructor()
  {
    super();
    this.state=
    {
      textvalue:'hello',
      switchvalue:false
    }
  }
  onChangeText(value)
  {
    this.setState({textvalue:value});
  }
  onSubmit()
  {
   console.log('submitted')
  }
  onSwitchChange(value)
{
    this.setState({switchvalue:value})
}
  render()
  {
    return (
      <View>
      <TextInput placeholder= 'enter text'
      value={this.state.textvalue}
      onChangeText={(value)=>this.onChangeText(value)}
      onSubmitEditing={this.onSubmit()}
      > 
      </TextInput>
      <Text>{this.state.textvalue}</Text>
      <Switch 
      value={this.state.switchvalue}
      onValueChange={(value)=>this.onSwitchChange(value)}
      />
      </View>

    );
  }
}
AppRegistry.registerComponent('component3',()=>component3);