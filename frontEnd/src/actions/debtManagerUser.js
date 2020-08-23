import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router"

const baseURL = "http://localhost:3003"


export const postLoginUser = (email, password ) => async (dispatch) => {
    const newLogin = {
        email,
        password
    }

    try {
        const response = await axios.post(`${baseURL}/login`, newLogin)
        window.localStorage.setItem("token", response.data.token);

        window.alert("Successfully logged in");
        dispatch(push(routes.Home))

    } catch(erro) {
        window.alert("Email or Password incorrect")
    }
}