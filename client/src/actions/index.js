import axios from 'axios';

export const fetchUser = () =>{
    return async (dispatch)=>{
        const res=await axios.get('/api/user/current_user');
        dispatch({
            type: 'FETCH_USER',
            payload: res.data
        });
    }  
}

export const handleToken =(token)=>{ 
    return async (dispatch)=>{      
        const res=await axios.post('/api/user/stripe',token);
        dispatch({
            type: 'FETCH_USER',
            payload: res.data
        });
    }
}
