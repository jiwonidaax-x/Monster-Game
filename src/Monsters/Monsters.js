import React, { useState, useEffect } from 'react';
import './Monsters.scss';
import { CardList } from './Components/CardList';
function Monsters() {
  const [monsters,setMonsters]=useState([]);
useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((data)=>setMonsters(data));
},[])
  return (
    <div className="monsters">
      <h1 className="title">Monsters</h1>
      <input className="search" placeholder="Search" />
      <CardList monsters={monsters}/>
    </div>
  );
}

export default Monsters;
