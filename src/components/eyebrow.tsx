import * as React from 'react'
import { Text } from '@chakra-ui/react';

const Eyebrow = props => (
  <Text
    color='highlight.salmon'
    textTransform='uppercase'
    fontWeight={700}
    fontSize='12px'
    letterSpacing='wide'
    {...props}
  />
)

export default Eyebrow
