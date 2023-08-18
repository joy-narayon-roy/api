const notFoundController = require("../controllers/notFoundController");

// const testRouter = require("./testRouter");

const mbbsResult = require("../applicarions/mbbsResult/router");
const testRouter = require("../applicarions/test/router");
const hashRouter = require("../applicarions/hash/router");

const allRoutes = [
  {
    path: "/mbbs",
    router: mbbsResult,
  },
  {
    path: "/test",
    router: testRouter,
  },
  {
    path: "/hash",
    router: hashRouter,
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
