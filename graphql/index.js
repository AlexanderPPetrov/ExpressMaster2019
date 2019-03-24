/**
 * Created by alexanderpetrov on 24.03.19.
 */
import { makeExecutableSchema } from "graphql-tools";

import typeDefs from "./types/";
import resolvers from "./resolvers/";

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;