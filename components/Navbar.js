import style from '../styles/Navbar.module.scss'
import Link from 'next/link'
import { FaStream } from 'react-icons/fa'



const Navbar = () => {
    return (
        <nav className={style.nav}>
            <i>Albad</i>
            <section className={style.section}>
                <ul>
                    <li><Link href='/'><a>Home</a></Link></li>
                    <li><Link href='/about'><a>About</a></Link></li>
                    <li><Link href='/project'><a>Work</a></Link></li>
                    <li className={style.resume} style={{color:'#14c7c7'}}><Link href='/resume'><a>Resume</a></Link></li>
                    
                </ul>
            </section>
            <FaStream className={style.menu} style={{height:30}}/>
        </nav>
    )
}

export default Navbar
