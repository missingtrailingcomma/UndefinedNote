import Edit from './Edit.jsx';
import Ctrl from './Ctrl.jsx';
import React from 'react';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteEntries: [
        {
          title: '1st entry',
          tags: ['like', 'enjoy'],
          body: `##content oh readlly?`,
        },
        {
          title: '2nd entry',
          tags: ['like'],
          body: `##fake data`,
        }
      ]
    };
  }

  render() {
    return (
      <main className="note">
        <Ctrl noteEntries={this.state.noteEntries}/>
        <Edit />
      </main>
    );
  }
}
