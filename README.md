# Project Setup

1. Download and Install node.js
2. Download and Install Visual Studio Code
3. Clone the Project to your PC or download it
4. Open the project folder in Visual Studio Code
5. In VSC, open the terminal and install the dependencies by running the command
6.     npm install

# Folder Structure

1. e2e folder is where all the tests are, in cypress terminology they are all called as spec files
2. Under fixtures you can add test data
3. PageObjects folder contains all the Page Object classes and each class has page actions
4. reports folder has the reports
5. support folder, in e2e.js you can add import statements of external libraries

# Run the Tests

There are two ways to run the tests,

### Through the App, open the Cypress App by running command -->
1.     npx cypress open
2. Select E2E, select browser, this will open a new window you can click on your test file here to start the test

### Through command line,
1. To run in headless mode on default electron browser
2.     npx cypress run
3. To open the browser and run
4.     npx cypress run --headed
5. To run only specific test
6.     npx cypress run --spec "path of specfile"
7. To run in specific browser
8.     npx cypress run --browser chrome --headed 

