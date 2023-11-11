import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
  const [services ,setServices] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:8000/services')
    .then(res=>res.json())
    .then(data=>setServices(data));


  },[])

  return (
    <div >
        <div className="text-center space-y-6 mt-5">
           <h3 className="text-xl text-red-500 font-extrabold">Service</h3>
           <h2 className="text-5xl font-bold dark:text-gray-300">Our Service Area</h2>
           <p className="text-slate-500 font-semibold">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>

        </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-9 gap-4">
        {services.map(service =><ServicesCard key={service._id}service={service} ></ServicesCard>)}
       </div>
    </div>
  );
};

export default Services;



