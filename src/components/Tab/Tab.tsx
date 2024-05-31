import '../../assets/css/tab.css'
import React, {  useState } from "react"
import { IProject  } from "../project/Project"


export interface ITabProps {
    tabs : ITab[];
    height ?: number,
    width ?: number
}
export interface ITab{
    label : string,
    children : ITabchildren[] ,
    isPaginate :boolean,
    maxChildren ?: number,
    Component : any
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
    const tab = tabs[activeTab];
    const children = tab.children;
    const {Component} = tab;
    const childrenElement = children.map((child,key)=>  <Component key={key} {...child.child} /> )

    return(<div className="tabContainer"> 
       <div className="tabHeader">
       {tabLabels}
       </div>
       <div className="children">
        {childrenElement}
       </div>
    
    
    </div>)
}