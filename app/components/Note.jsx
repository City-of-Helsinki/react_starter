import React from 'react';
import {Kuppi, Lautanen} from './kuppi.cjsx';

export default class Note extends React.Component {
  render() {
      let s = "Learn Webpack with Mocha testing and stuff!";
      return <div>
      <div>{this.props.jee}</div>
      <div>{s}</div>
    <Kuppi kuppia="5" /><Lautanen />
    </div>;
  }
}
