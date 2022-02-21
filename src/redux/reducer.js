import { combineReducers } from 'redux';
import { ADD_COMMANT, LOADING_COMMANTS, LOADING_FOODS, LOAD_COMMANTS, LOAD_FOODS } from './actionTypes';

// const initState={
//     foods: foods,
//     commants: commants
    

// }


// export const Reducer = (state=initState, action)=> {
    
//     if(action.type==='ADD_COMMANT'){
//         let commant = action.payload;
//         commant.id=state.commants.length;
//         commant.date= new Date().toDateString();
//         console.log(commant);
       
//         return{
//             ...state,
//             commants: state.commants.concat(commant)
//         }


//     }

//     return state;

// }

// using combine Reducer

const foodReducer = (foodState={isLoading: false, foods: []}, action)=>{
 
    switch(action.type){
        case LOADING_FOODS:
            return{
                ...foodState,
                isLoading: true,
                foods: []
            }
        case LOAD_FOODS:
            return{
                ...foodState,
                isLoading: false,
                foods: action.payload
            }

        default:
            return foodState;

    }
   
}

const commantReducer = (commantState={isLoading: true, commants: []}, action)=>{
  
    switch(action.type){
        case LOADING_COMMANTS:
            return {
                ...commantState,
                isLoading: true,
                commants: []
            }
        
        case LOAD_COMMANTS:
            return {
                ...commantState,
                isLoading: false,
                commants: action.payload
            }
        case ADD_COMMANT:{
            let commant = action.payload;
           return{
               ...commantState,
               commants: commantState.commants.concat(commant)
           }

        }
        
        default:
            return commantState;

    }

}



export const Reducer = combineReducers({
    foods: foodReducer,
    commants: commantReducer

})