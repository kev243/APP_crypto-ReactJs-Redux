import { SET_LIST_STATE } from "../actions/list.action";

const initialState = {};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LIST_STATE:
      return action.payload;
    default:
      return state;
  }
}
