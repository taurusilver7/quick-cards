# Quick Cards

> A quick MERN stack flash cards generating application for memory visualization test.

## Available Scripts

```bash
npm create vite@latest <app_client>
#and
Select the framework & language variant (Reat + Typescript)
#and
npm run install (install dependencies)
#and
npm run dev (start development server)
```

## Build

Scaffold a starter template using [vite](https://vitejs.dev/guide/) and refactor the template to suit the application.

Create a form with a input element to take in the Deck title. Add an event to update the title value to a state. The state value is given in the request to the server.

Create a submit function to the form. (add preventDefault to stop the server from refreshing after submitting. It was a standard way to refresh the page.)

Create a fetch request to create a deck from the form submission. Create a fetch-get request to get the decks as soon as the component mounts in a useEffect().

Store the fetched decks in a state. Map over the state to populate the fetched Deck array Create a type for the fetched Decks. Style the Container & decks.


