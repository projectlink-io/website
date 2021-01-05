import * as React from 'react'
import { Box, chakra, Flex, Heading, Tab, Tabs, TabList, TabPanels, Icon, TabPanel } from '@chakra-ui/react'
import * as qS from 'query-string'
import Layout from 'components/layout'
import BusinessWoman from 'svg/projectlink-business-woman.svg'
import BuilderMan from 'svg/projectlink-engineer.svg'
import Eyebrow from 'components/eyebrow'
import { FiBriefcase, FiTool } from 'react-icons/fi'
import ProjectOwners from 'components/projectOwners'
import Builders from 'components/builders'
import SEO from 'components/seo'

const Emphasis = ({ children }) => (
  <chakra.span color='primary.foreground'>{children}</chakra.span>
)

const tabs = [{
  HeroIllustration: BusinessWoman,
}, {
  HeroIllustration: BuilderMan,
}]

export const Illustration = ({ tabIndex }) => {
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

function insertUrlParams(params: { [key: string]: string }) {
  if (!window.location) return null
  if (!history.pushState) return null

  const searchParams = new URLSearchParams(window.location.search)
  Object.keys(params).forEach(key => {
    searchParams.set(key, params[key])
  })

  // const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString();
  window.history.pushState(null, '', `?${searchParams.toString()}`)
}

const HowItWorks = ({ location }) => {
  const firstRender = React.useRef(true)
  const [activeTab, setActiveTab] = React.useState(0)

  const onTabChange = activeIndex => {
    setActiveTab(activeIndex)
    insertUrlParams({ tab: activeIndex === 0 ? 'owners' : 'builders' })
  }

  const query = qS.parse(location.search)
  const defaultIndex = query.tab == 'builders' ? 1 : 0

  React.useEffect(() => {
    if (firstRender.current) {
      setActiveTab(defaultIndex)
      firstRender.current = false
    }
  }, [query])

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
      <SEO title='How it works' description='How does Projectlink work?' />
      <Tabs variant='enclosed' onChange={onTabChange} defaultIndex={defaultIndex}>
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
