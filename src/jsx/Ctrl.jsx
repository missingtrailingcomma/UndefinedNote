import Ctrl__Action from './Ctrl__Action.jsx';
import Ctrl__List from './Ctrl__List.jsx';
import React from 'react';

export default class Ctrl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenView: 'tags',
    };
  }

  handleToggleView(ele) {
    this.setState({
      chosenView: ele,
    });
  }

  render() {
    return (
      <div className="note__ctrl ctrl">
        <Ctrl__Action handleToggleView={this.handleToggleView.bind(this)}/>
        <Ctrl__List viewType={this.state.chosenView} noteEntries={this.props.noteEntries}/>
      </div>
    );
  }
}
