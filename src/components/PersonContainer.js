import React, { Component } from 'react'
import PersonInfo from './PersonInfo'


export default function PersonContainer({list}){ 
    const allPersons = list.map(person => <PersonInfo {...person}/>)
    return (
        <main className="App-main">
          {allPersons}
        </main>
    )
  }