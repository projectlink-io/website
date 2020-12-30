import { Box, chakra, Flex, Heading, SlideFade } from '@chakra-ui/react'
import * as React from 'react'
import Dudes from 'svg/projectlink-hero.svg'

const Hero = () => {
  const [isRendered, setIsRendered] = React.useState(false)
  React.useEffect(() => {
    setIsRendered(true)
  }, [])

  return (
    <Box
      bgImage='radial-gradient(circle,#D7D7D7,#D7D7D7 1px,#FFF 1px,#FFF)'
      bgSize='30px 30px'
      bgPos='0 0'
    >
      <Flex
        layerStyle='appContainer'
        align='flex-end'
        py='96px'
      >
        {/* <SlideFade in={isRendered} reverse> */}
        <Box
          as={SlideFade}
          in={isRendered}
          maxW='569px'
          offsetY='-60px'
        >
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
        {/* </SlideFade> */}
        <Box
          as={Dudes}
          flexGrow={1}
          d={['none', 'none', 'block']}
        />
      </Flex>
    </Box>
  )
}


export default Hero
