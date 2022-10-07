import Link from 'next/link'
import style from '../styles/ProjectDetails.module.scss'
import {  BsBoxArrowUpRight, BsEyeFill } from 'react-icons/bs'

const ProjectDetails = ({work}) => {
    return (
            <section>
                <section    id={work.id} className={style.section}>
                    <header>
                        <div className={style.left}>
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={style.featherFolder}><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                            <Link href='/projectInfos/[id]' as={`/projectInfos/${work.id}`}>
                                <a ><h2>{work.title}</h2></a>
                            </Link>
                        </div>
                        <div className={style.right}>
                            <Link href='/projectInfos/[id]' as={`/projectInfos/${work.id}`}>
                                <a>
                                    <BsEyeFill className={style.rightIconSecond}/>
                                </a>
                            </Link>

                            <Link href={work.webSite}>
                                <a target='_blank'> 
                                    <BsBoxArrowUpRight  className={style.rightIconFirst}/>
                                </a>
                            </Link>
                           
                        </div>
                    </header>
                    <p>{work.description}</p>
                    <footer className={style.footer}>
                        {work.material.map(tool => <ul key={tool.toString()}><li >{tool}</li></ul>)}
                    </footer>
                </section>
            </section>
    )
}

export default ProjectDetails
