import React, { FC, useState } from "react"
import { IProject } from "../project/Project"
import '../../assets/css/tab.css'

export interface ITabProps {
    tabs : ITab[];
}
export interface ITab{
    label : string,
    children : ITabchildren[] | any,
    isPaginate :boolean,
    maxChildren ?: number,
    Component ?: FC
} 
export interface ITabchildren {
    child : IProject 

}
export const Tab = (props : ITabProps) =>{
    const [activeTab,setActiveTab] = useState(0);
    const tabs  = props.tabs;
    const tabLabels = tabs.map((child,index)=>{
        return (<div onClick={()=>{setActiveTab(index)}} className={`tab-label ${index === activeTab ? 'activeTab':''}`}> {child.label}</div>)
    });
   

    return(<div className="tabContainer"> 
       <div className="tabHeader">
       {tabLabels}

       </div>
    
    
    </div>)
}