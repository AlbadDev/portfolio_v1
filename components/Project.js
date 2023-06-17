
import Reveal from "../utils/Reveal"
import ProjectDetails from "./ProjectDetails"

const Project = ({ projects }) => {
    return (
        <section  style={{display: 'flex',flexWrap: 'wrap',paddingBottom: 60,paddingBottom: 60,justifyContent:"center"}}>
            {projects?.map( work => (
                
                    <ProjectDetails key={work.id} work={ work }/>
               
                
            ))}
        </section>
    )
}

export default Project
