# 5e-trap-generator

This is a small example Angular project that lets you generate traps for the fifth edition of a popular roleplaying game.

It was created by Gregory Avery-Weir.

It uses the [angular-seed starter skeleton](https://github.com/angular/angular-seed).

## How to Run
(Taken from the angular-seed guide)

### Prerequisites

You'll need node.js and the npm package manager.

### Install Dependencies

```
npm install
```

Behind the scenes this will also call `bower install`.

### Run the Application

This project uses a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.

## Testing

There are two kinds of tests in the angular-seed application: Unit tests and End to End tests.

### Running Unit Tests

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This will start a watch. To do a single run of the tests and then exit, run:

```
npm run test-single-run
```

### End to end testing

The angular-seed app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner. Our web server needs to be
serving up the application, so that Protractor
can interact with it.

```
npm start
```

In addition, since Protractor is built upon WebDriver we need to install this.  The angular-seed
project comes with a predefined script to do this:

```
npm run update-webdriver
```

This will download and install the latest version of the stand-alone WebDriver tool.

Once you have ensured that the development web server hosting our application is up and running
and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.s
