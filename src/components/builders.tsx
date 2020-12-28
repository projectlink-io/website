import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import * as React from 'react'
import Notifications from 'svg/projectlink-notifications.svg'
import Arrow from 'svg/down-arrow.svg'
import TripleArrow from 'svg/triple-arrow.svg'
import AggregateArrow from 'svg/aggregate-arrow.svg'
import WorkTogether from 'svg/projectlink-work-together.svg'
import Illustration from './illustration'
import TextBlock from './textBlock'

const SectionTitle = props => (
  <Heading as='h2' pb={4} textStyle='h2' {...props} />
)

const SectionBody = props => (
  <Text pb={4} textStyle='h3' color='primary.accent3' {...props} />
)

const Row = props => (
  <Flex
    layerStyle='row'
    justify='space-between'
    {...props}
  />
)

const Builders = () => {
  return (
    <Box w='100%'>
      <Heading as='h3' textStyle='h3'>
        Projectlink
      </Heading>
      <Heading as='h1' textStyle='headline'>
        For builders and suppliers
      </Heading>
      <Row>
        <TextBlock
          heading='We notify you'
          body='We alert you when new projects arrise in your market, using app notifications or email.'
        />
        <Illustration
          as={Notifications}
        />
      </Row>
      <Flex>
        <Illustration
          as={TripleArrow}
          d={['none', 'none', 'block']}
          w='auto'
        />
        <Flex
          flexDir='column'
          justify='space-around'
        >
          <TextBlock
            heading='View project details'
            body='Project owners post details and requirements for you.'
          />
          <TextBlock
            heading='Connect directly'
            body='Chat directly with project owners to start the connection.'
          />
        </Flex>
      </Flex>
      <Flex py={[0, 0, '80px']} align='center'>
        <TextBlock
          heading='We notify them'
          body="Easily post your product or service, and we'll tell relevant project owners about it."
        />
        <Illustration
          as={AggregateArrow}
          d={['none', 'none', 'block']}
          w='auto'
        />
      </Flex>
      <Box
        d={['block', 'block', 'flex']}
        mt='80px'
      >
        <Illustration
          as={WorkTogether}
          maxW='320px'
          py={[6, 6, 0]}
        />
        <TextBlock
          heading='Work together'
          body='Share documents, specs, or images. Project information and management is always at your fingertips.'
        />
      </Box>
      <Illustration
        as={Arrow}
        maxW='320px'
        my='160px'
        w='auto'
      />
      <Heading
        as='h2'
        textStyle='headline'
        textAlign='center'
      >
        Close the deal
      </Heading>
    </Box>
  )
}

export default Builders
