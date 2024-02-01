class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons(...dragons) {
    // ...dragonsa accept any number of instance
    //example usage: Dragon.getDragons(instance1, instance2, etc.);
    return dragons.map(dragon => dragon.name);
  }
}


// const puff = new Dragon("Puff", "green");
// const toothless = new Dragon("Toothless", "black");
// console.log(Dragon.getDragons(puff, toothless));

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
