## DigiGame

Welcome to a game where you have to find your favorite Digimon thanks to a scratching system! A simple and entertaining project to pass the time. This game lets you play while earning DigiPoint to expand your collection.

## Features

- **ScratchDigimon Game** Play by scratching the card and guessing which Digimon it is. The more you scratch, the fewer Digipoints you'll earn.

- **Your collection** A collection page where you can see and buy your favorite digimons.

- **Comment Space** A real-time comment area, or even a general chat room.

- **Authentication** Sign up quickly and log in to start playing.

- **Admin** As administrator, you have access to the panel to modify digimons, remove players and messages.

- ### Technologies used:

  - **Node.js and Express.js:** The server is built with Node.js and Express.js to manage requests and responses.
  - **SQL:** The database uses SQL to store information on users, digimons and more.
  - **Jsonwebtoken:** Jsonwebtoken is used to manage authentication and game security.
  - **React.js:** The front-end of the game is developed with React.js to deliver an interactive user experience.
  - **Axios:** Axios is used to make HTTP requests between client and server.
  - **Redux:** Redux is an open-source JavaScript state management library for web applications.
  - **Sass:** Styles are managed with Sass, offering a more modular and organized CSS structure.
  - **Toastify** React-Toastify allows you to add notifications to your app with ease.

## Install

- `git clone git@github.com:blackstars64/DigiGame.git` : Clone the repo
- `npm install` : installed dependence script

## Setup

- In the `backend folder`, `copy` and `paste` the `.env.sample` and rename it `.env`.
- The same action for the `.env.sample`, but in the `frontend folder`.
- `Modify` the two `.env` file with the necessary information in backend.

## Starting

- `db:migrate` : Run the database migration script
- `db:seed` : Run the database seed script
- `dev` : Starts both servers (frontend + backend) in one terminal

### The server will be accessible at _http://localhost:3310_ and the client at _http://localhost:3000_.
