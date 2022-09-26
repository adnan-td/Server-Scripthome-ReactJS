const http = require("http");

const app = require("./app");
const { psqlConnect } = require("./services/postgresql");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await psqlConnect();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
