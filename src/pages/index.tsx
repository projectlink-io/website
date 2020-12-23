import * as React from 'react'
import Header from 'components/header'
import Hero from 'components/hero'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import TabbedTeaser from 'components/tabbedTeaser'
import Searching from 'svg/projectlink-searching.svg'
import ChartDude from 'svg/projectlink-invest.svg'

const IndexPage = () => {
  return (
    <Box
      bgImage='radial-gradient(circle,#D7D7D7,#D7D7D7 1px,#FFF 1px,#FFF)'
      bgSize='30px 30px'
      bgPos='0 0'
    >
      <Header />
      <Hero />
      <TabbedTeaser />
      <Box
        bg='primary.accent8'
        layerStyle='row'
      >
        <Flex
          layerStyle='appContainer'
        >
          <Box
            as={Searching}
            w='100%'
            maxW='200px'
            mx='auto'
          />
          <Box layerStyle='textColumn'>
            <Heading
              color='primary.background'
              pb={2}
              textStyle='h2'
            >
              Find the best projects and suppliers for the job
            </Heading>
            <Text
              textStyle='h3'
              pb={6}
              color='primary.accent3'
            >
              Projectlink is designed to help you find, connect, and work with companies in your industry.
            </Text>
            <Button variant='inverted'>
              How does it work?
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box
        layerStyle='row'
      >
        <Flex
          layerStyle='appContainer'
        >
          <Box layerStyle='textColumn'>
            <Heading
              pb={2}
              textStyle='h2'
            >
              Simplify your
              sales process
            </Heading>
            <Text
              textStyle='h3'
              pb={6}
              color='primary.accent3'
            >
              Projectlink is designed to save you time and money
            </Text>
            <Button variant='outline'>
              How does it work?
            </Button>
          </Box>
          <Box
            as={ChartDude}
            w='100%'
            maxW='220px'
            mx='auto'
          />
        </Flex>
      </Box>
    </Box>
  )
}

export default IndexPage
