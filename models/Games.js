/**
 * Created by alexanderpetrov on 24.03.19.
 */
import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the Game Schema.
const GameSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const Game = mongoose.model("Game", GameSchema);

export default Game;