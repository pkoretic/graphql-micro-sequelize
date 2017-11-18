const { microGraphql, microGraphiql } = require("apollo-server-micro");
const { buildSchema } = require('graphql')
const { URL } = require('url');

const schema = require('./schema')

module.exports = (req, res) =>
{
    if(req.url === '/graphiql')
        return microGraphiql({endpointURL: '/'})(req, res)

    return microGraphql({ schema })(req, res)
}
