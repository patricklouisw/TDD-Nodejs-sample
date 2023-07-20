# This is a quick overview of Test Driven Development using Jest and supertest

## Test Driven Development (TDD) Concept

TDD concept lies on the 3 stage cycle of development:
1. Create tests that we want the application to pass. (Initially it would be failing)
2. Implement the functionality to pass the test case
3. Refactor and/ create more tests (Rinse and repeat)

The idea here is that the code we have is always tested based on our initial expectations regardless of the implementation of the code.

## Libraries used:
- **Jest**: helps with testing.
- **Supertest**: helps with simulating a request to an API.
- **http-errors**: crate and cutomize http errors more easily

For this project, we are using `express-generator` to quickly give us a starting base to a Node/Express Js application.

- `app.test.js` contains the test that we want