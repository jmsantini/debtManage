import express, { Request, Response } from "express";
import cors from 'cors';
import { RegisterDebtEndpoint } from "./endpoints/registerDebt";
import { UpdateDebtEndpoint } from "./endpoints/updateDebt";
import { GetDebtClientsEndpoint } from "./endpoints/getDebtClients";
import { GetDebtByClientIdEndpoint } from "./endpoints/getDebtByClientId";
import { DeleteClientDebtEndpoint } from "./endpoints/deleteClientDebt";
import { RegisterUserEndpoint } from "./endpoints/user/registerUser";
import { LoginEndpoint } from "./endpoints/user/login";


const app = express();
app.use(cors());
app.use(express.json());


//ENDPOINTS Clients / Debts

app.post("/registerDebt", RegisterDebtEndpoint );
app.post("/updateDebt/:id", UpdateDebtEndpoint);
app.get("/clientList", GetDebtClientsEndpoint );
app.get("/getDebtByClientId/:client_id", GetDebtByClientIdEndpoint);
app.delete("/deleteClientDebt/:id", DeleteClientDebtEndpoint)

//ENDPOINTS User

app.post('/registerUser', RegisterUserEndpoint)
app.post('/login', LoginEndpoint)

export default app;
