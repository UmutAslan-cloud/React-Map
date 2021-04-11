import React, { Component } from 'react'
import { render, screen } from '@testing-library/react'; 
export default function Friends({friends}){
    return (
        friends.map(friend=>{
            return <div className="friends">
          
        <div className="friends-detail">
            <img src={friend.avatar} className="avatar-friends" alt={friend.firstName} />
            <span>{friend.firstName}</span>
            <span>{friend.lastName}</span>
            <span>{friend.gender}</span>
        </div>
        <div className="friends-part">
            <span>{friend.phone}</span> 
            <span>{friend.address}</span> 
            <span>{friend.city}</span> 
            <span>{friend.birthday}</span> 
            <span>{friend.language}</span> 
            <span>{friend.profession}</span> 
            <span>{friend.salary}</span>    
        </div>
      </div>
        })
    )
}

 test ("test friends",()=>{
    render (<Friends/>);
    const headElement=screen.getByRole("heading");
    expect(headElement).toBeInTheDocument();
    expect(headElement).toHaveClass('header')
   
}

) 