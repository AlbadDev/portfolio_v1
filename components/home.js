import Link from 'next/link'
import style from '../styles/WelcomPage.module.scss'
import Social from '../components/Social'
import  Grid from '@material-ui/core/Grid'
import {FaArrowRight} from 'react-icons/fa'


const Home = () => {
    return (
        <section className={style.container}>
            <Grid container item={true} className={style.section} xs={12}>
                <Grid item={true} xs={12} sm={8} lg={8}>
                    <h3>Hello World, my name is</h3> 
                    <h2>Alieu Badara Keita.</h2>
                    <h2 className={style.intro}>My work is to build userfull things for the web.</h2>
                </Grid>
                <Grid item={true} xs={12} sm={12} lg={8} style={{display: 'flex'}} >
                    <p className={style.description}>
                        I&apos;m a software engineer specializing in building Front-End (and occasionally designing) exceptional digital experiences. Currently, I&apos;m focused on building accessible, human-centered products.
                        <Link href='/about' className={style.FaArrowRight}>
                            <a><svg  className={style.aboutLink} width="32" height="30" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg></a>
                        </Link>
                    </p>
                </Grid>
            </Grid>
            <Grid item={true} xs={4} >
                <Social />
            </Grid>
        </section>
        /* <FaArrowRight className={style.aboutLink} style={{strokeWidth: '10',marginLeft: 20}} /> */
    )
}

export default Home
