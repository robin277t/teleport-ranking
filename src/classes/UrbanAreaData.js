class UrbanAreaData {
  constructor(continent_id, urbanAreaURLsList, maxAreasToDisplay) {
    this.continent_id = continent_id;
    this.maxAreasToDisplay = maxAreasToDisplay;
    this.urbanAreaURLsList = urbanAreaURLsList;
    this.topUrbanAreas = [];
  }

  async fetchAllUrbanAreaDetails() {
    const responses = [];
    for (const url of this.urbanAreaURLsList) {
      const response = await this.#fetchOneUrbanAreaDetail(url);
      responses.push(response);
    }
    this.#formatAllUrbanAreaDetails(responses);
    this.#orderTopUrbanAreas(this.topUrbanAreas);
    this.#filterTopUrbanAreas(this.topUrbanAreas);
  }

  async #fetchOneUrbanAreaDetail(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  #formatAllUrbanAreaDetails(data) {
    data.forEach((urbanArea) => {
      const newUrbanAreaDetail = {
        name: urbanArea._links.self.href.split("/")[5].split(":")[1],
        teleport_city_score: urbanArea.teleport_city_score,
        summary: urbanArea.summary,
      };
      this.topUrbanAreas.push(newUrbanAreaDetail);
    });
  }

  #orderTopUrbanAreas(unsortedList) {
    this.topUrbanAreas = unsortedList.sort(
      (a, b) => b.teleport_city_score - a.teleport_city_score
    );
  }

  #filterTopUrbanAreas(fullList) {
    this.topUrbanAreas = fullList.slice(0,this.maxAreasToDisplay)
  }
}

module.exports = UrbanAreaData;
