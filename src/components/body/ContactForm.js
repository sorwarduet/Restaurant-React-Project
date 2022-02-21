import React, { Component } from "react";
import { Control, Errors, LocalForm } from "react-redux-form";
import { Button, Col, FormGroup, Label } from "reactstrap";

const required = (val) => val && val.length;
const isNumber = (val) => !isNaN(Number(val));
const vaildEmail = (val) => val && val.length;

class ContactForm extends Component {
  handleSubmit = (values) => {
    console.log(values);
  };

  render() {
    document.title = "Contact Form";
    return (
      <div className="container">
        <div className="row row-content align-items-center">
          <div className="col-sm-12">
            <h3>Sent your feedback</h3>
          </div>
        </div>

        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
          <FormGroup row>
            <Label htmlFor="firstname" sm={2}>
              First Name
            </Label>
            <Col sm={10}>
              <Control.text
                model=".firstname"
                name="firstname"
                placeholder="Enter First name"
                className="form-control"
                validators={{
                  required,
                }}
              />
              <Errors
                className="text-danger"
                model=".firstname"
                show="touched"
                messages={{
                  required: "First Name is required",
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="lastname" sm={2}>
              Last Name
            </Label>
            <Col sm={10}>
              <Control.text
                model=".lastname"
                name="lastname"
                placeholder="Enter Last name"
                className="form-control"
                validators={{
                  required,
                }}
              />
              <Errors
                className="text-danger"
                model=".lastname"
                show="touched"
                messages={{
                  required: "Last Name is required",
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label htmlFor="telnum" sm={2}>
              Telnum
            </Label>
            <Col sm={10}>
              <Control.text
                model=".telnum"
                name="telnum"
                placeholder="Enter telephone number"
                className="form-control"
                validators={{
                  required,
                  isNumber,
                }}
              />

              <Errors
                className="text-danger"
                model=".telnum"
                show="touched"
                messages={{
                  required: "Tel Number is required",
                  isNumber: "Only Number",
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label htmlFor="email" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Control.text
                model=".email"
                name="email"
                placeholder="Enter email address"
                className="form-control"
                validators={{
                  required,
                  vaildEmail,
                }}
              />

              <Errors
                className="text-danger"
                model=".email"
                show="touched"
                messages={{
                  required: "Email is requried",
                  vaildEmail: "Only vaild eamil",
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md={{ size: 6, offset: 2 }}>
              <FormGroup check>
                <Label check>
                  <Control.checkbox
                    model=".agree"
                    name="agree"
                    className="form-check-input"
                  />
                  <strong>May we contact you?</strong>
                </Label>
              </FormGroup>
            </Col>
            <Col md={{ size: 3, offset: 1 }}>
              <Control.select
                model=".contactType"
                name="contactType"
                className="form-control"
              >
                <option value="Tel.">Tel.</option>
                <option value="Email">Email</option>
              </Control.select>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="message" sm={2}>
              Your feedback
            </Label>
            <Col sm={10}>
              <Control.textarea
                model=".message"
                name="message"
                className="form-control"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md={{ size: 10, offset: 2 }}>
              <Button type="submit" color="primary">
                Sent your feedback
              </Button>
            </Col>
          </FormGroup>
        </LocalForm>
      </div>
    );
  }
}

export default ContactForm;
