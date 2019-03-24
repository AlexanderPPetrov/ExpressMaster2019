"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Created by alexanderpetrov on 24.03.19.
 */
var _default = "\n  type Game {\n    id: String!\n    name: String!\n    description: String!\n    image: String!\n  }\n  type Query {\n    game(id: String!): Game\n    games: [Game]\n  }\n  type Mutation {\n    addGame(id: String!, name: String!, description: String!, image: String!): Game\n    editGame(id: String, name: String, description: String, image: String): Game\n    deleteGame(id: String, name: String, description: String, image: String): Game\n  }\n";
exports.default = _default;
//# sourceMappingURL=index.js.map