import axios from "axios";


const baseURL = "http://localhost:3003"

export const registerDebt = (
    client_id, client_name, debt_reason, debt_date, debt_value) => async (dispatch) => {

        const newDebt = {
            client_id, client_name, debt_reason, debt_date, debt_value
        }

        try {
            await axios.post(`${baseURL}/registerDebt`, newDebt)

            window.alert("Debt Registred")
        } catch (error) {
            window.alert("Error")
        }
    }



const setClientDebtsList = (clientDebtList) => ({
    type: "SET_DEBTLIST",
    payload: {
        clientDebtList
    }
})

export const getClientWithDebtsList = () => async (dispatch) => {

    try {
        const response = await axios.get(`${baseURL}/clientList`)

        dispatch(setClientDebtsList(response.data.clients))

    } catch (erro) {
        window.alert("Error to loading list of clients debts")
    }
}

export const setClientId = (clientId) => ({
    type: "SET_CLIENT_ID",
    payload: {
        clientId
    }
})

const setClientDebtsDetails = (debts) => ({
    type: "SET_CLIENT_DEBTS_DETAILS",
    payload: {
        debts
    }
})

export const getClientDebtsDetails = (clientId) => async (dispatch) => {
    try {
        const response = await axios.get(`${baseURL}/getDebtByClientId/${clientId}`)

        dispatch(setClientDebtsDetails(response.data.clientDebts))

        console.log(response.data.clientDebts)
    } catch (error) {
        window.alert("Error to get client id")
    }
}


export const deleteDebt = (id) => async (dispatch) => {
    try {
        if (window.confirm("Are you sure you want to delete?")) {
            await axios.delete(`${baseURL}/deleteClientDebt/${id}`)
            window.alert("Debt is deleted")
            dispatch(getClientWithDebtsList(), getClientDebtsDetails())
        }
    } catch (error) {
        window.alert("error")
    }
}