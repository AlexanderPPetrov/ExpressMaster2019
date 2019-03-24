/**
 * Created by alexanderpetrov on 24.03.19.
 */

// Game schema.
import Game from "../../../models/Games";

export default {
    Query: {
        game: (root, args) => {
            return new Promise((resolve, reject) => {
                Game.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        games: () => {
            return new Promise((resolve, reject) => {
                Game.find({})
                    .populate()
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    });
            });
        }
    },
    Mutation: {
        addGame: (root, {id, name, description, image}) => {
            const newGame = new Game({id, name, description, image});

            return new Promise((resolve, reject) => {
                newGame.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        editGame: (root, {id, name, description, image}) => {
            return new Promise((resolve, reject) => {
                Game.findOneAndUpdate({id}, {$set: {name, description, image}}).exec(
                    (err, res) => {
                        err ? reject(err) : resolve(res);
                    }
                );
            });
        },
        deleteGame: (root, args) => {
            return new Promise((resolve, reject) => {
                Game.findOneAndRemove(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    }
};