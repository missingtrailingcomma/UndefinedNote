import React from 'react';

export default class List__TagsView extends React.Component {
  render() {
    const notesTags = this.props.noteEntries.map((notes, i)=>{
      return notes.tags;
    });

    let tags = {};
    notesTags.forEach((noteTags, i)=>{
      noteTags.forEach((tag, j)=>{
        if (tags[tag] === undefined) {
          tags[tag] = [];
        }
        tags[tag].push(this.props.noteEntries[i].title);
      })
    });
    
    return (
      <div className="list__tagsview">
        {Object.keys(tags).map((tagGrp)=>{
          return (
            <div key={tagGrp}>
              <h2>{tagGrp}</h2>
              <ul>
                {tags[tagGrp].map((tag, i)=>{
                  return (
                    <li key={i}>{tag}</li>
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
