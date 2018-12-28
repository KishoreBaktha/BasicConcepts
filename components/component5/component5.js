import React, {Component} from 'react';
import {AppRegistry, Text, View,L,ListView,StyleSheet} from 'react-native';
export default class component5 extends Component
{
    constructor()
    {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userdataSource: ds
    };
    }
    componentDidMount()
    {
       this.fetchUsers();
    }
    fetchUsers()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((response)=>
        {
          this.setState({
              userdataSource:this.state.userdataSource.cloneWithRows(response)
          });
        });

    }
    renderRow(user,sectionId,rowId,hightlightRow)
    {
        return  (
      <View style={styles.row}>
          <Text style={styles.rowtext}>
              {user.name} :{user.email}
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
AppRegistry.registerComponent('component5',()=>component5);