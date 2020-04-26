import DatasetsLayout from 'src/layouts/DatasetsLayout'
import EditDatasetCell from 'src/components/EditDatasetCell'

const EditDatasetPage = ({ id }) => {
  return (
    <DatasetsLayout>
      <EditDatasetCell id={id} />
    </DatasetsLayout>
  )
}

export default EditDatasetPage
