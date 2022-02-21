import dateFormat from "dateformat";
import React from "react";
import { v1 as uuidv1 } from "uuid";
import Loading from "./Loading";

const LoadCommants = (pros) => {
  if (pros.commantIsloading) {
    return <Loading />;
  } else {
    return pros.commants.map((commant) => {
      return (
        <div key={uuidv1()}>
          <h5>{commant.author}</h5>
          <p>{commant.commant}</p>
          <p>Rating: {commant.rating}</p>
          <p>{dateFormat(commant.date, "fullDate")}</p>
        </div>
      );
    });
  }
};

export default LoadCommants;
