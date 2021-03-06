import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from "react-redux";
const Home = ()=> {
  const change=useSelector(state =>state.change.value )
  console.log(change)
  return (
    <View style={styleApp.container}>
      <View style={styleApp.header}>
        <Text style={styleApp.appName}>VI DU REDUX</Text>
        <Text style={styleApp.value}>0</Text>
      </View>
      <View style={styleController.controller}>
        <Text style={styleController.controllName}>CONTROLLER COMPONENT</Text>
        <View style={styleController.buttonContainer}>
          <TouchableOpacity style={styleController.button}>
            <Text style={styleController.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styleController.button}>
            <Text style={styleController.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styleApp = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingTop: 30
  },
  header: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  appName: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  },
  value: {
    color: 'yellow',
    fontSize: 40
  }
});

const styleController = StyleSheet.create({
  controller: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'yellow',
    alignSelf: 'stretch',
    margin: 20
  },
  controllName: {
    fontSize: 20,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 50,
    paddingVertical: 25,
    margin: 10,
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 40
  }
});
export default Home;

