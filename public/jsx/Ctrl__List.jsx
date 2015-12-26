import List__NotesView from './List__NotesView.jsx';
import List__TagsView from './List__TagsView.jsx';
import React from 'react';

export default class Ctrl__List extends React.Component {
  render() {
    switch (this.props.viewType) {
      case 'notesView':
      return (
        <List__NotesView />
      );
      break;
      case 'tagsView':
      return (
        <List__TagsView />
      );
      break;
      default:
      return (
        <h1>Error</h1>
      )
    }
  }
}
