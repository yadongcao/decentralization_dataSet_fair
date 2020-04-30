import { Flex, Card, Heading, Image, Text } from 'rebass'
import { Button } from 'antd'
import  React,{ useState, useEffect } from 'react'
import { Person } from 'blockstack'

import SignIn from './SignIn'

const avatarFallbackImage =
  'https://s3.amazonaws.com/onename/avatar-placeholder.png'
const name = 'Nameless Person'
const defaultPerson = {
  name() {
    return name
  },
  avatarUrl() {
    return avatarFallbackImage
  },
}
export default ({ userSession, isSingedIn }) => {
  const [person, setPerson] = useState(defaultPerson)
  // run once componentDidMount
  // console.log(isSingedIn)
  useEffect(() => {
    if (!isSingedIn) return
    setPerson(new Person(userSession.loadUserData().profile))
  }, [isSingedIn])

  const handleSignIn = (event) => {
    event.preventDefault()
    userSession.redirectToSignIn()
  }

  const handleSignOut = (event) => {
    event.preventDefault()
    userSession.signUserOut(window.location.origin)
  }

  return (
    <Flex alignItems="center">
      <Card
        sx={{
          p: 1,
          bg: 'white',
          display: 'flex',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#f6f6f6',
          boxShadow: '7px 2px 6px 0px rgba(0, 0, 0, 0.4)',
          borderTopLeftRadius: 9999,
          borderBottomLeftRadius: 9999,
        }}
      >
        <Image
          sx={{
            ml: 1,
            width: 68,
            height: 68,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'muted',
            borderRadius: 9999,
          }}
          src={isSingedIn ? person.avatarUrl() : avatarFallbackImage}
        />
        <Flex
          sx={{
            pl: 4,
            flexDirection: 'column',
            flexWrap: 'nowrap',
            justifyContent: 'start',
          }}
        >
          <Heading
            sx={{
              color: 'text',
              fontFamily: 'body',
              fontWeight: 'body',
            }}
          >
            {isSingedIn ? person.name() : name}
          </Heading>
          <Text
            sx={{
              color: 'gray',
              textAlign: 'end',
            }}
          >
            {!isSingedIn ? (
              <SignIn handleSignIn={handleSignIn} />
            ) : (
              <Button
                style={{ color: '#777' }}
                onClick={handleSignOut}
                type="link"
              >
                SignOut
              </Button>
            )}
          </Text>
        </Flex>
      </Card>
    </Flex>
  )
}
