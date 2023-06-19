import Head from "next/head"
import Image from "next/image"
import { Kalam } from 'next/font/google'
import { GiStarGate, GiEightBall } from 'react-icons/gi'
import { BiPhoneCall, BiEnvelope, BiMap, BiWorld, BiBook } from 'react-icons/bi'
import { FaPlaneDeparture, FaGithub, FaCodepen, FaLinkedinIn, FaRegEnvelope,FaEdit, FaMedapps } from 'react-icons/fa'
import { WiDayCloudy } from 'react-icons/wi'
import { FiDownload } from 'react-icons/fi'
import style from '../styles/MyResume.module.scss'
import ExperienceCard from "./Helper/ExperienceCard"

const kalam = Kalam({
    weight: '700',
    subsets: ['latin']
  })


const Resume = ( { resultData } ) => {

    return (
        <div>
            <Head>
                <title>Albad | Resume</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
            </Head>
            
                <section className={style.resumeContainer}>
                    
                    <div className={style.resumeHead}>
                            <h1 className={kalam.className}><span className={style.firstName}>Alioune</span> Badara</h1>
                            <p className={style.title}>Front-End Software Engineer</p>
                    </div>
                    
                    <div className={style.myResume}>
                        <article className={style.resumeProfilContainer}>
                            <Image className={style.profilPic} src='https://avatars.githubusercontent.com/u/45886747?s=400&u=2ce94d8ac2307558b5d5f0651302d79e9d9775b3&v=4' alt='profile' width='200' height='200'/>
                        </article>
                        <article className={style.resumesocialLink}>
                            <div className={style.userContact}>
                                <ol>
                                    <li><a href="https://github.com/AlbadDev" target='_blank' rel="noreferrer" className={style.gitHub}><FaGithub className={style.socialLink}/></a></li>
                                    <li><a href="https://www.linkedin.com/in/alieu-badara-keita-ba1a3a205/" target='_blank' rel="noreferrer" className={style.linkedIn}><FaLinkedinIn className={style.socialLink}/></a></li>
                                    <li><a href="https://codepen.io/badara" target='_blank' rel="noreferrer" className={style.codePen}><FaCodepen className={style.socialLink}/></a></li>
                                    <li><a href="mailto:alioubkeita95@gmail.com" className={style.mailTo}><FaRegEnvelope  className={style.socialLink}/></a></li>
                                </ol>
                            </div>
                            <div className={style.downloadContainer}>
                            <h4 className={style.text}>Download white Resume</h4>
                                <a href='../public/albadResume.pdf' className={style.download} download><FiDownload className={style.socialLink}/></a>
                            </div>
                        </article>  
                    </div>


                    <div className={style.resumeBody}>
                        <article className={style.resumeBodyLeft}>
                            <div className={style.resumeLeftContainer}>
                                <h2 className={style.header}>SKILLS</h2>
                                <div className={style.listContainer}>
                                    <li className={style.list}> <GiStarGate className={style.listIcon}/> <a href="https://developer.mozilla.org/en-US/docs/Web/HTML#:~:text=HTML%20(HyperText%20Markup%20Language)%20is,functionality%2Fbehavior%20(JavaScript)." target='_blank' rel="noreferrer">HTML5</a></li>
                                    <li className={style.list}> <GiStarGate  className={style.listIcon}/> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target='_blank' rel="noreferrer">CSS3</a></li>
                                    <li className={style.list}> <GiStarGate  className={style.listIcon} /> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target='_blank' rel="noreferrer">JAVASCRIPT</a></li>
                                    <li className={style.list}> <GiStarGate  className={style.listIcon} /> <a href="https://www.typescriptlang.org/" target='_blank' rel="noreferrer">TYPESCRIPT</a></li>
                                    <li className={style.list}> <GiStarGate  className={style.listIcon} /> <a href="https://reactjs.org/" target='_blank' rel="noreferrer">REACT JS</a></li>
                                    <li className={style.list}> <GiStarGate  className={style.listIcon} /> <a href="https://nextjs.org/" target='_blank' rel="noreferrer">NEXTJS</a></li>
                                    <li className={style.list}> <GiStarGate  className={style.listIcon} /> <a href="https://mui.com/" target='_blank' rel="noreferrer">MATERIAL-UI</a></li>
                                    <li className={style.list}> <GiStarGate  className={style.listIcon} /> <a href="https://sass-lang.com/" target='_blank' rel="noreferrer">SASS</a></li>
                                    <li className={style.list}> <GiStarGate  className={style.listIcon} /> <a href="https://firebase.google.com/?gclsrc=aw.ds" target='_blank' rel="noreferrer">FIREBASE</a></li>
                                    <li className={style.list}> <GiStarGate  className={style.listIcon} /> <a href="https://git-scm.com/" target='_blank' rel="noreferrer">GIT/ BASH</a></li>
                                </div>
                            </div>

                            <div className={style.resumeLeftContainer}>
                                <h2 className={style.header}> CONTACTS</h2>
                                <div className={style.listContainer}>
                                    <li className={style.list}><BiPhoneCall className={style.listIcon}/><a href="tel:+220 345 10 04">+220 345 10 04</a> </li>
                                    <li className={style.list}><BiEnvelope className={style.listIcon} /> <a href="mailto:mamesaliou@gmail.com"> alioubkeita95@gmail.com</a></li>
                                    <li className={style.list}><BiMap className={style.listIcon}/><a href='https://gisgeography.com/gambia-map/' target='_blank' rel="noreferrer">Gambia</a> </li>
                                    <li className={style.list}><BiWorld className={style.listIcon}/><a href="https://www.albaddev.io" target="_blank" rel="noreferrer">www.albaddev.io</a> </li>
                                </div>
                            </div>

                            <div className={style.resumeLeftContainer}>
                                <h2 className={style.header}>HOBBIES</h2>
                                <div className={style.listContainer}>
                                    <li className={style.list}><BiBook className={style.listIcon}/>LEARNING</li>
                                    <li className={style.list}><FaPlaneDeparture className={style.listIcon}/>TRAVEL</li>
                                    <li className={style.list}><GiEightBall className={style.listIcon}/>PLAY POOL TABLE</li>
                                    <li className={style.list}><WiDayCloudy className={style.listIcon}/> ENJOY THE VIEW</li>
                                </div>
                            </div>

                            <div className={style.resumeLeftContainer}>
                                <h2 className={style.header}>TECH BOOK</h2>
                                <div className={style.listContainer}>
                                    <li className={style.list}><BiBook className={style.listIcon}/><a  href="https://www.pdfdrive.com/secrets-of-the-javascript-ninja-second-edition-e44753452.html " target="_blank" rel="noreferrer">SECRET OF JAVASCRIPT NINJA</a></li>
                                    <li className={style.list}><BiBook className={style.listIcon}/><a  href="https://www.pdfdrive.com/you-dont-know-js-es6-beyond-d183828940.html " target="_blank" rel="noreferrer">YOU DON'T KNOW JS</a></li>
                                    <li className={style.list}><BiBook className={style.listIcon}/><a  href="https://www.pdfdrive.com/eloquent-javascript-a-modern-introduction-to-programming-e158409266.html " target="_blank" rel="noreferrer">ELOQUENT JS</a></li>
                                    <li className={style.list}><BiBook className={style.listIcon}/><a  href="https://www.pdfdrive.com/react-in-action-e158339623.html " target="_blank" rel="noreferrer">REACT IN ACTION</a></li>
                                </div>
                            </div>
                        </article>

                        <article className={style.resumeBodyRight}>
                        
                            <div className={style.resumeBodyRightHeader}>
                                <h2 className={style.carrerObj}><FaMedapps className={style.objectiveIcon} /> CAREER OBJECTIVE</h2>
                                <p>
                                    A motivated individual with in-depth knowledge of languages and development tools, 
                                    seeking for a full time , part time or internship role as a Junior Front-End Software Engineers
                                    in a growth-oriented company where I can use my skills
                                    to the advantage of the company while learning and growing with a diverse team that works towards 
                                    contributing to the company&apos;s vision and goals.
                                </p>
                            </div>

                            <div className={style.resumeBodyRightBody}>
                                
                                
                                <article className={style.resumeWorkContainer}>
                                    <header className={style.resumeHeadline}><h1>PERSONAL WORK EXPERIENCE</h1></header>
                                    
                                    { resultData.map( work => (

                                       <ExperienceCard key={work.id.toString()} work = { work } />
                                       
                                    ))}
                                </article>

                                <article className={style.resumeEducationContainer}>
                                    <header className={style.resumeHeadline}><h1>WORK EXPERIENCE</h1></header>
                                    {/* <h2>Self-taugth: </h2> */}
                                    <p>Object Oriented Programming, Functional Programming, Data Structures, with problem solving mind set and try developing soft skills to get better. </p>
                                </article>

                            </div>

                        </article>
                    </div> 
                </section>
            
        </div> 
    ) 
}

export default Resume

