# Bookings App

A simple web application that provides CRUD operations for bookings. Exposes a
REST API with NodeJS and MongoDB, while the front-end is written in Angular.

Built with:

* NodeJS
* Angular 5
* MongoDB

## Setup

To run the app, clone the repository and _cd_ into the directory. Then run:

```bash
yarn install && yarn start
```

This will build the Angular project and start a development server on
_http://localhost:3000/_. The REST API will be available at _/api/bookings_. It
will use the MongoDB database available locally, default port 27107 and uses a
collection called _bookings_.

The project is using [dotenv](https://github.com/motdotla/dotenv) to manage
environment variables. If you want to provide a custom MongoDB database or REST
API endpoint, create a _.env_ file in the root of the directory (it is ignored
by git).

Add the following lines:

```bash
API_URL=http://localhost:3000/api
MONGO_URL=mongo://username:password@mongohost.com
```

The _API_URL_ points to the NodeJS server. Defaults to
_http://localhost:3000/api_ if not present. The _MONGO_URL_ points to the
MongoDB instance and database where all bookings are stored.

There's a development option, where you can have both the Angular CLI and NodeJS
running at the same time. Have a look at _package.json_ for more details.

## Testing

The project uses [Jest](https://github.com/facebook/jest) for testing both
Angular and NodeJS components. To run all tests, type:

```bash
yarn test
```

or simply

```bash
jest
```

There's a development option to "watch" for changes and run all tests while you
implement features:

```bash
yarn test:watch
```

## References

Here are a few articles that helped me set some things up:

* [Setting up testing with
  Jest](https://www.xfive.co/blog/testing-angular-faster-jest/)
* [Setting up dotenv with
  Angular](https://medium.com/@natchiketa/angular-cli-and-os-environment-variables-4cfa3b849659)
* [Serve static files with NodeJS and
  Angular](https://scotch.io/tutorials/mean-app-with-angular-2-and-the-angular-cli)
