import * as React from 'react'
import { Heading, Text, Box } from '@chakra-ui/react';

function TextBlock({ heading, body, ...rest }) {
  return (
    <Box layerStyle='textColumn' {...rest}>
      <Heading
        pb={2}
        textStyle='h2'
      >
        {heading}
      </Heading>
      <Text
        textStyle='h3'
        pb={6}
        color='primary.accent3'
      >
        {body}
      </Text>
    </Box>
  )
}

export default TextBlock
