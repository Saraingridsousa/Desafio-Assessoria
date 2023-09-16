import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { Navbar } from '@/components/Navbar'
import { theme } from '@/styles/theme'
import { Footer } from '@/components/Footer'
import  Login  from '@/pages/login'

export default function App({ Component, pageProps }: AppProps) {
  const isLoginPage = Component === Login;

  return (
    <ChakraProvider theme={theme}>
      {!isLoginPage && <Navbar />}
      <Component {...pageProps} />
      {!isLoginPage && <Footer />}
    </ChakraProvider>
  )
}
