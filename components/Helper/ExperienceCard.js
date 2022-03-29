import Grid  from '@material-ui/core/Grid'
import style from '../../styles/ExperienceCard.module.scss'
import {BsCheckCircle} from 'react-icons/bs'




const ExperienceCard = ({ work }) => {

    return (
        <section className={style.sectionContainer}>
            <div className={style.titleContainer}>
                <h1 className={style.cardTitle}>{work.title}</h1>
            </div>
            <div className={style.cardParagraph}>
                <ul>
                    { work.mvp.map(mvp =><p key={work.id} className={style.listTechno}><span><BsCheckCircle style={{color: 'cyan'}}/></span> {mvp}</p> )}
                </ul>
            </div>
            <div className={style.technoContainer}>
                <ul>
                    {
                        work.material.map( list => (
                            <li className={style.listTechno}>{list}</li>
                        ))
                    }
                </ul>
            </div>
        </section> 
    )
}

  
  
  export default ExperienceCard;