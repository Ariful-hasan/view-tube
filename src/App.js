import React from 'react';
import {Grid} from '@material-ui/core';
import youtube from './api/youtube';
import { SearchBar, VideoDetail } from './components';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  handleSubmit = async (searchTerm) => {
      const response = await youtube.get('search', {
        params: {
                  part: 'snippet',
                  maxResults: 5,
                  key: 'AIzaSyCmQcgyLRt5XQzuXC5sUfOvrJ4IbBYrqRE',
                  q: searchTerm,
                }
      });
      console.log(response.data.items);
  };

  render() {
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <SearchBar onFormSubmit={this.handleSubmit}/>
        </Grid>
        <Grid item xs={8}>
          <VideoDetail/>
        </Grid>
        <Grid item xs={4}>
          {/* video list */}
        </Grid>
      </Grid>
    );
  }
}

export default App;
