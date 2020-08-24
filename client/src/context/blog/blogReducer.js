import {
  GET_POSTS,
  ADD_POST,
  DELETE_POST,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_POST,
  POST_ERROR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case POST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
