import World from "../../backend/World";
require("jest-fetch-mock").enableMocks();

describe("Block 1: World class", () => {
  let testWorldInstance;
  let mockApiContinentBasic;

  beforeEach(() => {
    testWorldInstance = new World();
    mockApiContinentBasic = {
      _links: { "continent:item": [{}], curies: [{}], self: {} },
      count: 0,
    };
    fetch.resetMocks();
  });

  it("test1 - fetchAPI response is added to array", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockApiContinentBasic));
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
    fetch.mockResponseOnce(JSON.stringify(mockApiContinentBasic));
    await testWorldInstance.fetchContinents();
    expect(testWorldInstance.continents[0]).not.toHaveProperty("_links");
  });

  it("test4 - filter api response to clear out un-needed data 2;'curies' & 'self'", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockApiContinentBasic));
    await testWorldInstance.fetchContinents();
    expect(testWorldInstance.continents[0]).not.toHaveProperty("curies");
    expect(testWorldInstance.continents[0]).not.toHaveProperty("self");
  });
});

//test5 - fetchAPI response filtered by params3
//test6 - fetchAPI response added to array as single object(expect object at index 0 to have a property)
//test7 - fetchAPI response added to array as multiple objects(expect length > than 1, and obj at index 1 or 2 to have a property(x))
