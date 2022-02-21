import { Component } from "react";
import { connect } from "react-redux";
import {
    Button,
    CardColumns,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "reactstrap";
import {
    addCommant,
    fetchCommants,
    fetchFoods
} from "../../redux/createActions";
// import { commants } from '../../data/commants';
// import { foods } from '../../data/foods';
import ItemDetails from "./ItemDetails";
import Loading from "./Loading";
import MenuItem from "./MenuItem";

const mapStateProps = (state) => {
  return {
    foods: state.foods,
    commants: state.commants,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCommant: (foodId, author, rating, commant) =>
      dispatch(addCommant(foodId, author, rating, commant)),
    fetchFoods: () => dispatch(fetchFoods()),
    fetchCommants: () => dispatch(fetchCommants()),
  };
};

class Menu extends Component {
  state = {
    // foods: foods,
    // commants: commants,
    selectFood: null,
    openModel: false,
  };

  onSelectFoodDetails = (food) => {
    this.setState({
      selectFood: food,
    });
    this.toggleModel();
  };
  toggleModel = () => {
    this.setState({
      openModel: !this.state.openModel,
    });
  };

  componentDidMount() {
    this.props.fetchFoods();
    this.props.fetchCommants();
  }

  render() {
    document.title = "Menu";

    let food = null;

    if (this.state.selectFood != null) {
      let commants = this.props.commants.commants.filter(
        (commant) => commant.foodId === this.state.selectFood.id
      );

      food = (
        <ItemDetails
          item={this.state.selectFood}
          commants={commants}
          addCommant={this.props.addCommant}
          commantIsloading={this.props.commants.isLoading}
        />
      );
    }

    const foods = this.props.foods.foods.map((item) => {
      return (
        <MenuItem
          item={item}
          key={item.id}
          FoodDetails={() => this.onSelectFoodDetails(item)}
        />
      );
    });

    if (this.props.foods.isLoading) {
      return <Loading />;
    } else {
      return (
        <div className="container">
          <div className="row">
            <CardColumns className="my-3">{foods}</CardColumns>

            <Modal isOpen={this.state.openModel} toggle={this.toggleModel}>
              <ModalHeader
                close={
                  <button className="close" onClick={this.toggleModel}>
                    x
                  </button>
                }
                toggle={this.toggleModel}
              >
                Food
              </ModalHeader>
              <ModalBody>{food}</ModalBody>
              <ModalFooter>
                <Button color="info" onClick={this.toggleModel}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      );
    }
  }
}

export default connect(mapStateProps, mapDispatchToProps)(Menu);
