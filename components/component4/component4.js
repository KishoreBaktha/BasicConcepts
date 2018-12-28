import React, {Component} from 'react';
import {AppRegistry, Text, View,ListView,StyleSheet} from 'react-native';
const users=[
    {name:'Sam'},
    {name:'David'},
    {name:'Manav'}
]
export default class component4 extends Component
{
    constructor()
    {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userdataSource: ds.cloneWithRows(users),
    };
    }
    renderRow(user,sectionId,rowId,hightlightRow)
    {
        return  (
      <View style={styles.row}>
          <Text style={styles.rowtext}>
              {user.name}
          </Text>
      </View>
        );
    }
  render()
  {
    return (
      <ListView
          dataSource={this.state.userdataSource}
          renderRow={this.renderRow.bind(this)}
          >
      </ListView>

    );
  }
}
const styles=StyleSheet.create({
    row:
    {
     flexDirection:'row',
     justifyContent:'center',
     padding:10,
     backgroundColor:"#f4f4f4",
     marginBottom:3
    },
    rowtext:
    {
     flex:1
    }

});
AppRegistry.registerComponent('component4',()=>component4);