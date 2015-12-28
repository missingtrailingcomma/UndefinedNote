import Edit from './Edit.jsx';
import Ctrl from './Ctrl.jsx';
import React from 'react';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteEntries: {
        i1: {
          id: 'i1',
          title: '1st entry',
          tags: ['like', 'enjoy'],
          body: `## 1st`,
        },
        i2: {
          id: 'i2',
          title: '2nd entry',
          tags: ['like'],
          body: `## 2nd`,
        },
      },
      selectedNote: '',
    };
    this.handleSelectNote = this.handleSelectNote.bind(this);
    this.handleUpdateNote = this.handleUpdateNote.bind(this);
  }

  handleSelectNote(note) {
    this.setState({selectedNote: note});
  }

  handleUpdateNote(note) {
    console.log(note);
    if (note !== undefined) {
      const {id, body} = note;
      let {noteEntries} = this.state;
      noteEntries[id].body = body;
      this.setState({noteEntries});
    }
  }

  render() {
    return (
      <main className="note">
        <Ctrl noteEntries={this.state.noteEntries} handleSelectNote={this.handleSelectNote} />
        <Edit selectedNote={this.state.noteEntries[this.state.selectedNote]} handleUpdateNote={this.handleUpdateNote}/>
      </main>
    );
  }
}
