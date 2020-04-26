import DatasetsLayout from 'src/layouts/DatasetsLayout'
import DatasetCell from 'src/components/DatasetCell'

const DatasetPage = ({ id }) => {
  return (
    <DatasetsLayout>
      <DatasetCell id={id} />
    </DatasetsLayout>
  )
}

export default DatasetPage
