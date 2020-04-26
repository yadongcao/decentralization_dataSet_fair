import Dataset from 'src/components/Dataset'

export const QUERY = gql`
  query FIND_DATASET_BY_ID($id: Int!) {
    dataset: dataset(id: $id) {
      id
      title
      description
      fileUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Dataset not found</div>

export const Success = ({ dataset }) => {
  return <Dataset dataset={dataset} />
}
