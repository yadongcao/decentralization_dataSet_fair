import { Box, Flex, Image, Link  } from 'rebass'
import React from 'react'

import Profile from './Profile'

export default ({ userSession, isSingedIn, logo }) => {
  return (
    <Flex
      flexWrap="wrap"
      sx={{
        px: '220px',
        py: '23px',
        bg: '#f6f6f6',
        height: '173px',
      }}
    >
      <Box flex="1 1 auto">
        <Link href="/">
          <Image
            src={logo}
            sx={{
              left: '220px',
              top: '23px',
              width: '98px',
              height: '114px',
            }}
          />
        </Link>

        <Flex flexWrap="wrap" alignItems="end" px={3}>
          <Link
            variant="nav"
            href="/"
            sx={{
              pr: '66px',
              color: 'black',
              fontFamily: 'heading',
              fontWeight: 'heading',
              fontSize: '24px',
            }}
          >
            热门
          </Link>
          <Link
            variant="nav"
            href="/pools/new"
            sx={{
              pr: '66px',
              color: 'black',
              fontFamily: 'heading',
              fontWeight: 'heading',
              fontSize: '24px',
            }}
          >
            新建问题域
          </Link>
          <Link
            variant="nav"
            href="/datasets/new"
            sx={{
              pr: '66px',
              color: 'black',
              fontFamily: 'heading',
              fontWeight: 'heading',
              fontSize: '24px',
            }}
          >
            上传数据集
          </Link>
          <Link
            variant="nav"
            href="/my"
            sx={{
              pr: '66px',
              color: 'black',
              fontFamily: 'heading',
              fontWeight: 'heading',
              fontSize: '24px',
            }}
          >
            我的
          </Link>
        </Flex>
      </Box>
      <Profile userSession={userSession} isSingedIn={isSingedIn} />
    </Flex>
  )
}
