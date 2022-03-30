import Grid  from '@material-ui/core/Grid'
import style from '../../styles/ExperienceCard.module.scss'
import {BsCheckCircle} from 'react-icons/bs'




const ExperienceCard = ({ work }) => {

    return (
        <section className={style.experienceCard}>
            <div className={style.workHeader}>
                <h2 className={style.workTitle}>{work.title}</h2>
                <a href='' className={style.workView}>view</a>
            </div>
            <div className={style.workDescription}>
                {work.mvp.map( mvp => (
                    <ul className={style.listContainer}>
                        <li className={style.listOfMvp}><BsCheckCircle className={style.listIcon}/> {mvp}</li>
                    </ul>
                ))}
            </div>
            <div className={style.technoContainer}>
                {work.material.map( material => (
                    <ul className={style.listContainer}>
                        <li className={style.listOfTechno}>{material}</li>
                    </ul>
                ))}
            </div>         
        </section> 
    )
}

  
  
  export default ExperienceCard;