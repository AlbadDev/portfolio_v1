import Link from 'next/link'
import style from '../styles/Social.module.scss'
import {FaGithub, FaCodepen, FaLinkedinIn } from 'react-icons/fa'
import FirstLoad from '../utils/FirstLoad'

export const Social = () => {
    return (
        <FirstLoad>
        <section className={style.social}>
            <div>
                <ul>
                    <li ><Link href='https://github.com/AlbadDev' target='_blank' className={style.gitHub} ><FirstLoad ><FaGithub className={style.Link} /></FirstLoad></Link></li>
                    <li ><Link href='https://codepen.io/Badara'  target='_blank' className={style.codePen}><FirstLoad ><FaCodepen className={style.Link}/></FirstLoad></Link></li>
                    <li ><Link href='https://www.linkedin.com/in/alieu-badara-keita-ba1a3a205/' target='_blank' className={style.linkedIn}><FirstLoad ><FaLinkedinIn className={style.Link}/></FirstLoad></Link></li>
                </ul>
            </div>
        </section></FirstLoad>
    )
}

export default Social
