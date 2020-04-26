import PoolsLayout from 'src/layouts/PoolsLayout'
import PoolCell from 'src/components/PoolCell'

const PoolPage = ({ id }) => {
  return (
    <PoolsLayout>
      <PoolCell id={id} />
    </PoolsLayout>
  )
}

export default PoolPage
