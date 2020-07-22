This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, to install all the necassary dependencies run:

### `npm install`

to run the application:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3002](http://localhost:3002) to view it in the browser.

and that it because after runing the backend server the port [http://localhost:3000] will be in use

and the port [http://localhost:3001] will also be in use by the backend server inside the test application which is used to whitelist the port [http://localhost:3002] to resolve CORS blocking.

if you have other ports already in use and the application runs on a different port then make sure to whitelist your port inside src/server/index.js instead of the port [http://localhost:3002]

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
