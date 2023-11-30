import style from '../styles/Footer.module.scss'
import {FaHeart} from 'react-icons/fa'
import FirstLoad from '../utils/FirstLoad'
import Link from 'next/link'


const Footer = () => {
    return (
        
        <section className={style.section}>
            <Link  href='https://github.com/AlbadDev/portfolio_v1' target='_blank'  rel="noreferrer" className={style.a}>
                {/* <footer> */}
                    <p><FirstLoad> Build with <FaHeart className={style.FaHeart}/> By AlbadDev @2021</FirstLoad></p>
                    <p ></p>
                {/* </footer> */}
            </Link>
        </section>
        
    )
}

export default Footer
