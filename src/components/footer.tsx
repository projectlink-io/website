import * as React from 'react'
import { Box, Button, chakra, Flex, Input, Stack, Text, useToast } from '@chakra-ui/react';
import Goals from 'svg/projectlink-goals.svg'
import Logo from 'svg/projectlink-logo.svg'
import NavLink from './navLink'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const re = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)

const PitchForm = () => {
  const toast = useToast()
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  const onSubmit = async e => {
    e.preventDefault()
    const email = e.target.elements.email.value
    if (!re.test(email)) return setError('Invalid email')

    setIsLoading(true)

    try {
      setError('')
      await addToMailchimp(email)
      toast({
        description: "Thank you for your interest! We'll be in touch.",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
    } catch (e) {
      toast({
        description: e.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    }

    setIsLoading(false)
  }

  return (
    <Stack spacing={4}>
      <Text textStyle='h3'>
        Start free.&nbsp;
      <chakra.span color='primary.accent3'>
          Only pay for heavy usage
      </chakra.span>
      </Text>
      <Text textStyle='h3'>
        Secure.&nbsp;
      <chakra.span color='primary.accent3'>
          Industry leading infrastructure
      </chakra.span>
      </Text>
      <Text textStyle='h3'>
        Private.&nbsp;
      <chakra.span color='primary.accent3'>
          You own and contorl your data
      </chakra.span>
      </Text>
      <chakra.form onSubmit={onSubmit}>
        <Input
          id='email'
          placeholder='Email'
          mt={6}
        />
        {error && (
          <Text
            color='error.default'
          >
            {error}
          </Text>
        )}
        <Button
          variant='link'
          isLoading={isLoading}
          type='submit'
          mt={4}
        >
          Request beta access →
        </Button>
      </chakra.form>
    </Stack>
  )
}

const Footer = () => (
  <Box
    bg='primary.accent1'
  >
    <Flex
      layerStyle='appContainer'
      justify='space-between'
      py='80px'
    >
      <Box
        as={Goals}
        w='100%'
        maxW='300px'
        mx='auto'
      />
      <PitchForm />
    </Flex>
    <Flex
      layerStyle='appContainer'
      justify='space-between'
      pt='64px'
    >
      <Box>
        <NavLink
          color='primary.accent3'
          href='/how-it-works'
        >
          How does it work?
        </NavLink>
        <NavLink
          color='primary.accent3'
          href='/beta-program'
        >
          Beta program
        </NavLink>
      </Box>
      <Box
        as={Logo}
      />
    </Flex>
  </Box>
)

export default Footer
