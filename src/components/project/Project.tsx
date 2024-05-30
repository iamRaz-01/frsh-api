import { IUserDetails } from "../header/Profile";
import { IVersion } from "./Version";

export interface IProject {
    creator :IUserDetails ,
    title : string , 
    description : string ,
    img : string ,
    versions : IVersion[],
    modified : string,
    mainVersion : IVersion
}

