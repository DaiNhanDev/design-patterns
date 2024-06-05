interface Player {
  name: string;
  team: string;
  position: string;
  goals: number;
}

class FifaOnlinePlayer {
  name: string;
  team;
  position;
  goals;

  constructor(params: Player) {
    const { name, team, position, goals } = params;
    this.name = name;
    this.team = team;
    this.position = position;
    this.goals = goals;
  }
  toString() {
    let player = "Player:\n";
    player += `- Name: ${this.name}\n`;
    player += `- Name: ${this.team}\n`;
    player += `- Name: ${this.position}\n`;
    player += `- Name: ${this.goals}\n`;
    return player;
  }
}

class FifaOnlinePlayerBuilder {
  name: string;
  team;
  position;
  goals;

  constructor() {
    this.name = "";
    this.team = "";
    this.position = "";
    this.goals = 0;
  }

  withName(name) {
    this.name = name;
    return this;
  }

  withTeam(team) {
    this.team = team;
    return this;
  }

  withPosition(position) {
    this.position = position;
    return this;
  }

  withGoals() {
    this.goals++;
    return this;
  }

  build() {
    return new FifaOnlinePlayer(this);
  }
}

const builder = new FifaOnlinePlayerBuilder();

const messiBuild = builder
  .withName("MESSI")
  .withTeam("PSG")
  .withPosition("FW")
  .withGoals()
  .build();

export { messiBuild };
