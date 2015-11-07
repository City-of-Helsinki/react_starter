import React from 'react';
import Tyyppi from './first.tsx';

export default class Note extends React.Component {
  render() {
      let s = "Learn Webpack with Mocha testing and stuff!";
      return <div>
          <div><Tyyppi foo="hih" /></div>
      <div>{this.props.jee}</div>
      <div>{s}</div>
    </div>;
  }
}
