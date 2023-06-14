import Link from 'next/link'
import style from '../styles/Social.module.scss'
import {FaGithub, FaCodepen, FaLinkedinIn } from 'react-icons/fa'
import Reveal from '../utils/Reveal'

const Social = () => {
    return (
        <section className={style.social}>
            <div>
                <ul>
                    <li ><Link href='https://github.com/AlbadDev' target='_blank' className={style.gitHub} ><FaGithub className={style.Link} /></Link></li>
                    <li ><Link href='https://codepen.io/Badara' a target='_blank' className={style.codePen}><FaCodepen className={style.Link}/></Link></li>
                    <li ><Link href='https://www.linkedin.com/in/alieu-badara-keita-ba1a3a205/' target='_blank' className={style.linkedIn}><FaLinkedinIn className={style.Link}/></Link></li>
                </ul>
            </div>
        </section>
    )
}

export default Social
