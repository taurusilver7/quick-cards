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


mongopassword: OnhZ3KWS9bo4UsTL
