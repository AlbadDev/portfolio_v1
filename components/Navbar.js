'use client'

import style from '../styles/Navbar.module.scss'
import Link from 'next/link'
import { FaStream } from 'react-icons/fa'
import ActiveLink from './Helper/ActiveLink'
import FirstLoad from '../utils/FirstLoad'
import { useState, useEffect } from 'react'

export const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    //........
    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          if (scrollPosition > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <nav className={isScrolled ?  style.navScroll : style.nav } >
            <i>Albad</i>
            <section className={style.section}>
                <ul>
                    <li><Link href='/'><FirstLoad ><ActiveLink  href='/'> 0.Home </ActiveLink></FirstLoad></Link></li>
                    <li><Link href='/about'><ActiveLink href='/about'><FirstLoad > 1.About </FirstLoad> </ActiveLink></Link></li>
                    <li><Link href='/project'><ActiveLink href='/project'><FirstLoad >2.Work</FirstLoad></ActiveLink></Link></li>
                    <li className={style.resume} style={{color:'#14c7c7'}}><Link href='/resume'><ActiveLink href='/resume'><FirstLoad >3.Resume</FirstLoad></ActiveLink></Link></li>
                </ul>
            </section>
            <FaStream className={style.menu} style={{height:30}}/>
        </nav>
    )
}

export default Navbar
/*  */