import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import users from "./users"
import clients from "./debts"

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    users,
    clients
    // Outros reducers aqui
  });
