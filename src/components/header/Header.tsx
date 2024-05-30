import React from "react";
import { Logo } from "./Logo";
import { IUserDetails, Profile } from "./Profile";
import '../../assets/css/index.css'
import '../../assets/css/header.css'
import userImg from '../../assets/images/user.jpeg'
import { Search } from "../Search/Search";

export const Header = () =>{

    const user :IUserDetails = {
        name : 'abdul',
        email : 'abdul',
        profileImg : userImg ,
        isLogged : true 
    }

    
    return <div className="header"> 
    <Logo/>
    <div className="headerComponents">
    <Search/>
    <Profile user={user}/>
    </div>
 </div>
}