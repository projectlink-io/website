import * as React from 'react'
import { Flex, Box, Button } from '@chakra-ui/react'
import Logo from 'svg/projectlink-logo.svg'
import NavLink from './navLink'
import { Link } from 'gatsby'

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  React.useEffect(() => {
    const cookies = document.cookie.split(';')
    const isLoggedIn = cookies.some(c => c.substr(0, 7) === 'pl-user')
    setIsLoggedIn(isLoggedIn)
  }, [])

  return (
    <Flex
      layerStyle='appContainer'
      justify='space-between'
      align={['flex-start', 'flex-start', 'center']}
      flexDir={['column', 'column', 'row']}
    >
      <Link to='/'>
        <Box as={Logo} mb={3} />
        {/* <Logo /> */}
      </Link>
      <Flex
        align={['flex-start', 'flex-start', 'center']}
        flexDir={['column', 'column', 'row']}
      >
        <NavLink
          href='/how-it-works'
        >
          How does it work?
        </NavLink>
        <NavLink
          href='/beta-program'
        >
          Beta program
        </NavLink>
        {isLoggedIn ? (
          <NavLink
            href='https://projectlink.app/account'
            target='_blank'
            isExternal
          >
            Account
          </NavLink>
        ) : (
          <Button
            as='a'
            href='https://projectlink.app/signup'
            target='_blank'
            bg='#0070F3'
            ml={2}
            borderColor='#0070F3'
            borderWidth='1px'
            color='white'
            _hover={{
              bg: 'white',
              color: '#0070F3',
            }}
          >
            Sign up
          </Button>
        )}
      </Flex>
    </Flex>
  )
}

export default Header
