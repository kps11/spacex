import {
    GET_DATA_SUCESS,
    GET_DATA_BEGIN,
    GET_DATA_FAILURE
} from './actionTypes'


export const getMissionData = (year = 0,launch , landing,pageCount) =>{
   let  url = "https://api.spaceXdata.com/v3/launches?limit=10&offset="+10*pageCount
   if(year > 0){
        url =  `https://api.spaceXdata.com/v3/launches?offset=${10*pageCount}&limit=100&launch_success=true&land_success=true&launch_year=${year}`
   
   }else if(landing.length >0 || launch.length > 0){
        url =`https://api.spaceXdata.com/v3/launches?offset=${10*pageCount}&limit=100&launch_success=${launch}&land_success=${landing}`
   }
  return (dispatch) =>{
      dispatch({
          type:GET_DATA_BEGIN
      })
    fetch(url)
    .then(res => res.json())
    .then(response =>{
      dispatch({
          type: GET_DATA_SUCESS,
          payload:response
      })
    })
    .catch(error => dispatch({
        type:GET_DATA_FAILURE,
        payload:error
    }))
}
}

