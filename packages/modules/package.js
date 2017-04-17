Package.describe({
  name: "modules",
  version: "0.8.1",
  summary: "CommonJS module system",
  documentation: "README.md"
});

Npm.depends({
  reify: "0.6.6"
});

Package.onUse(function(api) {
  api.use("underscore");
  api.use("modules-runtime");
  api.mainModule("client.js", "client");
  api.mainModule("server.js", "server");
  api.export("meteorInstall");
  api.export("Buffer");
  api.export("process");
});