const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { gql } = require('apollo-server-express'); 

module.exports = { typeDefs, resolvers };