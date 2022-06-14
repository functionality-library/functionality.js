var StaticServer = require("static-server");
var server = new StaticServer({
  rootPath: "./dist/", // required, the root of the server file tree
  port: 8080, // required, the port to listen
  templates: {
    // notFound: "404.html", // optional, defaults to undefined
  },
});

server.start(function () {
  console.log("Server Started Please Go To: http://localhost:" + server.port);
});
