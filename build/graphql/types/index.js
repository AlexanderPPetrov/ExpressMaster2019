"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mergeGraphqlSchemas = require("merge-graphql-schemas");

var _User = _interopRequireDefault(require("./User/"));

var _Game = _interopRequireDefault(require("./Game/"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by alexanderpetrov on 24.03.19.
 */
var typeDefs = [_User.default, _Game.default];

var _default = (0, _mergeGraphqlSchemas.mergeTypes)(typeDefs, {
  all: true
});

exports.default = _default;
//# sourceMappingURL=index.js.map