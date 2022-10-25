import { LeftPanel } from '../components'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <main className='mainSection'>
      <LeftPanel />
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
