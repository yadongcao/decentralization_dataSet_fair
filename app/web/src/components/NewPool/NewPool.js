import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PoolForm from 'src/components/PoolForm'

const CREATE_POOL_MUTATION = gql`
  mutation CreatePoolMutation($input: CreatePoolInput!) {
    createPool(input: $input) {
      id
    }
  }
`

const NewPool = () => {
  const [createPool, { loading, error }] = useMutation(CREATE_POOL_MUTATION, {
    onCompleted: () => {
      navigate(routes.pools())
    },
  })

  const onSave = (input) => {
    createPool({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Pool</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <PoolForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPool
