import React, {Component} from 'react';
import {AppRegistry, Text, View,StyleSheet,TouchableHighlight,TouchableOpacity} from 'react-native';
export default class component2 extends Component
{
    // constructor()
    // {
    //     super();
    //     this.state=
    //     {
    //      myText:'v1'
    //     }
    // }
    onPress()
    {
        console.log('area1 pressed');
    }
    onPress2()
    {
        console.log('area2 pressed');
    }
  render()
  {
    return (
        <View>
      <View style={styles.myView}>
       <Text style={{color:'red'}}>Hey kishore</Text>
       </View>
       <View style={styles.container}>
       <TouchableHighlight style={styles.v1} onPress={this.onPress} underlayColor='blue'>
        <View > 
        <Text>v1</Text>
        </View>
        </TouchableHighlight>
        <TouchableOpacity
         onPress={this.onPress2}
         style={styles.v2}>
        <View > 
        <Text>v2</Text>
        </View>
        </TouchableOpacity>
        <View style={styles.v3}> 
        <Text>v3</Text>
        </View>
       </View>
       </View>

    );
  }
}
const styles=StyleSheet.create({
myView:
{
    backgroundColor:'blue'
},
container:
{
   flexDirection:'row',
   height:100
},
v1:
{
  flex:2,
  backgroundColor:'red',
  padding:10
},
v2:
{
    flex:2,
    backgroundColor:'green',
    padding:10
},
v3:
{
    flex:1,
    backgroundColor:'black',
    padding:10
}
});
AppRegistry.registerComponent('component2',()=>component2);