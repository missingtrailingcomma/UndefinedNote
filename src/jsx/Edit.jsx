import Edit__Content from './Edit__Content.jsx';
import Edit__Tools from './Edit__Tools.jsx';
import React from 'react';

export default class Edit extends React.Component {
  render() {
    return (
      <div className="note__edit edit--non-void">
        <Edit__Content selectedNote={this.props.selectedNote} handleUpdateNote={this.props.handleUpdateNote}/>
        <Edit__Tools />
      </div>
    );
  }
}
