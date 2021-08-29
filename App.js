import React,{Component} from "react";
import {Text,TextInput,ScrollView,SafeAreaView,View,StatusBar,TouchableOpacity,StyleSheet} from 'react-native';
import ListItemView from './ListItemView'
import ListEmptyView from './ListEmptyView'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text:'',data:[] };
  }

handleSave=()=>{
  const { text,data } = this.state;
  data.push({text});
  this.setState({data,text:''});
  console.log(data);
}

  render() {
    const {text,data} = this.state;
    return (
      <SafeAreaView>
        <StatusBar hidden={true}/>
        <View style={styles.headerContainer}>
          <Text style={styles.headerContainerText}>Welcome To Todo App</Text>
        </View>
        <View style={styles.formContainer}>
        <TextInput onChangeText={(text)=>{this.setState({text})}} value={text} placeholder="enter your todo" placeholderTextColor="#FFB2C9" style={styles.formContainerInput}>
        </TextInput>
          <TouchableOpacity onPress={this.handleSave} style={styles.btnContainer}>
            <Text style={styles.btnContainerText}>Add</Text>
        </TouchableOpacity>
        </View>
        <ScrollView style={styles.ListContainer}>
          {
            data.map((item,index)=>{
              return <ListItemView key={index+1}  index={index+1} text={item.text}/>
            })
          }
          {
            data.length === 0 && <ListEmptyView/>
          }
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#FF3471",
    height:40,
    borderBottomRightRadius:60,
    alignItems:"center",
    justifyContent:"center"
  },
  headerContainerText: {
color:"#fff",
fontWeight:"bold",
letterSpacing:1,
fontSize:25
  },
  ListContainer: {
    height: "100%",
    padding: 10
  },
  formContainer:{
flexDirection:"row",
padding:10
  },
  formContainerInput:{
  backgroundColor:"#ffeff4",
  flex:1
  },
  btnContainer:{
    backgroundColor:"#FF3471",
  width:50,
  alignItems:"center",
  justifyContent:"center",
  padding:10
  },
  btnContainerText:{
  color:"#fff",
  fontWeight:"bold",
  fontSize:16
  }
});