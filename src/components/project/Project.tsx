import React from "react";
import { IUserDetails } from "../header/Profile";
import { IVersion } from "./Version";
import '../../assets/css/project.css'

export interface IProject {
    creator :IUserDetails | string ,
    title : string , 
    description : string ,
    img : string ,
    versions : IVersion[] | number[],
    modified : string,
    mainVersion : IVersion |number
}

export const Project = (props:IProject) => {
    const { title , img , description} = props
    return (<div className="project-card">
        <div className="project-header">
            <img src={img} alt="projectImg"/>
            <div className="project-label">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <span className="material-symbols-outlined">
more_vert
</span>
        </div>
        <div className="project-details">
            .
        </div>
    </div>)
}