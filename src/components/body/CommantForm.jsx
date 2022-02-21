import React, { Component } from "react";
import { Button, Form, Input } from "reactstrap";

// This is second way
// const mapDispatchToProps=dispatch =>{
//     return{
//         addCommant: (foodId, author, rating,  commant)=> dispatch({
//             type: 'ADD_COMMANT',
//             payload:{
//                 foodId: foodId,
//                 author: author,
//                 rating: rating,
//                 commant: commant
//             }
//         })
//     }
// }

class CommantForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: "",
      rating: "",
      commant: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit(event) {
    //This is one Way

    // this.props.dispatch({
    //     type: 'ADD_COMMANT',
    //     payload: {
    //         foodId: this.props.foodId,
    //         author: this.state.author,
    //         rating: this.state.rating,
    //         commant: this.state.commant,

    //     }
    // })

    // This Second Way call dispatch
    this.props.addCommant(
      this.props.foodId,
      this.state.author,
      this.state.rating,
      this.state.commant
    );

    this.setState({
      author: "",
      rating: "",
      commant: "",
    });

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Form onSubmit={(event) => this.handleSubmit(event)}>
          <Input
            type="text"
            name="author"
            placeholder="Enter Name"
            value={this.state.author}
            onChange={this.handleInputChange}
          />
          <br />
          <Input
            type="select"
            name="rating"
            value={this.state.rating}
            onChange={this.handleInputChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Input>
          <br />
          <Input
            type="textarea"
            name="commant"
            value={this.state.commant}
            onChange={this.handleInputChange}
          />
          <br />

          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default CommantForm;
