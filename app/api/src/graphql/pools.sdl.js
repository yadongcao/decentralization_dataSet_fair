export const schema = gql`
  type Pool {
    id: Int!
    title: String!
    description: String!
    logUrl: String!
  }

  type Query {
    pools: [Pool!]!
    pool(id: Int!): Pool!
  }

  input CreatePoolInput {
    title: String!
    description: String!
    logUrl: String!
  }

  input UpdatePoolInput {
    title: String
    description: String
    logUrl: String
  }

  type Mutation {
    createPool(input: CreatePoolInput!): Pool!
    updatePool(id: Int!, input: UpdatePoolInput!): Pool!
    deletePool(id: Int!): Pool!
  }
`
