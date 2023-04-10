import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PersonDetails = () => {

   const params = useParams();
   const [current, setCurrent] = useState({});
   const { uid } = params
   console.log(params);
   const getCharacter = async (uid) => {
      try {
         const response = await fetch(`https://www.swapi.tech/api/people/${uid}`)
         if (response.ok) {
            const data = await response.json()
             console.log(data.result);
        
            setCurrent(data.result);
           }  
           


      } catch (error) {
         console.log(error);

      }
   };
   useEffect(() => {
      getCharacter(uid);

   }, []);
   return (
      <div>
         {current ? (
            <div className="card w-75 m-auto p-5">
               {current?.description}
               {current?.properties?.name}
            </div>
         ) : (
            <>Cargando</>
         )}
      </div>
   );

};

export default PersonDetails;