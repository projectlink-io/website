import * as React from 'react'
import { Box, Button, Flex, Heading, Icon, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { FiBriefcase, FiTool } from 'react-icons/fi'
import NewPostIllustration from 'svg/projectlink-new-post.svg'
import FeedIllustration from 'svg/projectlink-feed.svg'
import { Link } from 'gatsby'

const Pitch = ({ title, body, Svg }) => (
  <>
    <Box
      layerStyle='textColumn'
    >
      <Heading
        as='h4'
        textStyle='h4'
        pb={3}
      >
        Projectlink
      </Heading>
      <Heading
        as='h3'
        textStyle='h2'
        pb={4}
      >
        {title}
      </Heading>
      <Text
        textStyle='h3'
        color='primary.accent3'
        pb={8}
      >
        {body}
      </Text>
      <Link to='/how-it-works'>
        <Button variant='outline'>
          How does it work?
        </Button>
      </Link>
    </Box>
    <Box
      as={Svg}
      maxW='200px'
      mx='auto'
    />
  </>
)

const TabbedTeaser = () => (
  <Tabs variant='enclosed'>
    <TabList>
      <Flex
        width='container.lg'
        px={4}
        marginX='auto'
      >
        <Tab>
          <Icon color='primary.accent3' as={() => <FiBriefcase />} />
          &nbsp;Project owners
        </Tab>
        <Tab>
          <Icon color='primary.accent3' as={() => <FiTool />} />
          &nbsp;Builders and suppliers
        </Tab>
      </Flex>
    </TabList>
    <TabPanels bg='primary.accent1'>
      <TabPanel layerStyle='tabPanel'>
        <Pitch
          title='For industrial projects'
          body='Manage projects and suppliers, securely reach out to your network, generate new leads and contacts, all in one fast and easy workflow.'
          Svg={NewPostIllustration}
        />
      </TabPanel>
      <TabPanel layerStyle='tabPanel'>
        <Pitch
          title='For builders and suppliers'
          body='Be alerted to projects in your niche, advertise your products and services to the companies most relevant to you.'
          Svg={FeedIllustration}
        />
      </TabPanel>
    </TabPanels>
  </Tabs>
)

export default TabbedTeaser
