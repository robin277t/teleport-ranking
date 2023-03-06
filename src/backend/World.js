class World {
  constructor() {
    this.continents = [];
  }

  async fetchContinents() {
    try {
      const response = await fetch("https://api.teleport.org/api/continents/");
      const data = await response.json();
      const data2 = await data._links["continent:item"]
      this.continents.push(data2)
      console.log(data2);
    } catch (err) {
      console.log(err)
      return null
    }
  }

  // #formatContinentsList() {}

  // #addToContinentsList() {}
}

module.exports = World;
