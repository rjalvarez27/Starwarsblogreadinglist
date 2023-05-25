import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PersonDetails = () => {

   const params = useParams();
   const [current, setCurrent] = useState({});
   const { uid } = params
   const getCharacter = async (uid) => {
      try {
         const response = await fetch(`https://www.swapi.tech/api/people/${uid}`)
         if (response.ok) {
            const data = await response.json()
            setCurrent(data.result);
         };
      } catch (error) {
         console.log(error);

      };
   };
   useEffect(() => {
      getCharacter(uid);

   }, []);
   return (
      <div>
         {current ? (
            <div className="container">
            <div className="card d-flex justify-content-around border border-0 " >
               <div className=" border-bottom border-danger">
               <img src={`https://starwars-visualguide.com/assets/img/characters/${current.uid}.jpg`} className="rounded float-start col-6 m-5" width= "600px" alt="..."/>               
               <h1 className="text-center m-5">{current?.properties?.name}</h1>
               <p className="fs-2 text-center m-2">{current?.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facere laudantium 
               iste qui voluptates error assumenda delectus velit cumque! Minima quia molestiae aliquam iure optio atque 
               similique possimus debitis sint Lorem ipsum </p>
               </div>                  
                  <div className=" d-flex justify-content-around text-danger m-4">
                     <span className="text-center">
                     <h5>Name </h5> 
                     <h5>{current?.properties?.name}</h5>
                     </span>
                     <span className="text-center">
                     <h5>Birth year</h5> 
                     <h5>{current?.properties?.birth_year}</h5>
                     </span>
                     <span className="text-center">
                     <h5>Gender </h5> 
                     <h5>{current?.properties?.gender}</h5>
                     </span>
                     <span className="text-center">
                     <h5>Height </h5> 
                     <h5>{current?.properties?.height}</h5>
                     </span>
                     <span className="text-center">
                     <h5>Skin Color</h5> 
                     <h5>{current?.properties?.skin_color}</h5>
                     </span>
                     <span className="text-center">
                     <h5>Eye Color</h5> 
                     <h5>{current?.properties?.eye_color}</h5>
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

export default PersonDetails;


