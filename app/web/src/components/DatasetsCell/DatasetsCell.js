import { Link, routes } from '@redwoodjs/router'

import Datasets from 'src/components/Datasets'

export const QUERY = gql`
  query DATASETS {
    datasets {
      id
      title
      description
      fileUrl
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
      {'No datasets yet. '}
      <Link
        to={routes.newDataset()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ datasets }) => {
  return <Datasets datasets={datasets} />
}
