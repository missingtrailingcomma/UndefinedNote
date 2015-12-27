import List__NotesView from './List__NotesView.jsx';
import List__TagsView from './List__TagsView.jsx';
import React from 'react';

export default class Ctrl__List extends React.Component {
  render() {
    switch (this.props.viewType) {
      case 'notes':
      return (
        <List__NotesView noteEntries={this.props.noteEntries}/>
      );
      break;
      case 'tags':
      return (
        <List__TagsView noteEntries={this.props.noteEntries}/>
      );
      break;
      default:
      return (
        <h1>Error</h1>
      )
    }
  }
}
