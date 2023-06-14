import Head from 'next/head'
import Project from '../components/Project'
import style from '../styles/Project.module.scss'




const project = ({ projects }) => {
    return (
        <>
            <Head>
                <title>Albad | Project</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
            </Head>
            <div className={style.myProject}>
                <h4 className={style.myWork} >Personal Work</h4>
            </div>
            <section className={style.myProject}>
                <Project projects={ projects }/>
            </section>
            
        </>
    )
}

export default project


export const getStaticProps = async (context) => {
    const response = await fetch('http://localhost:3000/api/projectInfos')
    const projects = await response.json()

    return {
        props : {
            projects
        }
    }
}