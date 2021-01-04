import * as React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import Logo from 'svg/projectlink-logo.svg'
import NavLink from './navLink'
import { Link } from 'gatsby'

const Header = () => {
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
      </Flex>
    </Flex>
  )
}

export default Header
