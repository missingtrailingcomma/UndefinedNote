import React from 'react';

export default class Edit__Content extends React.Component {
  handleNoteInput(e) {
    let content = e.target.value;
    
  }
  render() {
    return (
      <div className="edit__content">
        <textarea onChange={this.handleNoteInput}></textarea>
      </div>
    );
  }
}
