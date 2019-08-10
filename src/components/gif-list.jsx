import React, { Component } from 'react';
import Gif from './gif';

const GifList = (props) => {
  if (props.gifs.length !== 0) {
    return (
      <div className="gif-list">
        {props.gifs.map(gif => <Gif id={gif.id} selectGif={props.selectGif} />)}
      </div>
    );
  } else {
    return (
      <div className="empty-array">
        Search for something!
      </div>
    );
  }
}


export default GifList;
