// Core
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class ControlPanel extends Component {
  render() {
    return (
      <View style={styles.controlPanel}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.logoutBtn}>Log out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  controlPanel: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#00204A'
  },
  logoutBtn: {
    fontSize: 18,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#00BBF0',
    color: '#00BBF0',
    padding: 10,
    textAlign: 'center'
  }
});
