class UrbanAreas {
  constructor(continent_id, urbanAreaURLsList, dataParams) {
    this.continent_id = continent_id;
    this.dataParams = dataParams;
    this.urbanAreaURLsList = urbanAreaURLsList;
    this.topUrbanAreas = [];
  }
  
  
  async fetchOneUrbanAreaDetail(url) { //make private eventually
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  
  async fetchAllUrbanAreaDetails() {
    const responses = [];
    for (const url of this.urbanAreaURLsList) {
      const response = await this.fetchUrl(url);
      responses.push(response);
    }
    console.log(responses);
    return responses;
  }


}

//   async fetchUrbanAreaDetail() {
//     const responses = [];
//     await Promise.all(
//       this.allUrbanAreas.map(async (urbanAreaId) => {
//         const response = await fetch(
//           `https://api.teleport.org/api/urban_areas/${urbanAreaId}/scores/`
//         );
//         const data = await response.json();
//         responses.push(data);
//       })
//     );
//     console.log(responses);
//   }
// }

module.exports = UrbanAreas;
