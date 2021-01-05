import { Box, Flex, Heading } from '@chakra-ui/react'
import * as React from 'react'
import TextBlock from './textBlock'
import Arrow from 'svg/down-arrow.svg'
import DoubleArrow from 'svg/double-arrows.svg'
import TextInput from 'svg/projectlink-text-field.svg'
import WorkTogether from 'svg/projectlink-work-together.svg'
import Illustration from './illustration'

const ProjectOwners = () => {
  return (
    <Box w='100%'>
      <Heading as='h3' textStyle='h3'>
        Projectlink
      </Heading>
      <Heading as='h1' textStyle='headline'>
        For industrial projects
      </Heading>
      <Flex
        py={12}
      >
        <TextBlock
          heading='Add your project'
          body='Add a few details and project requirements. You always own this data and control who see it.'
        />
        <Box />
      </Flex>
      <Box
        d={['block', 'block', 'flex']}
        alignItems='center'
      >
        <Illustration
          as={Arrow}
          d={['none', 'none', 'block']}
          w='auto'
        />
        <Illustration
          as={TextInput}
          maxW='320px'
          py={[6, 6, 0]}
        />
      </Box>
      <TextBlock
        heading="Decide who it's for"
        body='Make your project private, and only invite the suppliers and builders you trust. Or cast a line and post it publically.'
        my={[4, 4, '80px']}
      />
      <Flex
        py={[0, 0, 12]}
      >
        <Illustration
          w='auto'
          maxW='320px'
          as={DoubleArrow}
          d={['none', 'none', 'block']}
        />
        <Flex
          flexDir='column'
          justify='space-between'
          mb={[0, 0, '-80px']}
        >
          <TextBlock
            heading='Engage your existing contacts'
            body='Projectlink makes it easy to send project notices or details to your existing contacts, individually or all at once.'
            my='80px'
          />
          <TextBlock
            heading='Engage new companies'
            body='We tell potential suppliers and builders about your project. You can chose what they see.'
          />
        </Flex>
      </Flex>
      <Illustration
        as={Arrow}
        maxW='320px'
        my='160px'
        w='auto'
        d={['none', 'none', 'block']}
      />
      <Box
        d={['block', 'block', 'flex']}
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

export default ProjectOwners
