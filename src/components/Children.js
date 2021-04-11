import React, { Component } from 'react'
export default function Children(props){
    
    return (
        
        props.children.map(child=>{
            return <div className="children">
        <img src={child.avatar} className="avatar-children" alt={props.firstName} />
        <span>{child.firstName} {child.lastName}</span>
        <span>{child.gender}</span>
        <span>{child.birthday}</span> 
      </div>
        })
    )
}