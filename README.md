# Bookings App

A simple web application that manages bookings.

Built with:

* NodeJS
* Angular 5
* MongoDB

## Setup

The project is using [dotenv](https://github.com/motdotla/dotenv) for managing environment variables. To run the app locally, create a _.env_ file in the root of the directory (it is ignored by git).

Add the following lines:

```bash
API_URL=http://localhost:3000/api
MONGO_URL=mongo://username:password@mongohost.com
```

The _API_URL_ points to the NodeJS server running on localhost.
The _MONGO_URL_ points to the MongoDB instance and database where all bookings are stored.

Use the scripts in _package.json_ to run the application.

## References

Here are a few articles that helped me set some things up:

* [Setting up testing with Jest](https://www.xfive.co/blog/testing-angular-faster-jest/)
* [Setting up dotenv with Angular](https://medium.com/@natchiketa/angular-cli-and-os-environment-variables-4cfa3b849659)
* NodeJS server setup with Angular
