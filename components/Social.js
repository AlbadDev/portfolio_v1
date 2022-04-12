import Link from 'next/link'
import style from '../styles/Social.module.scss'
import {FaGithub, FaCodepen, FaLinkedinIn } from 'react-icons/fa'

const Social = () => {
    return (
        <section className={style.social}>
            <div>
                <ul>
                    <li ><Link href='https://github.com/AlbadDev' ><a target='_blank' className={style.gitHub}><FaGithub className={style.Link} /></a></Link></li>
                    <li ><Link href='https:www.codepen.io'><a target='_blank' className={style.codePen}><FaCodepen className={style.Link}/></a></Link></li>
                    <li ><Link href='https://www.linkedin.com/in/alioune-badara-keita-ba1a3a205/' ><a target='_blank' className={style.linkedIn}><FaLinkedinIn className={style.Link}/></a></Link></li>
                </ul>
            </div>
        </section>
    )
}

export default Social
