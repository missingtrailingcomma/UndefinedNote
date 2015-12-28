import React from 'react';

export default class List__NotesView extends React.Component {
  handleNoteClick(key) {
    this.props.handleSelectNote(key);
  }

  render() {
    return (
      <div className="list__notesview">
        <ul>
        {Object.keys(this.props.noteEntries).map((note, i)=>{
          return (
            <li key={i} onClick={this.handleNoteClick.bind(this, note)}>{this.props.noteEntries[note].title}</li>
          );
        }, this)}
        </ul>
      </div>
    );
  }
}
