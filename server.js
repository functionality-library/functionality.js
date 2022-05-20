var StaticServer = require("static-server");
var server = new StaticServer({
  rootPath: "./website/", // required, the root of the server file tree
  port: 8000, // required, the port to listen
  templates: {
    index: "./website/index.html", // optional, defaults to 'index.html'
    // notFound: "404.html", // optional, defaults to undefined
  },
});

server.start(function () {
  console.log("Server Started Please Go To: loacalehost:" + server.port);
});
