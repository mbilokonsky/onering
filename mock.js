// content of index.js
const http = require("http");
const WEBAPP_PORT = 3000;

const handlerBuilder = (name) => {
  return (request, response) => {
    response.end("this response was served by " + name);
  };
};

const webappServer = http.createServer(handlerBuilder("WEBAPP"));

webappServer.listen(WEBAPP_PORT, (err) => {
  if (err) {
    console.err("Error running WEBAPP", err);
  }
  console.log(`WEBAPP server is listening on ${WEBAPP_PORT}`);
});
