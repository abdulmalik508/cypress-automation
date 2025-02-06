**Project Setup**

1.Download and Install node.js

2.Download and Install Visual Studio Code

3.Clone the Project to your PC or download it

4.Open the project folder in Visual Studio Code

5.In VSC, open the terminal and install the dependencies by running the command --> npm install

**Folder Structure**

1.e2e folder is where all the tests are, in cypress terminology they are all called as spec files

2.Under fixtures you can add test data

3.PageObjects folder contains all the Page Object classes and each class has page actions

4.reports folder has the reports

5.support folder, in e2e.js you can add import statements of external libraries

**Run the Tests**

There are two ways to run the tests,

1. Through the App, open the Cypress App by running command --> npx cypress open
2. 
3. Select E2E, select browser, this will open a new window you can click on your test file here to start the test
4. 
5. Through command line,
6. 
7. npx cypress run (to run in headless mode on default electron browser)
8. 
9. npx cypress run --headed (to open the browser)
10. 
11. npx cypress run --spec "path of specfile" (to run only specific test)
12. 
13. npx cypress run --browser chrome --headed (to run in specific browser)

