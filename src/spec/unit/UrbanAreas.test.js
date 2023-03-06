import UrbanAreas from "../../classes/UrbanAreas";
require("jest-fetch-mock").enableMocks();

xdescribe("Block 3: UrbanAreas class", () => {
  let testUrbanAreasInstance;
  let mockApiAllUrbanAreaDetails;

  beforeEach(() => {
    testUrbanAreasInstance = new UrbanAreas(
      "geonames:AF",
      ["url1", "url2", "url3"],
      {
        maxDisplay: 5,
        field1: "teleport_city_score",
        field2: "summary",
      }
    );
    mockApiAllUrbanAreaDetails = {};
    fetch.resetMocks();
  });

  it("test1 - fetchAPI called 3x times on loop of urban area urls", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockApiAllUrbanAreaDetails));
    await testUrbanAreasInstance.fetchAllUrbanAreaDetails();
  });
});

// it("test7 - fetchAPI response 2 relevant fields added to each urban area in array", async () => {});

// UNIT
//   "test - fetchAPI response 2 adds all data to all urban areas"
//   "test - urban areas are sorted by teleport score desc in array"
//   "test - format incoming data 1, filter by given params"
//   "test - format incoming data 2, filter by given params"
//   "test - format incoming data 3, filter by given params"
// INTEGRATION
//   "test - fetchAPI response adds to array of top urban areas"
//   "test - only X urban areas added to new array, where X is a given param"
//   "test - only top X urban areas are added to new array"

// UNIT FOR URBANAREA CLASS
//   "test - takes name arg and returns formatted"
//   "test - takes score arg and returns formatted"
//   "test - takes summary arg and returns formatted"
