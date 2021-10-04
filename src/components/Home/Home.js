import './Home.css';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Home = () => {
 const [services,setSetvices]= useState([]);
 useEffect( ()=> {
  fetch('./serviceinfo.JSON')
  .then(res => res.json())
  .then(data => setSetvices(data))
 },[]);
 return (
  <div className="" >

   <div className="d-flex home-container">

   <h3 className="m-5 text">Learn Guitar in the fastest <br /> way possible for beginners.</h3>
   
   
   <img className=" m-5" src="https://i.ytimg.com/vi/XNZ_ga7d9a4/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDHzmdC325mZYjU1D4JdXVZ35R8jA" alt="man playing guitar" />

   </div>

   <div className="home-container">
    <h3 className="popular">Our popular Services: {services.length}</h3>
    <h6>Go to services tab for more</h6>
    {
     services.map(service => <Service
     key={service.name}
     service={service}
     ></Service>)
    }
   </div>
   
   
  </div>
 );
};

export default Home;