import { MuiThemeProvider } from '@material-ui/core';
import style from '../../styles/ExperienceCard.module.scss'

const ExperienceCard = ({ work }) => {

    return (
        <section className={style.sectionContainer}>
            <div className={style.titleContainer}>
                <h1 className={style.cardTitle}>{work.title}</h1>
            </div>
            <div className={style.cardParagraph}>
                {
                    work.mvp.map(mvp => (
                        <p className={style.paragraph}>{mvp}</p>
                    ))
                }
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