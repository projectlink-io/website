import { Box, chakra, Flex, Heading } from '@chakra-ui/react'
import * as React from 'react'
import Dudes from 'svg/projectlink-hero.svg'

const Hero = () => (
  <Flex
    layerStyle='appContainer'
    align='flex-end'
    py='96px'
  >
    <Box maxW='569px'>
      <Heading
        as='h1'
        textStyle='headline'
      >
        <chakra.span color='primary.accent3'>A platform that</chakra.span><br />
      connects heavy industry projects, builders, and suppliers
      </Heading>
      <Heading
        as='h2'
        textStyle='h2'
        color='primary.accent3'
        maxW='420px'
        pt={4}
      >
        For project leaders, suppliers, and builders of heavy industry machinery
      </Heading>
    </Box>
    <Box
      as={Dudes}
      flexGrow={1}
      // pl={4}
      // mb={-4}
      // w='100%'
      // h='100%'
      // h='100%'
      // w='100%'
      // h='253px'
      d={['none', 'none', 'block']}
    />
    {/* <Dudes /> */}
    {/* </Box> */}
  </Flex>
)

export default Hero
