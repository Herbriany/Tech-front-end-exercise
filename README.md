
Sainsburys PDP and basket page using React with Redux. 

First run npm install, then:
    "npm start" : runs the app in dev mode,
    "npm t" : runs just the jest tests,
    "npm run build" : runs the app in prod mode after passing jest tests
    "npm run cypress:run" : runs the cypress test, to be used with production server live in another terminal

Testing - Haven't done comprehensive testing of units, but have given example of testing action/reducer/store (using redux-mock-store and fetch-mock) and smart/dumb components using enzyme's mount/shallow and rendering snapshots. Have run a few HelloWorld tests with Cypress.

Basket currently empties on refresh as data not stored anywhere. Would normally use async calls in the actions to store the data in a DB.