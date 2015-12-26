import Ctrl__Action from './Ctrl__Action.jsx';
import Ctrl__List from './Ctrl__List.jsx';
import React from 'react';

export default class Ctrl extends React.Component {
  render() {
    return (
      <div className="note__ctrl ctrl">
        <Ctrl__Action />
        <Ctrl__List viewType="tagsView"/>
      </div>
    );
  }
}
