import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    this.props.selectGif(this.props.id);
  }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    console.log("Hier" + this.props.id);
    return (
      <img src={src} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
