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
- Run command 'npm start' (app may open automatically in browser tab, if not open browser and navigate to localhost:3000)
- Run command 'npm test' (to run test suite)
- Web app will appear, UI is self explanatory. Note no persistence in program, each reload is a fresh start.
- Tested and run on Windows and Linux environments (assumed to also work fine on MacOS). Other operating systems/mobile unknown.


## Design

- The diagram below shows the abstraction of all fetch api and data handling/formatting in 3x classes, and with react frontend components for presenting the data, along with a react 'controller' component that runs the web app:

### Tools Used:

- Primarily JavaScript (ES6). Use React library for frontend and controller.
- Unit Tested using Jest
- Drawio for diagramming
- Git version control
- Prettier and ESLint

### Approach

- Focussed first on TDD process to create data handling classes, with lots of testing using fetch-jest-mock
- Secondarily built react app to display data and run, thirdly was to style the UI.
- Idea was to use OOP principles to create a data app, and then combine with the functional utilities of react app and hooks for a more sophisticated and updateable frontend, although I have run the risk of over-complicating such a simple application here.
- Decision taken not to load all data at startup, but rather to use loading screen to share our waiting time a little between each continent selection

### Future improvements/Challenges

- I had some challenges testing the controller component in react, there is some functionality untested, and also a warning that things weren't wrapped in act(...), which I tried to resolve but ran out of time. I would improve this section first.
- I would add a more clever loading and background loading system so that the user needs to wait less.
- I would add integration tests (although they weren't part of the requirement).
- I would put more CSS in to styling in.






