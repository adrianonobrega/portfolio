
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import  theme  from "../styles/theme"
import Layout from '../components/Layout'
import GlobalStyles from '../styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
          <Layout>
          <Component {...pageProps} />
          </Layout>
            
          
    </ThemeProvider>
  )
}