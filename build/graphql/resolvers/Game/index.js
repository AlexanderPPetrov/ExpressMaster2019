"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Games = _interopRequireDefault(require("../../../models/Games"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by alexanderpetrov on 24.03.19.
 */
// Game schema.
var _default = {
  Query: {
    game: function game(root, args) {
      return new Promise(function (resolve, reject) {
        _Games.default.findOne(args).exec(function (err, res) {
          err ? reject(err) : resolve(res);
        });
      });
    },
    games: function games() {
      return new Promise(function (resolve, reject) {
        _Games.default.find({}).populate().exec(function (err, res) {
          err ? reject(err) : resolve(res);
        });
      });
    }
  },
  Mutation: {
    addGame: function addGame(root, _ref) {
      var id = _ref.id,
          name = _ref.name,
          description = _ref.description,
          image = _ref.image;
      var newGame = new _Games.default({
        id: id,
        name: name,
        description: description,
        image: image
      });
      return new Promise(function (resolve, reject) {
        newGame.save(function (err, res) {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editGame: function editGame(root, _ref2) {
      var id = _ref2.id,
          name = _ref2.name,
          description = _ref2.description,
          image = _ref2.image;
      return new Promise(function (resolve, reject) {
        _Games.default.findOneAndUpdate({
          id: id
        }, {
          $set: {
            name: name,
            description: description,
            image: image
          }
        }).exec(function (err, res) {
          err ? reject(err) : resolve(res);
        });
      });
    },
    deleteGame: function deleteGame(root, args) {
      return new Promise(function (resolve, reject) {
        _Games.default.findOneAndRemove(args).exec(function (err, res) {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
exports.default = _default;
//# sourceMappingURL=index.js.map