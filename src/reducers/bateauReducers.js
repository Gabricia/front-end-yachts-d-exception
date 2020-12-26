import _ from "lodash";
import {
  FETCH_BATEAU,
  CREATE_BATEAU,
  FETCH_BATEAUX,
  DELETE_BATEAU,
  EDIT_BATEAU,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_BATEAU:
      return { ...state, [action.payload._id]: action.payload };
    case CREATE_BATEAU:
      return { ...state, [action.payload._id]: action.payload };
    case EDIT_BATEAU:
      return { ...state, [action.payload._id]: action.payload };
    case FETCH_BATEAUX:
      //the mapkeys methode return an object with the same values as nested- objects
      //with the second argument as key, for example here the key is the id
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case DELETE_BATEAU:
      //the omit method return an object "omitting" the values that we told him as a second argument
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
