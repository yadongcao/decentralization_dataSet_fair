export const schema = gql`
  type Dataset {
    id: Int!
    title: String!
    description: String!
    fileUrl: String!
  }

  type Query {
    datasets: [Dataset!]!
    dataset(id: Int!): Dataset!
  }

  input CreateDatasetInput {
    title: String!
    description: String!
    fileUrl: String!
  }

  input UpdateDatasetInput {
    title: String
    description: String
    fileUrl: String
  }

  type Mutation {
    createDataset(input: CreateDatasetInput!): Dataset!
    updateDataset(id: Int!, input: UpdateDatasetInput!): Dataset!
    deleteDataset(id: Int!): Dataset!
  }
`
