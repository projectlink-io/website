import * as React from 'react'
import Header from 'components/header'
import Footer from 'components/footer'
import { Box } from '@chakra-ui/react'

const Layout = ({ children, renderHero }) => {
  return (
    <>
      <Box
        bgImage='radial-gradient(circle,#D7D7D7,#D7D7D7 1px,#FFF 1px,#FFF)'
        bgSize='30px 30px'
        bgPos='0 0'
      >
        <Header />
        {renderHero()}
      </Box>
      {children}
      <Footer />
    </>
  )
}

export default Layout
