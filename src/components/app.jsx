import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif-list';

/* Below variable contains API key */
const GIPHY_API_KEY = process.env.API_KEY;

/* App contains all the other components */
class App extends Component {

  /* contructor is always needed */
  constructor(props) {
    super(props);

    /* state contains gifs-array with all gifs received from API
    and selectedGifId which contains the currently selected gif */
    this.state = {
      gifs: [],
      selectedGifId: 'jUwpNzg9IcyrK'
    };
  }
  /* search receives input from user and calls API */
  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, result) => {
        console.log(result);
        this.setState({
          gifs: result.data
        });
      });
  }

  /* selectGif changes state with gif which has been clicked on by user */
  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  /* rendering both left side with search-bar and selected gif as well as
  right side with gif-list */
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
