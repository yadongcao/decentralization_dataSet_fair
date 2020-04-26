import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PoolForm from 'src/components/PoolForm'

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
const UPDATE_POOL_MUTATION = gql`
  mutation UpdatePoolMutation($id: Int!, $input: UpdatePoolInput!) {
    updatePool(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ pool }) => {
  const [updatePool, { loading, error }] = useMutation(UPDATE_POOL_MUTATION, {
    onCompleted: () => {
      navigate(routes.pools())
    },
  })

  const onSave = (input, id) => {
    updatePool({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Pool {pool.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <PoolForm pool={pool} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
