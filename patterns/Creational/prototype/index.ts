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

  score() {
    this.goals++;
  }

  clone() {
    return new FifaOnlinePlayer({
      name: this.name,
      team: this.team,
      position: this.position,
      goals: this.goals,
    });
  }
}

const prototype = new FifaOnlinePlayer({
  name: "",
  team: "",
  position: "",
  goals: 0,
});

const messi = prototype.clone();
messi.name = "Messi";
messi.team = "PSG";
messi.position = "FW";

messi.score();
export { messi };
