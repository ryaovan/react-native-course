import React, { Component } from 'react'; //cant deconstruct, need it when babel converts to JSX
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  //initialize state
  state = { albums: [] };

  //called when right about to be loaded on screen
  componentWillMount() {
    fetch('http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(data => this.setState({ albums: data }));
  }

  renderAlbums(){
      return this.state.albums.map(album =>
        <AlbumDetail key={album.title} album={album} />
      ); //map is array helper
  }

  render() {
    console.log(this.state);

    return (
      <View>
          {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
