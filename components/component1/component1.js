import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
export default class component1 extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            name:'Kishore',
            showName:false,
            message:this.props.message
        }
    }
    static defaultProps={
  message:'Hi there'
    }
  render()
  {
      let name = this.state.showName ?this.state.name :'No name';
    return (
      <View>
        <Text> {this.state.message}</Text>
        <Text>{name}</Text>
      </View>

    );
  }
}
AppRegistry.registerComponent('component1',()=>component1);