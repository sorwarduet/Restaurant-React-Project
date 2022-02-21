import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";
import classes from "./Menu.module.css";

const MenuItem = (props) => {
  return (
    <div>
      <Card>
        <CardImg
          className={[classes.image, "m-3 mg-fluid w-100"].join(" ")}
          src={props.item.img}
          alt={props.item.name}
        />
        <CardImgOverlay>
          <CardTitle
            tag="h5"
            onClick={props.FoodDetails}
            className={classes.on_click}
          >
            {props.item.name}
          </CardTitle>
          <CardText>{props.item.shortDescription}</CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default MenuItem;
