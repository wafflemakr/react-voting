# React Voting App

React Blockchain Application to vote for certain candidates, register voters ID and show latest contract events.

## Use the App!

App is currrently hosted in Github Pages. Link: [Voting APP](https://wafflemakr.github.io/react-voting/)

## To generate your own code

Clone this repository and run the command:

### `npm install`

This will download the required dependencies of the application.

## Available Scripts

You can edit the components inside the /src folder, as well as the solidity contracts inside the /contracts folder. If you change the smart contract, you will have to run migrations again. Then, copy the ABI content generated inside /contracts/build/App.json and the contract Address to the src/config.js file.

Finally, in the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Smart Contract

You can read the verified contract at [etherscan](https://rinkeby.etherscan.io/address/0xb76b7e60B9B3BaC1D9C82B64E63e0F947182F4A4)
