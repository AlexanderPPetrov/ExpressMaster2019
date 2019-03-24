/**
 * Created by alexanderpetrov on 24.03.19.
 */
export default `
  type User {
    id: String!
    name: String!
    email: String!
  }
  type Query {
    user(id: String!): User
    users: [User]
  }
  type Mutation {
    addUser(id: String!, name: String!, email: String!): User
    editUser(id: String, name: String, email: String): User
    deleteUser(id: String, name: String, email: String): User
  }
`;