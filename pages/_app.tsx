import 'tailwindcss/tailwind.css'
import '../styles/tailwind.css'
import type { AppProps } from 'next/app'
import { GlobalProvider } from '../context/GlobalState'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}
export default MyApp
