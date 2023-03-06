class Continent {
  constructor(continentId, dataParams) {
    this.continentId = continentId;
    this.allUrbanAreas = [];
    //this.urbanAreasDetail = []
  }

  async fetchUrbanAreas() {
    try {
      const response = await fetch(
        `https://api.teleport.org/api/continents/${this.continentId}/urban_areas/`
      );
      const data = await response.json();
      this.#formatAllUrbanAreasListAsURLs(data);
      //instantiate new class here?
      //const urbanDetailsInstance = new UrbanAreas(this.continentId, this.allUrbanAreas, this.dataParams)
      //urbanDetailsInstance.runFunction()
      //this.urbanAreasDetail = urbanDetailsInstance.topUrbanAreas
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  #formatAllUrbanAreasListAsURLs(data) {
    data._links["ua:items"].forEach((urbanArea) => {
      const newUrbanArea = urbanArea.href.split("/")[5];
      this.allUrbanAreas.push(
        `https://api.teleport.org/api/urban_areas/${newUrbanArea}/scores/`
      );
    });
  }
}

module.exports = Continent;
