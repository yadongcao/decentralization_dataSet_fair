import { Box, Flex, Image, Link as RebassLink } from 'rebass'
import { Link, routes } from '@redwoodjs/router'

import Profile from 'src/components/Profile'

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
        <Link to={routes.home()}>
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
          <RebassLink
            variant="nav"
            href="/"
            sx={{
              pr: '66px',
              color: 'text',
              fontFamily: 'heading',
              fontWeight: 'heading',
              fontSize: '24px',
            }}
          >
            热门
          </RebassLink>
          <RebassLink
            variant="nav"
            href="/pools/new"
            sx={{
              pr: '66px',
              color: 'text',
              fontFamily: 'heading',
              fontWeight: 'heading',
              fontSize: '24px',
            }}
          >
            新建问题域
          </RebassLink>
          <RebassLink
            variant="nav"
            href="/datasets/new"
            sx={{
              pr: '66px',
              color: 'text',
              fontFamily: 'heading',
              fontWeight: 'heading',
              fontSize: '24px',
            }}
          >
            上传数据集
          </RebassLink>
          <RebassLink
            variant="nav"
            href="/"
            sx={{
              pr: '66px',
              color: 'text',
              fontFamily: 'heading',
              fontWeight: 'heading',
              fontSize: '24px',
            }}
          >
            我的
          </RebassLink>
        </Flex>
      </Box>
      <Profile userSession={userSession} isSingedIn={isSingedIn} />
    </Flex>
  )
}
