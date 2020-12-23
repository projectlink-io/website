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
      align='center'
    >
      <Link to='/'>
        <Logo />
      </Link>
      <Box>
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
      </Box>
    </Flex>
  )
}

export default Header
