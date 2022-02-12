import { Component } from "react";
import { Button, CardColumns, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { commants } from '../../data/commants';
import { foods } from '../../data/foods';
import ItemDetails from "./ItemDetails";
import MenuItem from "./MenuItem";

class Menu extends Component{
    state= {
        foods: foods,
        commants: commants,
        selectFood: null,
        openModel: false
       
    }

    onSelectFoodDetails=(food)=>{
        this.setState({
            selectFood: food
        })
        this.toggleModel()
    }
    toggleModel=()=>{
        this.setState({
            openModel: !this.state.openModel
        })
    }

    


    render(){
        document.title="Menu"

        let food=null;

        if(this.state.selectFood!=null){
            let commants = this.state.commants.filter(commant=>
                commant.foodId===this.state.selectFood.id
            )

            food=<ItemDetails 
            item={this.state.selectFood}
            commants={commants}
            
            />
        }

       const foods=this.state.foods.map((item)=>{
            return(
                <MenuItem 
                item={item} 
                key={item.id}
                FoodDetails={()=>this.onSelectFoodDetails(item)}
                />
               
            )
        })

        return(
        <div className="container">
            <div className='row'>
                <CardColumns className="my-3">
                    {foods}
                </CardColumns>


                <Modal isOpen={this.state.openModel}  toggle={this.toggleModel}>
                    <ModalHeader
                        close={<button className="close" onClick={this.toggleModel}>x</button>}
                        toggle={this.toggleModel}
                        >
                        Food
                    </ModalHeader>
                    <ModalBody>
                        {food}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="info" onClick={this.toggleModel}>Close</Button>
                    </ModalFooter>
                </Modal>
            
                </div>
            </div>
        );
    }

}

export default Menu;
