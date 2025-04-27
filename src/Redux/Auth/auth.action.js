import axios from "axios";
import { API_BASE_URL } from "../../config/api";
import { 
  LOGIN_FAILURE, 
  LOGIN_REQUEST, 
  LOGIN_SUCCESS, 
  REGISTER_FAILURE, 
  REGISTER_REQUEST, 
  REGISTER_SUCCESS 
} from "./auth.actionType";

// Login User Action
export const loginUserAction = (loginData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, loginData);
    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
    }
    console.log("Login success---> ", data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.jwt,
    });
  } catch (error) {
    console.log("Error---> ", error);
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response?.data?.message || "Login failed",
    });
  }
};

// Register User Action
export const registerUserAction = (registerData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, registerData);
    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
    }
    console.log("Register success---> ", data);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data.jwt,
    });
  } catch (error) {
    console.log("Error---> ", error);
    dispatch({
      type: REGISTER_FAILURE,
      payload: error.response?.data?.message || "Registration failed",
    });
  }
};
