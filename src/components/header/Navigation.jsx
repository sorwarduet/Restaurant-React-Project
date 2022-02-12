import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";

class Navigation extends Component{

    state ={
        isNavOpen:false,
    }


    handelNav =()=>{
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    
    render(){
        return(

                <Navbar  
                    color="dark"
                    dark
                    expand="md"
                >
                    <div className="container">
                       
                   
                        <NavbarBrand to="/">
                                Restaurant
                        </NavbarBrand>
                     
                   
                   
                    <NavbarToggler onClick={this.handelNav} />

                    <Collapse navbar isOpen={this.state.isNavOpen}>
                    <Nav  className="ml-auto" navbar>
                        <NavItem>
                          <Link className="nav-link active" to="/">
                                Home
                          </Link>
                        </NavItem>
                        <NavItem>
                          <Link className="nav-link" to="/menu">
                                Menu
                          </Link>
                        </NavItem>
                        <NavItem>
                          <Link className="nav-link"  to="/about">
                                About
                          </Link>
                        </NavItem>

                        <NavItem>
                          <Link className="nav-link"  to="/contact">
                                Contact
                          </Link>
                        </NavItem>
                    </Nav>
                   
                    </Collapse>
                    </div>
                  
                </Navbar>
               
    
        );

    }
    
}

export default Navigation;