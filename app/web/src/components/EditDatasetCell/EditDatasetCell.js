import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import DatasetForm from 'src/components/DatasetForm'

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
const UPDATE_DATASET_MUTATION = gql`
  mutation UpdateDatasetMutation($id: Int!, $input: UpdateDatasetInput!) {
    updateDataset(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ dataset }) => {
  const [updateDataset, { loading, error }] = useMutation(UPDATE_DATASET_MUTATION, {
    onCompleted: () => {
      navigate(routes.datasets())
    },
  })

  const onSave = (input, id) => {
    updateDataset({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Dataset {dataset.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <DatasetForm dataset={dataset} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
