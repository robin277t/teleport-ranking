import World from "../../backend/World";
require("jest-fetch-mock").enableMocks();

describe("Block 1: World class", () => {
  let testWorldInstance;
  let mockApiContinent;

  beforeEach(() => {
    testWorldInstance = new World();
    mockApiContinent = {
      _links: {
        "continent:item": [{ href: "longurlstring", name: "gondwana" }],
        curies: [
          { href: "longurlstring", name: "randomlongstring", templated: true },
        ],
        self: { href: "longurlstring" },
      },
      count: 0,
    };
    fetch.resetMocks();
  });

  it("test1 - fetchAPI response is added to array", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockApiContinent));
    expect(testWorldInstance.continents.length).toBe(0);
    await testWorldInstance.fetchContinents();
    expect(testWorldInstance.continents.length).toBe(1);
  });

  it("test2 - returns error message if api call fails", async () => {
    fetch.mockReject(() => Promise.reject("API not working"));
    const testReturn = await testWorldInstance.fetchContinents();
    expect(testReturn).toEqual(null);
    expect(fetch).toHaveBeenCalledWith(
      "https://api.teleport.org/api/continents/"
    );
  });

  it("test3 - filter api response to clear out un-needed data 1, '_links' header with count", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockApiContinent));
    await testWorldInstance.fetchContinents();
    expect(testWorldInstance.continents[0]).not.toHaveProperty("_links");
  });

  it("test4 - filter api response to clear out un-needed data 2;'curies' & 'self'", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockApiContinent));
    await testWorldInstance.fetchContinents();
    expect(testWorldInstance.continents[0]).not.toHaveProperty("curies");
    expect(testWorldInstance.continents[0]).not.toHaveProperty("self");
  });

  it("test5 - edit href string into usable object field content: continent_id", async () => {
    mockApiContinent._links["continent:item"][0] = {
      href: "https://api.teleport.org/api/continents/geonames:EU/",
      name: "Europe",
    };
    fetch.mockResponseOnce(JSON.stringify(mockApiContinent));
    await testWorldInstance.fetchContinents();
    expect(testWorldInstance.continents[0]).toHaveProperty("continent_id");
    expect(testWorldInstance.continents[0].continent_id.length).toEqual(11);
    expect(testWorldInstance.continents[0].continent_id[0]).toEqual("g");
  });

  it("test6 - pull through name field and add 1 continent as correctly formatted object added to array", async () => {
    mockApiContinent._links["continent:item"][0] = {
      href: "https://api.teleport.org/api/continents/geonames:EU/",
      name: "Europe",
    };
    fetch.mockResponseOnce(JSON.stringify(mockApiContinent));
    await testWorldInstance.fetchContinents();
    expect(testWorldInstance.continents).toEqual([
      { continent_id: "geonames:EU", name: "Europe" },
    ]);
  });

  it("test7 - add multiple continent objects to array", async () => {
    mockApiContinent._links["continent:item"][0] = {
      href: "https://api.teleport.org/api/continents/geonames:EU/",
      name: "Europe",
    };
    mockApiContinent._links["continent:item"][1] = {
      href: "https://api.teleport.org/api/continents/geonames:AS/",
      name: "Asia",
    };
    mockApiContinent._links["continent:item"][2] = {
      href: "https://api.teleport.org/api/continents/geonames:NA/",
      name: "North America",
    };
    fetch.mockResponseOnce(JSON.stringify(mockApiContinent));
    await testWorldInstance.fetchContinents();
    expect(testWorldInstance.continents.length).toBe(3)
    expect(testWorldInstance.continents[2].name).toEqual('North America')
  });
});

