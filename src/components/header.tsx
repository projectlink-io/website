import * as React from 'react'
import { Flex, Link as ChakraLink, Box } from '@chakra-ui/react'
import Logo from 'svg/projectlink-logo.svg'
import { Link as GatsbyLink } from 'gatsby'

const NavLink = ({ href, isExternal = false, ...rest }) => (
  // @ts-ignore
  <ChakraLink
    ml={4}
    fontSize='sm'
    {...(isExternal ? { href } : { as: GatsbyLink, to: href })}
    {...rest}
  />
)

const Header = () => {
  return (
    <Flex
      layerStyle='appContainer'
      justify='space-between'
      align='center'
    >
      <Logo />
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
