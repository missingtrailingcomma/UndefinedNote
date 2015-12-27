import Edit__Content from './Edit__Content.jsx';
import Edit__Tools from './Edit__Tools.jsx';
import React from 'react';

export default class Edit extends React.Component {
  render() {
    return (
      <div className="note__edit edit">
        <Edit__Content />
        <Edit__Tools />
      </div>
    );
  }
}
