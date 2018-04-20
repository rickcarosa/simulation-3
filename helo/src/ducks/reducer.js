import axios from 'axios';

const initialState = {
    username: '',
    profile: '',
    userId: 0
}

const GET_USER = "GET_USER";

export function getUser(username, password){
    return{
        type: GET_USER,
        payload: {username, password}
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_USER:
            return Object.assign({},state,action.payload)
        default: 
            return state;
    }
}