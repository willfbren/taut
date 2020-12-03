# Taut

Real-time chat-based application allowing teams to communicate through different channels
>[View Demo](https://youtu.be/N7wtyRBdDFo)

## Screenshot
![preview](https://raw.githubusercontent.com/willfbren/taut/master/client/public/preview.png)

<!-- ABOUT THE PROJECT -->
## About The Project

This project was created as my final project during my last two weeks Flatiron School. Inspired by Slack (if that weren't too obvious from the name... 😜).


### Built With

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Socket.io](https://socket.io/)
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Knex](http://knexjs.org/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* Node.js
* npm


### Installation

1. Clone the repo
```sh
git clone git@github.com:willfbren/taut.git
```
2. Install backend NPM packages
```sh
cd server
npm install
```
2. Run database migration
```sh
npx knex migrate:make
```
> Optional: If you'd like to seed the database sith dummy data, you can run the following command: `npx knex seed:run`

3. Install frontend NPM packages
```sh
cd client
npm install
```
4. Start local nodemon server
```sh
cd server
npm start
```
5. Start frontend
```sh
cd client
npm start
```
> If you seeded the database, you can login with test credentials (test@gmail.com / password). If you create a new user, you can use the team code: learn-code.
<!-- CONTACT -->
## Contact

William Brennan - [LinkedIn](https://www.linkedin.com/in/willfbren/) 

Project Link: [https://github.com/willfbren/taut](https://github.com/willfbren/taut)
