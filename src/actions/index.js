import bateaux from "../apis/bateaux";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_BATEAU,
  FETCH_BATEAU,
  FETCH_BATEAUX,
  DELETE_BATEAU,
  EDIT_BATEAU,
} from "./types";
import createBrowserHistory from "../history";

//authentification actions creators
export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

//CRUD actions creators:

export const createBateau = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  //1) post the form values inside the api server
  const response = await bateaux.post("/bateaux", { ...formValues, userId });
  //2) dispatch the form values inside redux
  dispatch({ type: CREATE_BATEAU, payload: response.data });
  //3 )push back the user to the '/' url
  createBrowserHistory.push("/home");
};

export const fetchBateaux = () => async (dispatch) => {
  const response = await bateaux.get("/bateaux");
  dispatch({ type: FETCH_BATEAUX, payload: response.data });
};

export const fetchBateau = (id) => async (dispatch) => {
  const response = await bateaux.get(`/bateaux/${id}`);
  dispatch({ type: FETCH_BATEAU, payload: response.data });
};

export const editBateau = (id, formValues) => async (dispatch) => {
  const response = await bateaux.patch(`/bateaux/${id}`, formValues);
  dispatch({ type: EDIT_BATEAU, payload: response.data });
  createBrowserHistory.push("/home");
};

export const deleteBateau = (id) => async (dispatch) => {
  await bateaux.delete(`/bateaux/${id}`);
  dispatch({ type: DELETE_BATEAU, payload: id });
  createBrowserHistory.push("/home");
};
