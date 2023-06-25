import { Grid } from "@material-ui/core"
import { Kalam } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/About.module.scss'
import profilPic from '../public/image/profile/profil_image.jpg'
import Social from '../components/Social'
import { FaHandSpock, FaHandPointDown, FaEnvelope, FaLinkedinIn , FaGithub} from 'react-icons/fa'
import {MdOutlinePlayArrow } from 'react-icons/md'
import Link from "next/link"
import Reveal from "../utils/Reveal"
import FirstLoad from "../utils/FirstLoad"


const kalam = Kalam({
    weight: '700',
    subsets: ['latin']
  })




const About = () => {

    const bannerWidth = "80%" || "fit-content"

    return (
        <section className={style.aboutSection}>
            <Head>
                <title>Albad | About Me</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
            </Head>

            <div className={style.about_me}>
                <h4 className={style.about} >About Me</h4>
            </div>
        
            <div className={style.section}>
                <div className={style.info} >

                    {/* <div container  className={style.picture} item={true}> */}
                    {/* <Grid item xs={6} className={style.bannerImgContainer}>
                            <Image src="/image/profile/banner2.jpg" alt='Albad_banner' height={250} width={600} className={style.bannerImg} sm={6} lg={12}/>
                       </Grid> */}
                    {/* <Grid item xs={12} sm={8} className={style.imageContainer}>
                            <Image src={profilPic} alt='Albad_profile' height={250} width={250} className={style.profile} sm={6} lg={12}/>
                       </Grid> */}
                    {/* <Grid item className={style.connectContainer}>
                           <Link href='https://www.linkedin.com/in/alieu-badara-keita-ba1a3a205/'target='_blank'>Connect</Link>
                           <Link href = "mailto: alioubkeita95@gmail.com" target='_blank' ><div><FaEnvelope/></div> Mail</Link>
                       </Grid> */}
                    {/* </div>item={true} xs={12} sm={12} lg={8} style.name    item={true} xs={12} sm={12} md={8} lg={8}*/}

                    <div className={style.personal_info} >

                        <div className={style.hello1}>

                            <div className={style.nameContainer}>
                                <h4 className={style.salutation}><Reveal>Hello! {<FaHandSpock style={{ color: '#E1AE37' }} />}, I &apos; m </Reveal></h4>
                                <h1 className={kalam.className} id={style.name}><Reveal>Alieu Badara </Reveal></h1>
                            </div>
                            <p>
                               <Reveal> <span className={style.firstLetter}>I</span> enjoy creating things that live on the internet.
                                My interest in web development started back in 2018 when I decided to try leaning programing stuff — editing custom button taught me a lot about HTML and CSS!
                                Now coding has developed into a passion of mine with an strong  user experience mindset, specifically, in the web developent.
                                I&#39;ve dedicated my time to gaining proficiency in all intricacies of web development in order to be better .
                                <span style={{ background: 'yellow', color: "black" }}><br /> I&#39;m specializing in building  front-end web application,</span> Able to create clean and functional full-stark  web application as well as professional branding and hight quality user experience.
                                <span style={{ background: 'yellow', color: "black" }}>My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences.</span>
                                When I&#39;m not in front of a computer screen, I&#39;m probably out enjoying the view, playing pool table, reading books or crossing off another item on my bucket list.</Reveal>
                               
                            </p>
                            <Grid className={style.currentJopSeek}>
                                <span className={style.jopSick}><Reveal>Currently looking for new life-changing opportunities! If you like what you <a href="/project" className={style.link}>see</a>, let&apos;s get in <a href="mailto:i.alioubkeita95@gmail.com" target="_blank" rel="noopener noreferrer" className={style.link}>touch</a>!</Reveal></span>
                            </Grid>

                        </div>
                        
                        <div style={{ height: "300px", border: '1px solid #14c7c7' }} className={style.hello2}>
                            

                            <Grid item xs={12} sm={12} className={style.imageContainer}>
                               
                                <Image src={profilPic} alt='Albad_profile' height={300} width={250} className={style.profile} sm={6} lg={12} />
                            
                            </Grid>
                            
                            <div className={style.border}>
                                <Grid item className={style.connectContainer}>
                                   
                                    <Link className={style.connectLink} href = "mailto: alioubkeita95@gmail.com" ><div className={style.cennectIconContainer}><FirstLoad><FaEnvelope/></FirstLoad></div></Link>
                                    <Link className={style.connectLink} href='https://github.com/AlbadDev'target='_blank'><div className={style.cennectIconContainer}><FirstLoad><FaGithub /></FirstLoad></div></Link>
                                    <Link className={style.connectLink} href='https://www.linkedin.com/in/alieu-badara-keita-ba1a3a205/'target='_blank'><div className={style.cennectIconContainer}><FirstLoad><FaLinkedinIn /></FirstLoad></div></Link>
                                </Grid>
                            </div>
                            
                        </div>
                        
                        {/* <div></div> */}

                        {/* 
                        
                        
                         */}

                    </div>

                   


                    <div className={style.skills_container}>
                        

                        <div>
                            <h3 style={{ color: '#14c7c7' }}>TECHNICAL SKILLS</h3>
                        </div>

                        
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <h4 style={{ color: '#8892b0' }}> <Reveal>Few technologies I&apos;ve been working with recently </Reveal></h4>
                            {/* <div style={{ marginTop: 30 }}>
                                <Reveal> <FaHandPointDown style={{ color: '#E1AE37', height: 40 }} /></Reveal>
                            </div> */}
                        </div>

                        <section className={style.skills}>
                            <div>
                                <h5>LANGUAGES</h5>
                                <ul>
                                    <li><MdOutlinePlayArrow className={style.liIcon}/><Reveal>JavaScript(+ES6)</Reveal></li>
                                    <li><MdOutlinePlayArrow className={style.liIcon}/><Reveal>TypeScript</Reveal></li>
                                    <li><MdOutlinePlayArrow className={style.liIcon}/><Reveal>Html (5)</Reveal></li>
                                    <li><MdOutlinePlayArrow className={style.liIcon}/><Reveal>Css (3)</Reveal></li>
                                    <li><MdOutlinePlayArrow className={style.liIcon}/><Reveal>MySql</Reveal></li>
                                </ul>
                            </div>
                            <div>
                                <h5>FRAMEWORKS</h5>
                                <ul>
                                    <li><MdOutlinePlayArrow className={style.liIcon}/><Reveal>Reactjs</Reveal></li>
                                    <li><MdOutlinePlayArrow className={style.liIcon}/><Reveal>Nextjs</Reveal></li>
                                    <li><MdOutlinePlayArrow className={style.liIcon}/><Reveal>Express (Nodejs)</Reveal></li>
                                    <li><MdOutlinePlayArrow className={style.liIcon}/><Reveal>Sass</Reveal></li>
                                    <li><MdOutlinePlayArrow className={style.liIcon}/><Reveal>Material-ui</Reveal></li>
                                </ul>
                            </div>
                            <div>
                                <h5>CLOUD / TOOLS</h5>
                                <ul>
                                    <li><MdOutlinePlayArrow className={style.liIcon}/><Reveal>AWS</Reveal></li>
                                    <li><MdOutlinePlayArrow className={style.liIcon}/><Reveal>Firebase</Reveal></li>
                                    <li><MdOutlinePlayArrow className={style.liIcon}/><Reveal>Git & Github</Reveal></li>
                                    <li><MdOutlinePlayArrow className={style.liIcon}/><Reveal>Postman</Reveal></li>
                                    <li><MdOutlinePlayArrow className={style.liIcon}/><Reveal>Chrome Debugger</Reveal></li>
                                </ul>
                            </div>
                            <div>
                                <h5>DESIGN</h5>
                                <ul>
                                    <li><MdOutlinePlayArrow className={style.liIcon}/><Reveal>Sketch</Reveal></li>
                                    <li><MdOutlinePlayArrow className={style.liIcon}/><Reveal>Figma</Reveal></li>
                                    <li><MdOutlinePlayArrow className={style.liIcon}/><Reveal>Prototyping</Reveal></li>
                                    <li><MdOutlinePlayArrow className={style.liIcon}/><Reveal>Wireframing</Reveal></li>
                                </ul>
                            </div>

                        </section>
                    </div>
                </div>
                <Grid item={true} xs={2} className={style.social}>
                    <Social />
                </Grid>
            </div>
            
            <section className={style.goToWorkButton}>
           
                <Link  href='/project' rel="noreferrer"className={style.button}>Go To Work <span className={style.arrow}>&#x2192;</span></Link>
            </section>
        </section>
    )
}

export default About
