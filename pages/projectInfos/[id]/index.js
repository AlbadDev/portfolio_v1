import Grid  from '@material-ui/core/Grid'
import style from '../../../styles/ProjectInfo.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { FaGithub, FaCogs, FaLaptop, FaPalette, FaWrench,FaMedapps, FaStaylinked} from 'react-icons/fa'
import {BsBoxArrowUpRight, BsInfoCircle, BsCheck, BsCheckCircle} from 'react-icons/bs'
import Reveal from '../../../utils/Reveal'
import FirstLoad from '../../../utils/FirstLoad'
import { Stint_Ultra_Expanded } from 'next/font/google'


// const myImageLoader = () => {
//     return `https://raw.githubusercontent.com/AlbadDev/portfolio_v1/master/public/image/reposImages/${project.name}/${project.}`
// }


const project = ({project}) => {
    return (
        <>
            <Head>
                <title>Project | {project.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link  href="/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
            </Head>
        <div className={style.projectName}>
                <h4 className={style.name} >{project.title}</h4>
        </div>

        <section className={style.section}>
            {/* <div className={style.link}>
                <div className={style.websiteLink}>
                    <span className={style.visiteText}> </span> <Link href='/'className={style.visiteLink}><FirstLoad><BsBoxArrowUpRight   className={style.icon}/> </FirstLoad></Link>
                </div>
                <div className={style.websiteLink}>
                    <Link href={project.github}target='_blank' className={style.visiteLink}><FirstLoad><FaGithub  className={style.icon}/></FirstLoad></Link>
                </div>
                <FirstLoad>Codebase</FirstLoad>   <FirstLoad>Visite website</FirstLoad>
            </div> */}
            <header className={style.header}>
                <div className={style.imageContainer}>
                    <div  className={style.firstContainer}>
                        {project.mobileScreen && <Reveal><Image className={style.firstImage}  src={project.mobileScreen} width= '150' height='300' alt='pokedex_home' /></Reveal> }
                    </div>
                    <div  className={style.secondContainer}>
                        {project.tabScreen && <Reveal> <Image className={style.secondImage}  src={project.tabScreen} width= '300' height='300' alt='pokedex_home' /></Reveal>}
                    </div>
                </div>

               <FirstLoad> <Grid  container>
                    <p ><BsInfoCircle className={style.infoIcon}/><Reveal> {project.description}</Reveal></p>
                </Grid></FirstLoad>

                <section className={style.childContainer}>
                    <FirstLoad><div className={style.title}><h3><FaLaptop /> Complete MVP :</h3></div></FirstLoad>
                    <article>
                       <Grid item xs={12} className={style.mvpContainer}> 
                            <ul>
                                {project.mvp.map(mvp =><li key={project.id}><span></span><Reveal><BsCheckCircle style={{color: 'cyan'}}/>{mvp}</Reveal> </li> )}
                            </ul>
                       </Grid>
                        <div className={style.imageContainer}>
                           <div style={{margin:15}}>
                                {
                                   //project.bodyTabScreen && project.bodyTabScreen.map(screen =>
                                   <FirstLoad>  <Image key={project.id} src= {project.bodyTabScreen} width= '300' height='350' alt='pokedex_home' className={style.bodyImage} /></FirstLoad>
                                    //) || null
                                }
                           </div>
                           <div >
                                {
                                   // project.bodyMobileScreen && project.bodyMobileScreen.map(screen => 
                                   <FirstLoad> <Image key={project.id} src={project.bodyMobileScreen} width= '150' height='300' alt='pokedex_home' className={style.bodyImage}/></FirstLoad>
                                    //) || null
                                }
                           </div>
                           <div className={style.errorTypeContainer}>
                              { project.errorType &&  <FirstLoad><Image className={style.errorTypeImage} src={project.errorType} width='155' height='350' alt='errorImage'/></FirstLoad> || null}
                           </div>
                            
                       </div>{/**/}
                    </article>
                </section>

                <section className={style.childContainer}>
                   <FirstLoad> <div className={style.title}><h3 className={style.stark}><FaCogs className={style.starkIcon}/> Stack :</h3></div></FirstLoad>
                    <p className={style.pListOfTech}><Reveal > There are a the list of technologies and colors palettes I used to build and design <span style={{color: 'cyan',marginLeft: 5}}> {project.title}</span>.</Reveal></p>
                    <article className={style.article}>
                        <Grid item xs={12} sm={6} lg={4} className={style.stackChild} style={{marginBottom: 20}}>
                            <div><FirstLoad><h4 className={style.techTitle}><FaWrench className={style.mecanicIcon}/>Tecnologies : </h4></FirstLoad></div>
                           <div className={style.tecnoContainer}>
                                <ul>
                                    {project.material.map(tecno =>
                                      <Reveal><li key={tecno.toString()} ><div><Image className={style.tecnoIcon}  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tecno.toLowerCase()}/${tecno.toLowerCase()}-original.svg`} alt={tecno.toString()} width={30} height={30} marginright='10px'/></div> <span>{tecno}</span></li></Reveal> 
                                    )}
                                </ul>
                           </div>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4} className={style.stackChild}>
                        <div><FirstLoad><h4  className={style.techTitle}><FaPalette className={style.mecanicIcon}/> Colors :</h4></FirstLoad></div>
                            <div className={style.tecnoContainer}>
                                <ul>
                                    {project.colors.map(color => 
                                       <Reveal> <li key={color.toString()}><div className={style.circle} style={{background:color}}></div>{color} </li></Reveal>
                                    )}
                                </ul>
                            </div>
                        </Grid>
                    </article>
                    <Grid item xs={10} className={style.childContainer}>
                        <Grid item xs={12} sm={12} lg={12} className={style.deepChild}>
                            <div className={style.title}><FirstLoad><h3><span className={style.faCat}><FaMedapps style={{color:'yellow'}}/></span> In Deep :</h3></FirstLoad></div>
                            {/* <div> <h4><span className={style.faCat}><FaMedapps style={{color:'yellow'}}/></span> In Deep :</h4></div> */}
                            <div>
                                <ul>
                                    {project.inDeep.map(deep => <FirstLoad><li key={project.id}><span><BsCheck /></span> {deep}</li></FirstLoad>)}
                                </ul>
                            </div>
                        </Grid>
                    </Grid>
                    
                    <Grid className={style.bottomNav}>
                        <FirstLoad>
                        <section className={style.container}>
                            <div className={style.linkContainer}>
                                <Link href='/project' className={style.Link}><span style={{color:'#4feb34', marginRight:'5px'}}>&#8592;</span>  Back </Link>
                            </div>
                            <section className={style.secondListLink}> 
                                <div className={style.linkContainer}>
                                    <Link href='/' className={style.Link}><BsBoxArrowUpRight  style={{color:'#ebdf34', marginRight:'5px'}}/> Live</Link>
                                </div>
                                <div className={style.linkContainer}>
                                    <Link href={project.github}target='_blank' className={style.Link}><FaGithub style={{color:'#346beb', marginRight:'5px'}}/> Code</Link>
                                </div>
                            </section>
                       </section>
                       </FirstLoad>
                    </Grid>                     
                </section>
            </header>
        </section>
        </>
    )
}




/*..................*Data fetching*..........................................*/ 
export default project

export const getStaticProps = async (context) => {
    const { id } = context.params
    const response = await fetch(`http://localhost:3000/api/projectInfos/${id}`)
    const project = await response.json()

    return {
        props: {project}
    }
}

export const getStaticPaths = async () => {
    const response = await fetch(`http://localhost:3000/api/projectInfos`)
    const projects = await response.json()

    const paths = projects.map(project => (
        {
            params: {
                id : project.id
            }
        }
    ))

    return {
        paths,
        fallback: false
    }
}