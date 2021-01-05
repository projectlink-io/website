import * as React from 'react'
import Layout from 'components/layout'
import Illustration from 'components/illustration'
import { Box, Flex, Heading, Input, Text } from '@chakra-ui/react'
import Eyebrow from 'components/eyebrow'
import Construction from 'svg/projectlink-construction.svg'
import { SubmitEmail } from 'components/footer'
import SEO from 'components/seo'

const BetaProgram = () => {
  return (
    <Layout
      renderHero={() => (
        <Flex
          py='80px'
          align='center'
          layerStyle='appContainer'
        >
          <Illustration
            as={Construction}
            // w='100%'
            h='320px'
            maxW='320px'
            ml='auto'
            mr='-32px'
          />
          <Box layerStyle='textColumn' mr='auto'>
            <Eyebrow>
              Beta program
            </Eyebrow>
            <Heading as='h2' textStyle='h2' color='primary.accent3'>
              Projectlink is starting as a closed beta so we can make sure we get it right.
            </Heading>
          </Box>
        </Flex>
      )}
    >
      <SEO title='Projectlink beta' description='Join the Projectlink beta' />
      <Box
        bg='primary.accent1'
        borderTopWidth='1px'
        borderTopColor='primary.accent2'
      >
        <Box
          layerStyle='appContainer'
          py='80px'
        >
          <Heading as='h3' textStyle='h3'>
            Projectlink
          </Heading>
          <Heading as='h1' textStyle='headline'>
            Beta program
          </Heading>
        </Box>
        <Flex layerStyle='appContainer'>
          <Box
            w={['100%', '100%', '50%']}
            pr={[0, 0, 8]}
          >
            <Heading as='h3' textStyle='h3'>
              Be the first to try the platform
            </Heading>
            <SubmitEmail />
          </Box>
          <Text
            textStyle='h3'
            color='primary.accent3'
            w={['100%', '100%', '50%']}
            pl={[0, 0, 10]}
          >
            Our users play an important role in developing Projectlink. We’ll launch as a closed beta, offering the service to a small group of organizations. This allows us to see how you use the application, listen closely to your feedback, and adapt the software to your needs. The beta program offers early adoption to the platform for free, there’s no commitment or expectation from you.
        </Text>
        </Flex>
      </Box>
    </Layout>
  )
}

export default BetaProgram
