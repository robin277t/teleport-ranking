import World from "../../backend/World";

describe("Block 1: World class", () => {
  // beforeEach(() => {});

  test("test1 - fetchAPI response is added to array", () => {
    const worldTestInstance = new World();
    // const mockAPIjson = {city: "London", score: 10, details: "big place"}
    expect(worldTestInstance.continents.length).toBe(1);
  });

  //test2 - fetchAPI response filtered by params1
  //test3 - fetchAPI response filtered by params2
  //test4 - fetchAPI response filtered by params3
  //test5 - fetchAPI response added to array as single object
  //test6 - fetchAPI response added to array as multiple objects
});
