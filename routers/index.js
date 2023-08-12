const notFoundController = require("../controllers/notFoundController");

// const testRouter = require("./testRouter");

const mbbsResult = require("../applicarions/mbbsResult/router");
const ipRouter = require("../applicarions/ip/router");
const testRouter = require("../applicarions/test/router");

const allRoutes = [
  {
    path: "/mbbs",
    router: mbbsResult,
  },
  {
    path: "/ip",
    router: ipRouter,
  },
  {
    path: "/test",
    router: testRouter,
  },
  {
    path: "*",
    router: notFoundController,
  },
];

module.exports = function (app) {
  allRoutes.forEach((route) => {
    app.use(route.path, route.router);
  });
};
