import React from 'react';

export default class Ctrl__Action extends React.Component {
  handleToggleView(ele) {
    const viewMapping = {
      notes: 'tags',
      tags: 'notes',
    }
    let currentElement = document.getElementsByClassName('ctrlactionview__' + ele)[0];
    let theotherElement = document.getElementsByClassName('ctrlactionview__' + viewMapping[ele])[0];
    currentElement.style.backgroundColor = '#ffcc33';
    theotherElement.style.backgroundColor = '#fff';
    this.props.handleToggleView(ele);
  }
  render() {
    return (
      <div className="ctrl__action ctrlaction">
        <div>Sort</div>
        <ul className="ctrlaction__views ctrlactionview">
          <li className="ctrlactionview__notes" onClick={this.handleToggleView.bind(this, 'notes')} key="notes">Notes</li>
          <li className="ctrlactionview__tags ctrlactionview__tags--active" onClick={this.handleToggleView.bind(this, 'tags')} key="tags">Tags</li>
        </ul>
        <div>+</div>
      </div>
    );
  }
}
