// Core
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Instruments
import { CacheManager, Image } from 'react-native-expo-image-cache';

export default class AvatarHeader extends Component {
  state = {
    uri: ''
  };
  componentWillMount() {
    const uri =
      'https://cdn.pixabay.com/photo/2018/03/11/17/22/cat-3217406_1280.jpg';

    CacheManager.cache(uri, newUri => this.setState({ uri: newUri }));
  }

  onPressAvatar = () => alert(this.state.uri);

  render() {
    const { uri } = this.state;

    return (
      <View style={styles.avatarHeader}>
        <TouchableOpacity onPress={this.onPressAvatar}>
          <Image style={styles.avatar} uri={uri} />
        </TouchableOpacity>
        <Text style={styles.name}>React Native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatarHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#D9FAFF'
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: '#fff',
    borderWidth: 5
  },
  name: {
    color: '#005792',
    fontSize: 30,
    fontWeight: '300',
    marginTop: 10
  }
});
