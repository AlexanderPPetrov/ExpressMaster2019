/**
 * Created by alexanderpetrov on 24.03.19.
 */

export default `
  type Game {
    id: String!
    name: String!
    description: String!
    image: String!
  }
  type Query {
    game(id: String!): Game
    games: [Game]
  }
  type Mutation {
    addGame(id: String!, name: String!, description: String!, image: String!): Game
    editGame(id: String, name: String, description: String, image: String): Game
    deleteGame(id: String, name: String, description: String, image: String): Game
  }
`;