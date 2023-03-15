# Teleport Ranking Web App

## The brief: 

**Use the Teleport API (https://developers.teleport.org/) to provide data to a simple web application that fulfils the user story below:**

**“As an entrepreneur, I want to rank urban areas on a selected continent by Teleport city score, so that I can make an informed decision on where to open my next office.”**

**NOTES** 
- Your application should provide a drop-down list of continents, and when one is selected, an ordered table of maximum 5 rows with the following structure should be displayed. Hard-coded static lists should be avoided
- Demonstrate competence in Object Oriented Programming and solution design in any language/framework
- Include an explicit controller file
- Include unit tests
- Database not required, data not to persist



## Installation & Use Instructions

- Note that this application assumes a basic level of developer knowledge; usage of terminal, prior installation of node/npm or ability to install
- Unzip this folder and use terminal to navigate to it
- Check you are using version of node 18.0+
- Run command 'npm install'

- **Got to repo: 'teleport-ranking-api' and follow instructions on readme there to start backend server.**

- Run command 'npm start' (app may open automatically in browser tab, if not open browser and navigate to localhost:3000)
- Run command 'npm test' (to run test suite)
- Web app will appear, UI is self explanator.
- Tested and run on Windows and Linux environments (assumed to also work fine on MacOS). Other operating systems/mobile unknown.


## Design

- The diagram below shows the abstraction of all fetch api and data handling/formatting in 3x classes, and with react frontend components for presenting the data, along with a 'controller' express file that runs the web app:


### Tools Used:

- React library for frontend (expressJS and nodeJS for backend server in other repo)
- Unit Tested using Jest
- Drawio for diagramming
- Git version control
- Prettier and ESLint

### Approach

- Focussed first on TDD process to create data handling classes, with lots of testing using fetch-jest-mock
- Secondarily built React app to display data, along with a minimal styling of the UI.
- Thirdly was implementing the data handling classes as a basic Express server and using fetch api to get data from there into react components.

### Future improvements/Challenges

- Testing: I would add integration tests (although they weren't part of the requirement) and fix the App component tests, as well as controller express file test
- More CSS styling.
- Abstract out some functionality from the express controller file (it's a bit big)

## CHANGE LOG (BRANCHES)

### v1-original-submission
- As submitted last week.

### v2-corrections(merged to main)
- Encapsulation improvement: All class properties in the 3x classes (World, Continent, UrbanAreaData) are now made private, and getter methods added where needed.
- React Controller component updated to read getter methods rather than class properties.

### v3-client-only(merged to main)

- Move api fetch action from client-side to server-side, by creating an express-node backend (new repo)
- Move 'controller' to server-side
- As only 2 routes with 3 or 4 functions required, took the decision to make a single controller file to handle server and all routes rather than a more extensive file tree.
- Update react components to just fetch data once from the server on initial load, and then once each time a continent is selected.
- Update server class files so as not to continue adding to data lists on repeated GET requests
- Use of arrays in controller file to act as sort of semi-persistent data, meaning repeated and unneccesary fetch api calls were not made to teleport.org.
- Server will background load all continent data starting when first GET request comes in (on react app load), but contains functionality to priority load a specific continent's data on its own if the whole load hasn't finished before that continent is selected.
- Note testing of App.js file is incomplete.





