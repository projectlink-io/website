// https://chakra-ui.com/guides/integrations/with-gatsby#gatsby-plugin
import * as React from "react"
import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import theme from "./src/theme"

export const wrapRootElement = ({ element }) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {element}
    </ChakraProvider>
  )
}
