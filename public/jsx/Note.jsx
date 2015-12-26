import Edit from './Edit.jsx';
import Ctrl from './Ctrl.jsx';
import React from 'react';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="note">
        <Ctrl />
        <Edit />
      </main>
    );
  }
}
