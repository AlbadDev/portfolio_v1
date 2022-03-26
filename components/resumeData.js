import Head from 'next/Head'
import Resume from './Resume'




const projectData = ( {projects} ) => {
    return (
        <>
            <Head>
                <title>Albad | Project</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
            </Head>
            <div >
                <h4  >Personal Work</h4>
            </div>
            <section >
               {/* { projects.map(project => (
                   <h1>{project.name}</h1>
                ))} */}
                
            </section>
            <div>
                <h1>Albad dev</h1>
            </div>
        </>
    )
}

export default projectData


export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const projects = await response.json()

    return {
        props : {
            projects
        }
    }
}