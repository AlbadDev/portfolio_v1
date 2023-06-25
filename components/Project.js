import Link from "next/link" 
import style from '../styles/ProjectContainer.module.scss'

import Reveal from "../utils/Reveal"
import ProjectDetails from "./ProjectDetails"

const Project = ({ projects }) => {
    return (
        <div className={style.section}>
            <section className={style.container}  style={{display: 'flex',flexWrap: 'wrap',paddingBottom: 60,paddingBottom: 60,justifyContent:"center"}}>
                {projects?.map( work => (
                    
                    <ProjectDetails key={work.id} work={ work } />
                
                    
                ))}
            
            </section>
            <div style={{display:'flex', justifyContent:'center'}} className={style.backBtn}>
                <Link href="/about"  className={style.Link}>
                    <span style={{ color: "#4feb34", marginRight: "5px" }}>&#8592;</span>{" "}
                    Back{" "}
                </Link>
            </div>
        </div>
    )
}

export default Project
