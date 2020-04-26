import Pool from 'src/components/Pool'

export const QUERY = gql`
  query FIND_POOL_BY_ID($id: Int!) {
    pool: pool(id: $id) {
      id
      title
      description
      logUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Pool not found</div>

export const Success = ({ pool }) => {
  return <Pool pool={pool} />
}
