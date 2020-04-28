import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import preset from '@theme-ui/preset-future'

import Routes from 'src/Routes'

// import './scaffold.css'
// import 'antd/dist/antd.css'
import './index.css'

const theme = {
  ...preset,
}

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider theme={theme}>
      <Routes />
    </RedwoodProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
