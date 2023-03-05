class World {
  constructor() {
    this.continents = [];
    this.#fetchContinents();
  }

  #fetchContinents() {
    const response = { testJsonInt: 1, testJsonStr: "string" };
    this.continents.push(response);
  }

  #formatContinentsList() {}

  #addToContinentsList() {}
}

module.exports = World;
