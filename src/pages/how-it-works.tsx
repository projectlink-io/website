import * as React from 'react'
import Layout from 'components/layout'
import { Box, chakra, Flex, Heading, Tab, Tabs, TabList, TabPanels, Icon, TabPanel } from '@chakra-ui/react'
import BusinessWoman from 'svg/projectlink-business-woman.svg'
import BuilderMan from 'svg/projectlink-engineer.svg'
import Eyebrow from 'components/eyebrow'
import { FiBriefcase, FiTool } from 'react-icons/fi'
import ProjectOwners from 'components/projectOwners'
import Builders from 'components/builders'

const Emphasis = ({ children }) => (
  <chakra.span color='primary.foreground'>{children}</chakra.span>
)

const tabs = [{
  HeroIllustration: BusinessWoman,
  // Page: ProjectOwners,
}, {
  HeroIllustration: BuilderMan,
  // Page: Builders,
}]

const Illustration = ({ tabIndex }) => {
  return (
    <Box
      as={tabs[tabIndex].HeroIllustration}
      w='100%'
      h='320px'
      maxW='320px'
      ml='auto'
      mr='-32px'
    />

  )
}

const HowItWorks = () => {
  const [activeTab, setActiveTab] = React.useState(0)
  const onTabChange = activeIndex => setActiveTab(activeIndex)

  return (
    <Layout
      renderHero={() => (
        <Flex
          py='80px'
          align='center'
          layerStyle='appContainer'
        >
          <Illustration tabIndex={activeTab} />
          <Box layerStyle='textColumn' mr='auto'>
            <Eyebrow>
              How it works
            </Eyebrow>
            <Heading as='h2' textStyle='h2' color='primary.accent3'>
              Projectlink helps <Emphasis>find</Emphasis>, <Emphasis>connect</Emphasis>,
              and <Emphasis>work</Emphasis> with companies in your industry.
            </Heading>
          </Box>
        </Flex>
      )}
    >
      <Tabs variant='enclosed' onChange={onTabChange}>
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
            <ProjectOwners />
          </TabPanel>
          <TabPanel layerStyle='tabPanel'>
            <Builders />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  )
}

export default HowItWorks
