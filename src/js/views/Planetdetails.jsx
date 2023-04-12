import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Planetdetails = () => {

   const params = useParams();
   const [current, setCurrent] = useState({});
   const { uid } = params;   
   const getPlanet = async (uid) => {
      try {
         const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`)
         if (response.ok) {
            const data = await response.json()              
             setCurrent(data.result);        
           };        
         } catch (error) {
            console.log(error);
   
         }
      };
      useEffect(() => {
         getPlanet(uid);
   
      }, []);
      return (
         <div>
            {current ? (
                <div className="container">
                <div className="card d-flex justify-content-around border border-0 " >
                   <div className=" border-bottom border-danger">
                   <img src="https://picsum.photos/200" className="rounded float-start col-6 m-5" width= "600px" alt="..."/>               
                   <h1 className="text-center m-5">{current?.properties?.name}</h1>
                   <p className="fs-2 text-center m-2">{current?.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facere laudantium 
                   iste qui voluptates error assumenda delectus velit cumque! Minima quia molestiae aliquam iure optio atque 
                   </p>
                   </div>                  
                      <div className=" d-flex justify-content-around text-danger m-4">
                         <span className="text-center">
                         <h5>Name </h5> 
                         <h5>{current?.properties?.name}</h5>
                         </span>
                         <span className="text-center">
                         <h5>Climate</h5> 
                         <h5>{current?.properties?.climate}</h5>
                         </span>
                         <span className="text-center">
                         <h5>Population </h5> 
                         <h5>{current?.properties?.population}</h5>
                         </span>
                         <span className="text-center">
                         <h5>Orbital Period </h5> 
                         <h5>{current?.properties?.orbital_period}</h5>
                         </span>
                         <span className="text-center">
                         <h5>Rotation Period</h5> 
                         <h5>{current?.properties?.rotation_period}</h5>
                         </span>
                         <span className="text-center">
                         <h5>Diameter</h5> 
                         <h5>{current?.properties?.diameter}</h5>
                         </span>                     
                      </div>
                </div>
                </div>
                 
               
            ) : (
               <>Cargando</>
            )}
         </div>
      );
   
   };



export default Planetdetails;