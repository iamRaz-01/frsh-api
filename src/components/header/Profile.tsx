import React, { useState } from "react";
import '../../assets/css/header.css';

export interface IProfileProps {
    user : IUserDetails

}

export interface IUserDetails {
   name :string ,
   email : string ,
   profileImg : string,
   isLogged : boolean , 
}



export const Profile = (props : IProfileProps) =>{
    const user = props.user;
    const [isHovered , setIsHovered] = useState(false);
    const manageHover = (state : boolean) =>{
        setIsHovered(state);
    }

    return (<div className="profile" onMouseEnter={()=>manageHover(true)}  onMouseLeave={()=>manageHover(false)}>
        <img src={user.profileImg} alt='profile' />
        
              
    </div>)
} 
