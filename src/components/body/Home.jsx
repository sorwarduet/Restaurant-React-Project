import React from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';

const mapStateProps=(state)=>{
    console.log(state);
    return {
        foods: state.foods,
        commants: state.commants
    }
}

const Home=(props)=>{
    document.title="Restaurant"
    return(
        <div>
            <Loading/>

        </div>
    );
}

export default connect(mapStateProps)(Home);

