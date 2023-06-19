import Link from "next/link" 


import Reveal from "../utils/Reveal"
import ProjectDetails from "./ProjectDetails"

const Project = ({ projects }) => {
    return (
        <>
        <section  style={{display: 'flex',flexWrap: 'wrap',paddingBottom: 60,paddingBottom: 60,justifyContent:"center"}}>
            {projects?.map( work => (
                
                <ProjectDetails key={work.id} work={ work }/>
               
                
            ))}
           
        </section>
        <div style={{display:'flex', justifyContent:'center'}}>
                <Link href="/about" style={{color:'#14c7c7'}}>
                <span style={{ color: "#4feb34", marginRight: "5px" }}>&#8592;</span>{" "}
                Back{" "}
                </Link>
            </div>
        </>
    )
}

export default Project
