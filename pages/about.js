import { Grid } from "@material-ui/core"
import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/About.module.scss'
import profilPic from '../public/image/profile/profil_image.jpg'
import Social from '../components/Social'
import {FaHandSpock, FaHandPointDown, FaEnvelope} from 'react-icons/fa'
import Link  from "next/link"

const about = () => {
    return (
        <>
            <Head>
                <title>Albad | About Me</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
            </Head>

            <div className={style.about_me}>
                <h4 className={style.about} >About Me</h4>
            </div>

            <section className={style.section}>
                <section className={style.info} >

                    <Grid container  className={style.picture} item={true}>
                       <Grid item xs={6} className={style.imageContainer}>
                            <Image src={profilPic} alt='Albad_profile' height={250} width={250} className={style.profile} sm={6} lg={12}/>
                       </Grid>
                       <Grid item className={style.connectContainer}>
                           <Link href='https://www.linkedin.com/in/alioune-badara-keita-ba1a3a205/'><a target='_blank'  rel="noreferrer">Connect</a></Link>
                           <a href = "mailto: alioubkeita95@gmail.com" target='_blank'  rel="noreferrer"><div><FaEnvelope/></div> Mail</a>
                       </Grid>
                    </Grid>

                    <Grid item={true} sm={12} lg={8} className={style.personal_info} >
                        <h4 className={style.salutation}>Hi {<FaHandSpock style={{color: '#E1AE37'}}/>}, I &apos; m </h4>
                        <h2 className={style.name}>Alieu Badara Keita</h2>
                        <p>
                            <span className={style.firstLetter}>I</span> enjoy creating things that live on the internet.
                             My interest in web development started back in 2018 when I decided to try leaning programing stuff — turns out hacking together a custom reblog button taught me a lot about HTML and CSS!
                             Now coding has developed into a passion of mine with a strong technical problem solving, specifically, in the web developent.
                             I&#39;ve dedicated my time to gaining proficiency in all intricacies of web development in order to be better day to day as a developer. 
                             <span style={{background: 'yellow',color: "black"}}><br/> I&#39;m specializing in building  front-end web application,</span> Able to create clean and functional websites as well as professional branding and hight quality user experience.
                             <span style={{background: 'yellow',color: "black"}}>My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences.</span>
                             When I&#39;m not in front of a computer screen, I&#39;m probably out enjoying the view, playing pool table, reading books or crossing off another item on my bucket list.
                        </p>

                        <Grid className={style.currentJopSeek}>
                            <p>Currently looking for new life-changing opportunities! If you like what you <a href="/project" className={style.link}>see</a>, let's get in <a href="mailto:i.alioubkeita95@gmail.com" target="_blank" rel="noopener noreferrer" className={style.link}>touch</a>!</p>
                        </Grid>

                    </Grid>

                    

                    <div className={style.skills_container}>
                        <div style={{display: "flex",justifyContent: "center",alignItems:"center"}}>
                            <h4 style={{color: '#8892b0'}}> Here are a few technologies I’ve been working with recently </h4>
                            <div style={{marginTop: 30}}>
                                <FaHandPointDown style={{color: '#E1AE37',height:40}}/>
                            </div>
                        </div>
                        
                        <div>
                            <h3 style={{color: '#14c7c7'}}>TECHNICAL SKILLS</h3>
                        </div>
                        <section className={style.skills}>
                            <div>
                                <h5>LANGUAGES</h5>
                                    <ul>
                                    <li>JavaScript(+ES6)</li>
                                    <li>TypeScript</li>
                                    <li>Html (5)</li>
                                    <li>Css (3)</li>
                                </ul>
                            </div>
                            <div>
                                <h5>FRAMEWORKS</h5>
                                <ul>
                                    <li>Reactjs</li>
                                    <li>Nextjs</li>
                                    <li>Sass</li>
                                    <li>Material-ui</li>
                                </ul>
                            </div>
                            <div>
                                <h5>TOOLS</h5>
                                <ul>
                                    <li>Git & Github</li>
                                    <li>Bash</li>
                                    <li>Postman</li>
                                    <li>Chrome Debugger</li>
                                </ul>
                            </div>
                            <div>
                                <h5>DESIGN</h5>
                                <ul>
                                    <li>Sketch</li>
                                    <li>Figma</li>
                                    <li>Prototyping</li>
                                    <li>Wireframing</li>
                                </ul>
                            </div>
                            
                        </section>
                    </div>
                </section>
                <Grid item={true} xs={2} className={style.social}>
                    <Social />
                </Grid>
            </section>
        </>
    )
}

export default about
