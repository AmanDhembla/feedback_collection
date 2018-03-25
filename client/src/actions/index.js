import axios from 'axios';

export const fetchUser = () =>{
    return async (dispatch)=>{
        const res=await axios.get('/api/user/current_user');
        dispatch({
            type: 'FETCH_USER',
            payload: res
        });
    }  
}