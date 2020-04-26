import { Link, routes } from '@redwoodjs/router'

import Pools from 'src/components/Pools'

export const QUERY = gql`
  query POOLS {
    pools {
      id
      title
      description
      logUrl
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center">
      {'No pools yet. '}
      <Link
        to={routes.newPool()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ pools }) => {
  return <Pools pools={pools} />
}
