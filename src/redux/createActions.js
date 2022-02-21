import axios from "axios";
import { ADD_COMMANT, LOADING_COMMANTS, LOADING_FOODS, LOAD_COMMANTS, LOAD_FOODS } from "./actionTypes";
import { baseUrl } from "./baseUrl";

// export const addCommant=(foodId, author, rating,  commant)=>{
//     return({
//         type: ADD_COMMANT,
//         payload:{
//             foodId: foodId,
//             author: author,
//             rating: rating,
//             commant: commant
//         }

//     }) 
// }


export const loadingFoods = ()=>({
    type: LOADING_FOODS
})


export const loadFoods =(foods)=> ({
        type: LOAD_FOODS,
        payload: foods
    
    })


export const fetchFoods = ()=> {
    return dispatch =>{
        dispatch(loadingFoods());

        axios.get(baseUrl+'foods')
        .then(response =>{
            const data = response.data
            dispatch(loadFoods(data))
            })
        

        // console.log(dataApi)

        // setTimeout(()=>{
        //     dispatch(loadFoods(data))
        // }, 2000)

       
        
    }
}


export const addCommant=(foodId, author, rating,  commant)=> dispatch=> {
    const newCommant ={
            foodId: foodId,
            author: author,
            rating: rating,
            commant: commant

    }
    newCommant.date = new Date().toISOString();



    axios.post(baseUrl+ 'commants', newCommant)
    .then(response => response.data)
    .then(newCommant => dispatch(commantConcat(newCommant)))

}



export const commantConcat=(commant)=> ({
        type: ADD_COMMANT,
        payload: commant
    }
)

export const loadingCommants = ()=>({
    type: LOADING_COMMANTS
})


export const loadCommants =(commants)=> ({
        type: LOAD_COMMANTS,
        payload: commants
    
    })


export const fetchCommants = ()=> {
    return dispatch =>{
        dispatch(loadingCommants());

        axios.get(baseUrl+'commants')
        .then(response =>{
            const data = response.data
            dispatch(loadCommants(data))
            })
        

        // console.log(dataApi)

        // setTimeout(()=>{
        //     dispatch(loadFoods(data))
        // }, 2000)

       
        
    }
}