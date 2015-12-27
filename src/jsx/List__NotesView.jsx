import React from 'react';

export default class List__NotesView extends React.Component {
  render() {
    return (
      <div className="list__notesview">
        {this.props.noteEntries.map((notes, i)=>{
          return (
            <div key={i}>{notes.title}</div>
          );
        }, this)}
      </div>
    );
  }
}
