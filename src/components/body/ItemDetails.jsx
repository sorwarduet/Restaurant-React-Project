import React from "react";
import { Card, CardImg, CardText, CardTitle } from "reactstrap";
import CommantForm from "./CommantForm";
import LoadCommants from "./LoadCommants";

const ItemDetails = (props) => {
  return (
    <div>
      <Card>
        <CardImg
          className="m-3 mg-fluid w-100"
          src={props.item.img}
          alt={props.item.name}
        />

        <CardTitle tag="h5">{props.item.name}</CardTitle>
        <CardText>{props.item.fullDescription}</CardText>
        <CardText>Price:{props.item.price}</CardText>
      </Card>

      <LoadCommants
        commants={props.commants}
        commantIsloading={props.commantIsloading}
      />
      <hr />
      <CommantForm foodId={props.item.id} addCommant={props.addCommant} />
    </div>
  );
};

export default ItemDetails;
