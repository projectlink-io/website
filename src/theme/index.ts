import { extendTheme } from '@chakra-ui/react'
import styles from './styles'
import layerStyles from './layerStyles'
import textStyles from './textStyles'
import fonts from './fonts'
import colors from './colors'
import components from './components'

export default extendTheme({
  // @ts-ignore
  colors,
  styles,
  fonts,
  layerStyles,
  textStyles,
  components,
})
