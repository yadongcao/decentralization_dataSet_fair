import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import DatasetForm from 'src/components/DatasetForm'

const CREATE_DATASET_MUTATION = gql`
  mutation CreateDatasetMutation($input: CreateDatasetInput!) {
    createDataset(input: $input) {
      id
    }
  }
`

const NewDataset = () => {
  const [createDataset, { loading, error }] = useMutation(CREATE_DATASET_MUTATION, {
    onCompleted: () => {
      navigate(routes.datasets())
    },
  })

  const onSave = (input) => {
    createDataset({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Dataset</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <DatasetForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewDataset
