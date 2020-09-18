import {
    GET_DATA_SUCESS,
    GET_DATA_BEGIN,
    GET_DATA_FAILURE
} from '../actions/actionTypes'

const initalState={
    missionData:[],
    loading:false,
    error:''
}

  export default (state = initalState,action) =>{
    switch(action.type){
        case GET_DATA_BEGIN :
            return{
                ...state,
                loading : true
            }
        case GET_DATA_SUCESS :
            return{
                ...state,
                loading:false,
                missionData:action.payload
            }
        case GET_DATA_FAILURE:  
            return {
                ...state,
                loading:false,
                error: action.payload
            }
        default:
            return state

    }

}