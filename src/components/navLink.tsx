import * as React from 'react'
import { Link as ChakraLink } from '@chakra-ui/react'
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

export default NavLink
