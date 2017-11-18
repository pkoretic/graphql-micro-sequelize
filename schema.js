const { makeExecutableSchema } = require('graphql-tools')
const resolvers  = require('./resolvers')

const typeDefs = `
type Author {
  id: Int
  firstName: String
  lastName: String
  posts: [Post]
}
type Post {
  id: Int
  title: String
  text: String
  views: Int
  author: Author
}
type Query {
  author(id:Int, firstName: String, lastName: String): Author
  getFortuneCookie: String
}
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers })
