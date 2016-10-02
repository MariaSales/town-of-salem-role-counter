import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import { ROLES, CERTAINTY } from './constants';
 
class Player extends Component {

  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }

  close(){
    this.setState({ showModal: false });
  }

  open(){
    this.setState({ showModal: true });
  }

  renderCertainty() {
    let options = CERTAINTY.map(value => {
      return <option key={value}>{value}</option>;
    });

    return (
      <select name='certainty'>
        {options}
      </select>
    );
  }

  renderRoles() {
    let options = [];

    Object.keys(ROLES).forEach(category => {
        options.push(<option key={`category-${category}`} value={category} disabled>{category}</option>);
        Object.keys(ROLES[category]).forEach(alignment => {
          options.push(<option key={`alignment-${alignment}`} value={alignment} disabled>{alignment}</option>);
          ROLES[category][alignment].forEach(role => {
            options.push(<option key={`role-${role.name}`} value={role.name}>{role.name}</option>);
          });
        });
    });
  
    return (
      <select name='roles'>
        {options}
      </select>
    )
  }

  renderAddButton() {
    return (
      <span>
        <button onClick={this.open.bind(this)}>Open</button>

        <Modal show={this.state.showModal}>        
          <Modal.Header>
            <Modal.Title>Player #{this.props.position}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div>
              <span>Certainty</span>
              <span>Role</span>
            </div>
            <div>
              <span>
                {this.renderCertainty()}
              </span>
              <span>
                {this.renderRoles()}
              </span>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <button onClick={this.close.bind(this)}>Close</button>
            <button >Save changes</button>
          </Modal.Footer>        
        </Modal>
     
      </span>
    );
  }
  
  render() {

    return (
      <div id='player'>
        {this.props.position} {this.props.roles} {this.renderAddButton()}
      </div>
    );
  }

}

export default Player;