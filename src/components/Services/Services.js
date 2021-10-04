import './Services.css'
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
 const [moreinfo, setMoreinfo] = useState([]);
 useEffect(()=> {
fetch('./moreinfo.JSON')
.then(res => res.json())
.then(data => setMoreinfo(data));
 },[]);
 return (
  <div>
   <h3>Our total services: {moreinfo.length}</h3>
   {
    moreinfo.map(service => <Service
    key={service.name}
    service={service}
    ></Service>)
   }
  </div>
 );
};

export default Services;