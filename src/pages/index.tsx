import * as React from 'react'
import Hero from 'components/hero'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import TabbedTeaser from 'components/tabbedTeaser'
import Searching from 'svg/projectlink-searching.svg'
import ChartDude from 'svg/projectlink-invest.svg'
import Layout from 'components/layout'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout
      renderHero={() => (
        <Hero />
      )} >
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
            <Link to='how-it-works'>
              <Button variant='inverted'>
                How does it work?
            </Button>
            </Link>
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
    </Layout>
  )
}

export default IndexPage
