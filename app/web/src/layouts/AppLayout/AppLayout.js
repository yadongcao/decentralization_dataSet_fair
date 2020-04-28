import { Box } from 'rebass'
import { UserSession, AppConfig } from 'blockstack'
import { useEffect, useState } from 'react'
import AppBar from 'src/components/AppBar'
import Footer from 'src/components/Footer'

// init app
const appConfig = new AppConfig()
const userSession = new UserSession({ appConfig: appConfig })
const logo = '/dlakes.png'
const AppLayout = ({ children }) => {
  const [isSingedIn, setIsSingedIn] = useState(userSession.isUserSignedIn())

  // run once componentDidMount
  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession
        .handlePendingSignIn()
        .then((userData) => {
          window.history.replaceState({}, document.title, '/')
          console.log(userData)
          setIsSingedIn(true)
          // this.setState({ userData: userData})
        })
        .catch((err) => console.log(err))
    }
  }, [])

  return (
    <>
      <AppBar userSession={userSession} isSingedIn={isSingedIn} logo={logo} />
      <Box
        sx={{
          width: 1000,
          px: 220,
          py: 60,
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  )
}

export default AppLayout
