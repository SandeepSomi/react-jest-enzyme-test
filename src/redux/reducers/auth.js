import types from '../types';
import utils from '../../utils';

let initialState = {
  fetching: false,
  user: {}
}

export default function (state = initialState, action) {
  switch (action.type) {

    case types.GET_AUTH_REQUEST:
      return { ...state, fetching: true };
    
    case types.AUTH_REQUEST_SUCCESS:
      utils.saveObject('sr-user', action.payload);
      state = {
        ...state,
        user: action.payload,
        fetching: false
      };
      return state;
    
    case types.AUTH_REQUEST_FAILED:
      state = {
        ...state,
        user: {},
        fetching: false
      }
      return state;
    
    case types.LOGOUT_USER:
      utils.removeObject('sr-user');
      return { ...state, user: {} };
    
    case types.SIGNUP_REQUEST: 
      return { state, fetching: true }
    
    case types.SIGNUP_REQUEST_SUCCESS: 
      return { state, fetching: false }
    
    case types.SIGNUP_REQUEST_FAILED: 
      return { state, fetching: false }
    
    default:
      return state;
  }
}