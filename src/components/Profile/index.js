// Core
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

// Components
import AvatarHeader from '../AvatarHeader';
import UserInfo from '../UserInfo';
import ControlPanel from '../ControlPanel';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <AvatarHeader />
        </View>
        <View style={styles.info}>
          <UserInfo />
        </View>
        <View style={styles.control}>
          <ControlPanel />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  header: {
    flex: 3
  },
  info: {
    flex: 3
  },
  control: {
    flex: 1
  }
});
