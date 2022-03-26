import Head from 'next/head'
import style from '../styles/Home.module.css'
import Navbar from './Navbar'
import Footer from './Footer'


const Layout = ({children}) => {
    return (
        <>
            <Head>
                <link
                    rel="preload"
                    href="/fonts/polya/POLYA.otf"
                    as="font"
                    crossOrigin=""
                />
            </Head>
            <Navbar />
            <main className={style.main}>
            { children } 
            </main>
            <Footer />
        </>
    )
}

export default Layout

