import Layout from '@/Components/Layout/Layout'
import '@/styles/globals.css'
import Login from "../Components/login/loginFrom"

export default function App({ Component, pageProps }) {
  return<Login><Layout>
  <Component {...pageProps} />
  </Layout>
  </Login>
  
 
}
