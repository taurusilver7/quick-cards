## Quick Card API

> A flash card application API for visualization testing.

## Available Scripts

```bash
npm run init -f
#and
npm install --save express ... (add dependencies)
# and
npm install ts-node typescript --save-dev (typescript-node dependency for server)
npm run dev (start development server)

```

## Build

Scaffold a starter server template & create /src directory for `index.ts`. Install `ts-node` dependency for letting typescript run on node environment. Modify the script according to typescript to support the prog.language.

Add the types for the dependencies supporting typescript into the application.

For uninterrupted server restarting, install a monitor dependency [nodemon](https://www.npmjs.com/package/nodemon) using the [tutorial](https://stackoverflow.com/questions/37979489/how-to-watch-and-reload-ts-node-when-typescript-files-change)

To watch over the /src directory files change & execute only .ts & .json files. If any .ts or .json files changes, run ts-node <server_file>

Add the types to the server callback functions to get all the methods in autocomplete in the Intellisense.

Create /models for mongoose data models for Deck.ts. Mongoose has their own internal types, an external package is unnecessary.
Create a route for deck CRUD operations, and create their corresponding controller functions.

For creating a Deck, get the title & card details from request object body, and post it to the database. Enable the express server json method & body-parser to parse the request data from the client.

Refactor the server with environment variables & code splitting the server into MVC architecture. Set the server file to use the enviromental varibles using a package [dotenv](https://www.npmjs.com/package/dotenv)

```bash
import * as dotenv from 'dotenv';
dotenv.config()
#or
import {config} from 'dotenv'
config()
```

Create the routes for the application CRUD operations & their corresponding controller functions.

Enable the CORS middleware to connect the server to the client application.

Remove all the console.log()'s from the server to avoid information leakages.
