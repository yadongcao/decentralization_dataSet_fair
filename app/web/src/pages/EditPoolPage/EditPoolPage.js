import PoolsLayout from 'src/layouts/PoolsLayout'
import EditPoolCell from 'src/components/EditPoolCell'

const EditPoolPage = ({ id }) => {
  return (
    <PoolsLayout>
      <EditPoolCell id={id} />
    </PoolsLayout>
  )
}

export default EditPoolPage
