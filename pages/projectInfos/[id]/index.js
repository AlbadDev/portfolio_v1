import Grid  from '@material-ui/core/Grid'
import style from '../../../styles/ProjectInfo.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { FaGithub, FaCogs, FaLaptop, FaPalette, FaWrench,FaMedapps, FaStaylinked} from 'react-icons/fa'
import {BsBoxArrowUpRight, BsInfoCircle, BsCheck, BsCheckCircle} from 'react-icons/bs'


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
            <div className={style.link}>
                <div className={style.websiteLink}>
                    <span className={style.visiteText}>Visite website</span> <Link href='/'><a className={style.visiteLink}><BsBoxArrowUpRight   className={style.icon}/> </a></Link>
                </div>
                <div className={style.websiteLink}>
                    Check GitHub<Link href={project.github}><a target='_blank'><FaGithub  className={style.icon}/> </a></Link>
                </div>
            </div>
            <header className={style.header}>
                <div className={style.imageContainer}>
                    <div className={style.firstContainer}>
                        {project.mobileScreen && <Image className={style.firstImage}  src={project.mobileScreen} width= '150' height='300' alt='pokedex_home' />}
                    </div>
                    <div className={style.secondContainer}>
                        {project.tabScreen && <Image className={style.secondImage}  src={project.tabScreen} width= '300' height='300' alt='pokedex_home' />}
                    </div>
                </div>

                <Grid  container>
                    <p><BsInfoCircle className={style.infoIcon}/> {project.description}</p>
                </Grid>

                <section className={style.childContainer}>
                    <div className={style.title}><h3><FaLaptop /> Complete MVP :</h3></div>
                    <article>
                       <Grid item xs={12} className={style.mvpContainer}> 
                            <ul>
                                {project.mvp.map(mvp =><li key={project.id}><span><BsCheckCircle style={{color: 'cyan'}}/></span> {mvp}</li> )}
                            </ul>
                       </Grid>
                       <div className={style.imageContainer}>
                           <div style={{margin:15}}>
                                {
                                   //project.bodyTabScreen && project.bodyTabScreen.map(screen =>
                                        <Image key={project.id} src= {project.bodyTabScreen} width= '300' height='350' alt='pokedex_home' className={style.bodyImage} />
                                    //) || null
                                }
                           </div>
                           <div >
                                {
                                   // project.bodyMobileScreen && project.bodyMobileScreen.map(screen => 
                                        <Image key={project.id} src={project.bodyMobileScreen} width= '150' height='300' alt='pokedex_home' className={style.bodyImage}/>
                                    //) || null
                                }
                           </div>
                           <div className={style.errorTypeContainer}>
                              { project.errorType && <Image className={style.errorTypeImage} src={project.errorType} width='155' height='350' alt='errorImage'/> || null}
                           </div>
                            
                       </div>
                    </article>
                </section>

                <section className={style.childContainer}>
                    <div className={style.title}><h3><FaCogs /> Stack :</h3></div>
                    <p>There are a the list of technologies and colors palettes I used to build and design <span style={{color: 'cyan',marginLeft: 5}}> {project.title}</span>.</p>
                    <article className={style.article}>
                        <Grid item xs={12} sm={6} lg={4} className={style.stackChild} style={{marginBottom: 20}}>
                            <h4><FaWrench /> Tecnologies :</h4>
                           <div className={style.tecnoContainer}>
                                <ul>
                                    {project.material.map(tecno =>
                                      <li key={tecno.toString()} ><div><Image className={style.tecnoIcon}  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tecno.toLowerCase()}/${tecno.toLowerCase()}-original.svg`} alt={tecno.toString()} width='30px' height='30px' marginright='10px'/></div> <span>{tecno}</span></li> 
                                    )}
                                </ul>
                           </div>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4} className={style.stackChild}>
                            <h4><FaPalette /> Colors :</h4>
                            <div className={style.tecnoContainer}>
                                <ul>
                                    {project.colors.map(color => 
                                        <li key={color.toString()}><div className={style.circle} style={{background:color}}></div> {color}</li>
                                    )}
                                </ul>
                            </div>
                        </Grid>
                    </article>
                    <Grid item xs={10} className={style.deep}>
                        <Grid item xs={12} sm={12} lg={12} className={style.deepChild}>
                            <h4><span className={style.faCat}><FaMedapps style={{color:'yellow'}}/></span> In Deep :</h4>
                            <div>
                                <ul>
                                    {project.inDeep.map(deep => <li key={project.id}><span><BsCheck /></span> {deep}</li>)}
                                </ul>
                            </div>
                        </Grid>
                    </Grid>
                    
                    <Grid className={style.bottomNav}>
                        <section className={style.container}>
                            <div className={style.firstListLink}>
                                <Link href='/project'><a><span style={{color:'#4feb34'}}>&#8592;</span>  Back to projects</a></Link>
                            </div>
                            <section className={style.secondListLink}> 
                                <div>
                                    <Link href='/'><a><BsBoxArrowUpRight style={{color:'#ebdf34'}}/> Visite website</a></Link>
                                </div>
                                <div>
                                    <Link href={project.github}><a target='_blank'><FaGithub style={{color:'#346beb'}}/> Check GitHub</a></Link>
                                </div>
                            </section>
                       </section>
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