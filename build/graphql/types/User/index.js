"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Created by alexanderpetrov on 24.03.19.
 */
var _default = "\n  type User {\n    id: String!\n    name: String!\n    email: String!\n  }\n  type Query {\n    user(id: String!): User\n    users: [User]\n  }\n  type Mutation {\n    addUser(id: String!, name: String!, email: String!): User\n    editUser(id: String, name: String, email: String): User\n    deleteUser(id: String, name: String, email: String): User\n  }\n";
exports.default = _default;
//# sourceMappingURL=index.js.map