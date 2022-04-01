import Grid  from '@material-ui/core/Grid'
import style from '../../styles/ExperienceCard.module.scss'
import {BsCheckCircle} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import Link from 'next/link'


const ExperienceCard = ({ work }) => {

    return (
        <section key={work.id.toString()} className={style.experienceCard}>
            <div  key={work.id.toString()} className={style.workHeader}>
                <h2 className={style.workTitle}>{work.title}</h2>
                <a href='' className={style.workView}>view</a>
            </div>
            <div  key={work.id.toString()} className={style.workDescription}>
                { work.mvp.map( mvp => (
                    <ul key={mvp.toString()} className={style.listContainer}>
                        <li key={mvp.toString()} className={style.listOfMvp} ><BsCheckCircle className={style.listIcon}/> {mvp}</li>
                    </ul>
                ))}
            </div>
            <div  key={work.id.toString()} className={style.technoContainer}>
                <div className={style.materialContainer}>
                    {work.material.map( material => (
                        // <>
                            <div key={material.toString()} className={style.listContainer}>
                                <li key={material.toString()} className={style.listOfTechno}>{material}</li>
                            </div> 
                        // </>
                    ))}
                </div>
                <div className={style.workGithub}>
                    <Link href={work.github}>
                        <a target='_blank'><FaGithub className={style.githubIcon}/></a>
                    </Link>
                    
                    <h5>Visit GitHub</h5>
                </div>
            </div>         
        </section> 
    )
}

  
  
  export default ExperienceCard;