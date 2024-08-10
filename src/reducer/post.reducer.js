import { FIRST_MESSAGE } from "../actions/post.action";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case FIRST_MESSAGE:
      return action.payload;
    default:
      return state;
  } 
}
