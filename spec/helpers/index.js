/* eslint-disable global-require */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
let server;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
beforeAll(done => {
  server = require("../../app").server;
  done();
});
afterAll(() => {
  server.close();
});
