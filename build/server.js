"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = _interopRequireDefault(require("express-graphql"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _graphql = _interopRequireDefault(require("../graphql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by alexanderpetrov on 24.03.19.
 */
require("dotenv").config();

var app = (0, _express.default)();
var PORT = process.env.PORT || "4000";
var db = process.env.MONGODB_URI; // Connect to MongoDB with Mongoose.

_mongoose.default.connect(db, {
  useCreateIndex: true,
  useNewUrlParser: true
}).then(function () {
  return console.log("MongoDB connected");
}).catch(function (err) {
  return console.log(err);
});

app.use("/graphql", (0, _cors.default)(), _bodyParser.default.json(), (0, _expressGraphql.default)({
  schema: _graphql.default,
  graphiql: true
}));
app.listen(PORT, function () {
  return console.log("Server running on port ".concat(PORT));
});
//# sourceMappingURL=server.js.map