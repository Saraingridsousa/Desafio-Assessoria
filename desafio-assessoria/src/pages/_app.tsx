import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { Navbar } from '@/components/Navbar'
import { theme } from '@/styles/theme'
import { Footer } from '@/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return(

    <ChakraProvider theme={theme}>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </ChakraProvider>
    
  ) 
}
