import Resume from '../components/Resume'
import Head from "next/head"


const MyResume = ({projects}) => {


    return (
        <div>
            
            <Head>
                <title>Albad | projectData</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
            </Head>

            <div className={style.container}>
                <h4 className={style.resume} >My Resume</h4>
            </div>

        </div>
    )
}

export default MyResume



export const getStaticProps = async () => {
    const response = await fetch('http://localhost:3000/api/projectInfos')
    const projects = await response.json()

    return {
        props : {
            projects,
        }, 
    }
}