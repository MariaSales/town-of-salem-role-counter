import React, { Component } from 'react';

import { ROLES } from './constants';

class RolesContainer extends Component {
  
  renderRoles(roles) {
    return roles.map((role, i) => {
      return (
        <div key={i}>{role.name}</div>
      );
    });
  }

  renderAlignments(alignments) {
    return Object.keys(alignments).map((alignment, i) => {
      return (
        <div key={i}>
          <div id='alignment'>{alignment}</div>
          {this.renderRoles(alignments[alignment])}
        </div>
      );
    });
  }

  renderCategories(salemRoles) {
    return Object.keys(salemRoles).map((category, i) => {
      return (
        <div key={i}>
          <div id='category'>{category}</div>
          {this.renderAlignments(salemRoles[category])}
        </div>
      );
    });
  }

  render() {
    let roles = ROLES;
    
    return (
      <div id='roles-container'>
        {this.renderCategories(roles)}
      </div>
    ); 
  }
}

export default RolesContainer;