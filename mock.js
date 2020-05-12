// content of index.js
const http = require("http");
const WEBAPP_PORT = 3000;
const FLAMINGO_PORT = 3001;
const ANGULAR_PORT = 3002;

const handlerBuilder = (name) => {
  return (request, response) => {
    response.end("this response was served by " + name);
  };
};

const webappServer = http.createServer(handlerBuilder("WEBAPP"));
const flamingoServer = http.createServer(handlerBuilder("FLAMINGO"));
const angularServer = http.createServer(handlerBuilder("ANGULAR"));

webappServer.listen(WEBAPP_PORT, (err) => {
  if (err) {
    console.err("Error running WEBAPP", err);
  }
  console.log(`WEBAPP server is listening on ${WEBAPP_PORT}`);
});

flamingoServer.listen(FLAMINGO_PORT, (err) => {
  if (err) {
    console.err("Error running FLAMINGO", err);
  }
  console.log(`FLAMINGO server is listening on ${FLAMINGO_PORT}`);
});

angularServer.listen(ANGULAR_PORT, (err) => {
  if (err) {
    console.err("Error running ANGULAR", err);
  }
  console.log(`ANGULAR server is listening on ${ANGULAR_PORT}`);
});
