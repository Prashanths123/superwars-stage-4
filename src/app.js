const PLAYERS = [
  'Spiderman',
  'Captain America',
  'Wonderwoman',
  // "Popcorn",
  // "Gemwoman",
  // "Bolt",
  // "Antwoman",
  // "Mask",
  // "Tiger",
  // "Captain",
  // "Catwoman",
  // "Fish",
  // "Hulk",
  // "Ninja",
  // "Black Cat",
  // "Volverine",
  // "Thor",
  // "Slayer",
  // "Vader",
  // "Slingo"
];

class Player {
  constructor(id, name, type) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.strength = this.getRandomStrength();
    this.image = `images/super-${id + 1}.png`;
  }

  getRandomStrength() {
    return Math.floor(Math.random() * 100);
  }

  view() {
    const playerElement = document.createElement('p');
    playerElement.classList.add('player');
    playerElement.setAttribute('data-id', this.id);

    playerElement.innerHTML = `
      <img src="${this.image}">
      <div class="name">${this.name}</div>
      <div class="strength">${this.strength}</div>
    `;

    return playerElement;
  }
}

class Superwar {
  constructor(players) {
    this.players = players.map((player, i) => {
      const type = i % 2 === 0 ? 'hero' : 'villain';
      return new Player(i, player, type);
    });
  }

  viewPlayers() {
    this.displayTeam('heroes', 'hero');
    this.displayTeam('villains', 'villain');
  }

  displayTeam(teamId, type) {
    const teamElement = document.getElementById(teamId);
    teamElement.innerHTML = '';
    const fragment = this.buildPlayers(type);
    teamElement.append(fragment);
  }

  buildPlayers(type) {
    const fragment = document.createDocumentFragment();
    this.players
      .filter((player) => player.type === type)
      .forEach((player) => fragment.append(player.view()));
    return fragment;
  }
}

window.onload = () => {
  const superwar = new Superwar(PLAYERS);
  superwar.viewPlayers();
};
