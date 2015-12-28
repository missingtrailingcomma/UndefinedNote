import React from 'react';

export default class List__TagsView extends React.Component {
  handleNoteClick(key) {
    this.props.handleSelectNote(key);
  }

  render() {
    const notesTags = Object.keys(this.props.noteEntries).map((notes, i)=>{
      return this.props.noteEntries[notes].tags;
    });

    let tags = {};
    Object.keys(this.props.noteEntries).forEach((note, i)=>{
      let noteTags = this.props.noteEntries[note].tags;
      noteTags.forEach((tag, i) => {
        if (tags[tag] === undefined) {
          tags[tag] = [];
        }
        tags[tag].push(
          {
            title: this.props.noteEntries[note].title,
            id: note,
          }
        );
      });
    });

    return (
      <div className="list__tagsview">
        {Object.keys(tags).map((tagGrp)=>{
          return (
            <div key={tagGrp}>
              <h2>{tagGrp}</h2>
              <ul>
                {tags[tagGrp].map((note, i)=>{
                  return (
                    <li key={i} onClick={this.handleNoteClick.bind(this, note.id)}>{note.title}</li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}
