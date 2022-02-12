import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';

class Contact extends Component{

    constructor(props){
        super(props);
        this.state={
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: ''
        }

        this.handleInputChange=this.handleInputChange.bind(this)
        //this.handleSubmit = this.handleSubmit(this)
        
    
    }

   
    handleInputChange=event =>{

        const value = event.target.type === "checkbox" ? event.target.checked: event.target.value;

        const name = event.target.name;

        this.setState({
            [name]:value
        })

    }

    handleSubmit=event=> {
        console.log(this.state);
        event.preventDefault();
    }

    render(){
        document.title="Contact"
        return(
            <div className='container'>
                <div className='row row-content align-items-center'>
                    <div className='col-sm-12'>
                        <h3>Sent your feedback</h3>
                    </div>
                </div>
    
            <Form onSubmit={(event)=>this.handleSubmit(event)}>
                <FormGroup row>
                    <Label htmlFor='firstname' sm={2}>First Name</Label>
                    <Col sm={10}>
                        <Input 
                            name="firstname" 
                            placeholder="Enter First name" 
                            type="text" 
                            value={this.state.firstname} 
                            onChange={this.handleInputChange}
                        />
                    </Col>
                </FormGroup>
                
    
                <FormGroup row>
                    <Label htmlFor='lastname' sm={2}>Last Name</Label>
                    <Col sm={10}>
                        <Input 
                            name="lastname" 
                            placeholder="Enter Last name" 
                            type="text" 
                            value={this.state.lastname} 
                            onChange={this.handleInputChange} 
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='telnum' sm={2}>Telnum</Label>
                    <Col sm={10}>
                        <Input 
                            name="telnum" 
                            placeholder="Enter telephone number" 
                            type="text" 
                            value={this.state.telnum} 
                            onChange={this.handleInputChange} 
                        />
                    </Col>
                </FormGroup>
    
                <FormGroup row>
                    <Label htmlFor='email' sm={2}>Email</Label>
                    <Col sm={10}>
                        <Input 
                            name="email" 
                            placeholder="Enter email address" 
                            type="email" 
                            value={this.state.email} 
                            onChange={this.handleInputChange} 
                        />
                    </Col>
                </FormGroup>
               
                <FormGroup row>
                    <Col md={{size: 6, offset: 2}}>
                        <FormGroup check>
                            <Label check>
                                <Input 
                                    type='checkbox' 
                                    name="agree" 
                                    checked={this.state.agree}
                                    onChange={this.handleInputChange}
                                />
                                <strong>May we contact you?</strong>
    
                            </Label>
                        </FormGroup>                
                    </Col>
                    <Col md={{size: 3, offset: 1}}>
                        <Input 
                            type='select' 
                            name="contactType" 
                            value={this.state.contactType} 
                            onChange={this.handleInputChange}
                        >
                        <option value="Tel.">Tel.</option>
                        <option value="Email" >Email</option>
                        
    
                        </Input>
                    </Col>
    
                </FormGroup>
    
                <FormGroup row>
                    <Label
                        for="message"
                        sm={2}
                        >
                        Your feedback
                    </Label>
                    <Col sm={10}>
                        <Input
                            
                            name="message"
                            type="textarea"
                            value={this.state.message}
                            onChange={this.handleInputChange}
                        />
                    </Col>
                </FormGroup>
    
                <FormGroup row>
                   <Col md={{size: 10, offset: 2}}>
                   <Button type='submit' color='primary'>
                       Sent your feedback
                    </Button>
                   </Col>
                </FormGroup>
                 
            </Form>
            </div>
        );

    }
    
}

export default Contact;

