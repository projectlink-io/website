import * as React from 'react'
import { Link as ChakraLink } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'

const NavLink = ({ href, isExternal = false, ...rest }) => (
  // @ts-ignore
  <ChakraLink
    mr={[0, 0, 2]}
    mb={[2, 2, 0]}
    py={1.5}
    px={2}
    fontSize='sm'
    borderRadius='md'
    _hover={{
      bg: '#EAEAEA',
    }}
    {...(isExternal ? { href } : { as: GatsbyLink, to: href })}
    {...rest}
  />
)

export default NavLink
