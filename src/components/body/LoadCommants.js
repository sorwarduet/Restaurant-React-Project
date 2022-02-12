import dateFormat from 'dateformat';
import React from 'react';
const LoadCommants=(pros)=>{
    return(
        pros.commants.map(commant=>{
            return(
                <div key={commant.id}>
                    <h5>{commant.author}</h5>
                    <p>{commant.commant}</p>
                    <p>{dateFormat(commant.date, "fullDate")}</p>
    
                </div>
            )

        } )
          
    );
}

export default LoadCommants;