// Import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a Component
const App = () => (
  //this is JSX, use component nesting
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render the component to the device
AppRegistry.registerComponent('albums', () => App); //string must match project name
