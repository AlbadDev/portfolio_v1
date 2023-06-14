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
                    <li><Link href='/'><ActiveLink  href='/'> Home </ActiveLink></Link></li>
                    <li><Link href='/about'><ActiveLink href='/about'> About </ActiveLink></Link></li>
                    <li><Link href='/project'><ActiveLink href='/project'>Work</ActiveLink></Link></li>
                    <li className={style.resume} style={{color:'#14c7c7'}}><Link href='/resume'><ActiveLink href='/resume'>Resume</ActiveLink></Link></li>
                </ul>
            </section>
            <FaStream className={style.menu} style={{height:30}}/>
        </nav>
    )
}

export default Navbar
