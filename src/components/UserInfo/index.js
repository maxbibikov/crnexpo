// Core
import React, { Component } from 'react';
import { View, Picker, Text, StyleSheet } from 'react-native';

export default class UserInfo extends Component {
  state = {
    city: ''
  };

  render() {
    return (
      <View style={styles.userInfo}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>user-email@google.com</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Phone:</Text>
          <Text style={styles.infoValue}>+380111111111</Text>
        </View>
        <View style={styles.city}>
          <Text style={styles.infoLabel}>City:</Text>
          <Picker
            style={{ width: 200, height: 50 }}
            selectedValue={this.state.city}
            onValueChange={itemValue => this.setState({ city: itemValue })}
          >
            <Picker.Item label="Kyiv" value="kyiv" />
            <Picker.Item label="Lviv" value="lviv" />
          </Picker>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userInfo: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%'
  },
  infoItem: {
    flex: 2,
    justifyContent: 'center',
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#00204A'
  },
  infoLabel: {
    fontSize: 18
  },
  infoValue: {
    fontSize: 25,
    color: '#00BBF0'
  },
  city: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  }
});
