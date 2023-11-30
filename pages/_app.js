import '../styles/globals.css'
import Layout from '../components/Layout'
import style from '../styles/Layout.module.scss'
import Image from 'next/image'





function MyApp({ Component, pageProps }) {
  return (
    <Layout className={style.layoutContainer}>
      <div className={style.layout}>
        <div>
          
        </div>
      </div>
       <Component {...pageProps} />
    </Layout>
  )
    
}

export default MyApp
