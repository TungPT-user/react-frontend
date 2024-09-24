const data = require("./data.json");
const json = require("../node_modules/json-server");

const server = json.create();
const router = json.router(data);
const middlewares = json.defaults();

server.use(middlewares);
server.use(router);

server.listen(4111, () => {
  console.log("Data server is running");
});
