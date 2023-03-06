class Continent {
  constructor(continent_id) {
    this.continent_id = continent_id;
    this.allUrbanAreas = [];
  }

  async fetchUrbanAreas() {
    try {
      const response = await fetch(
        `https://api.teleport.org/api/continents/${this.continent_id}/urban_areas/`
      );
      const data = await response.json();
      this.#formatAllUrbanAreasListAsURLs(data);
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
