"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Users = _interopRequireDefault(require("../../../models/Users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by alexanderpetrov on 24.03.19.
 */
// User schema.
var _default = {
  Query: {
    user: function user(root, args) {
      return new Promise(function (resolve, reject) {
        _Users.default.findOne(args).exec(function (err, res) {
          err ? reject(err) : resolve(res);
        });
      });
    },
    users: function users() {
      return new Promise(function (resolve, reject) {
        _Users.default.find({}).populate().exec(function (err, res) {
          err ? reject(err) : resolve(res);
        });
      });
    }
  },
  Mutation: {
    addUser: function addUser(root, _ref) {
      var id = _ref.id,
          name = _ref.name,
          email = _ref.email;
      var newUser = new _Users.default({
        id: id,
        name: name,
        email: email
      });
      return new Promise(function (resolve, reject) {
        newUser.save(function (err, res) {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editUser: function editUser(root, _ref2) {
      var id = _ref2.id,
          name = _ref2.name,
          email = _ref2.email;
      return new Promise(function (resolve, reject) {
        _Users.default.findOneAndUpdate({
          id: id
        }, {
          $set: {
            name: name,
            email: email
          }
        }).exec(function (err, res) {
          err ? reject(err) : resolve(res);
        });
      });
    },
    deleteUser: function deleteUser(root, args) {
      return new Promise(function (resolve, reject) {
        _Users.default.findOneAndRemove(args).exec(function (err, res) {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
exports.default = _default;
//# sourceMappingURL=index.js.map