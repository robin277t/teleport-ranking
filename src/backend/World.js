class World {
  constructor() {
    this.continents = [];
  }

  async fetchContinents() {
    try {
      const response = await fetch("https://api.teleport.org/api/continents/");
      const data = await response.json();
      const data2 = await data._links["continent:item"]

      data2.forEach(continent => {
        const newObj = { continent_id: continent.href.slice(-12,-1), name: continent.name}
        this.continents.push(newObj)
      })

    } catch (err) {
      console.log(err)
      return null
    }
  }

  // #formatContinentsList() {}

  // #addToContinentsList() {}
}

module.exports = World;
