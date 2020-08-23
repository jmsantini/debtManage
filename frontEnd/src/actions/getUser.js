import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/users"

const setUsers = (user) => ({
    type: 'SET_USERS',
    payload: {
        user
    }
})


export const getUsers = () => async (dispath) => {
    try {
        const response = await axios.get(`${baseURL}`)
        dispath(setUsers(response.data))


    } catch (error) {
        window.alert("Users not found")
    }
}