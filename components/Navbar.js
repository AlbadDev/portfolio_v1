import style from '../styles/Navbar.module.scss'
import Link from 'next/link'
import { FaStream } from 'react-icons/fa'
import ActiveLink from './Helper/ActiveLink'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <i>Albad</i>
            <section className={style.section}>
                <ul>
                    <li><Link href='/'><a><ActiveLink  href='/'> Home </ActiveLink></a></Link></li>
                    <li><Link href='/about'><a><ActiveLink href='/about'> About </ActiveLink></a></Link></li>
                    <li><Link href='/project'><a><ActiveLink href='/project'>Work</ActiveLink></a></Link></li>
                    <li className={style.resume} style={{color:'#14c7c7'}}><Link href='/resume'><a><ActiveLink href='/resume'>Resume</ActiveLink></a></Link></li>
                </ul>
            </section>
            <FaStream className={style.menu} style={{height:30}}/>
        </nav>
    )
}

export default Navbar
