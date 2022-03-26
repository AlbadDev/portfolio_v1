import style from '../styles/Footer.module.scss'
import {FaHeart} from 'react-icons/fa'


const Footer = () => {
    return (
        <section className={style.section}>
            <a href='https://github.com/AlbadDev/portfolio_v1' target='_blank'  rel="noreferrer" className={style.a}>
                {/* <footer> */}
                    <p> Build with <FaHeart className={style.FaHeart}/> By AlbadDev @2021</p>
                    <p ></p>
                {/* </footer> */}
            </a>
        </section>
    )
}

export default Footer
