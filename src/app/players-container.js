import React, { Component } from 'react';

import Player from './player';

class PlayersContainer extends Component {
  
  getPlayers() {

    let players = [
      { position: 1, roles: [], status: null },
      { position: 2, roles: [], status: null },
      { position: 3, roles: [], status: null },
      { position: 4, roles: [], status: null },
      { position: 5, roles: [], status: null },
      { position: 6, roles: [], status: null },
      { position: 7, roles: [], status: null },
      { position: 8, roles: [], status: null },
      { position: 9, roles: [], status: null },
      { position: 10, roles: [], status: null },
      { position: 11, roles: [], status: null },
      { position: 12, roles: [], status: null },
      { position: 13, roles: [], status: null },
      { position: 14, roles: [], status: null },
      { position: 15, roles: [], status: null }
    ];

    return players;
  }

  renderPlayers(players) {
    return players.map((player, i) => {
      return (
        <div key={i}>
          <Player position={player.position} roles={player.roles} status={player.status} />
        </div>
      );
    })
  }

  render() {

    let players = this.getPlayers();

    return (
      <div id='players-container'>
        Players Container
        {this.renderPlayers(players)}
      </div>
    );
  }

}

export default PlayersContainer;