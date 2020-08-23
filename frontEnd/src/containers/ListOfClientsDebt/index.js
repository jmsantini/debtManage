import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { getClientWithDebtsList, getClientDebtsDetails, deleteDebt } from "../../actions/debt"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import TextField from "@material-ui/core/TextField";
import "./styled.css";
import Modal from "react-modal"
Modal.setAppElement('#root')




export class ClientDebtList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            search: ""
        }
    }

    componentDidMount() {
        const token = window.localStorage.getItem("token")
        if(token === null) {
            window.alert("Not Autorized. Need to login !")
          this.props.goToLogin()
        }

        this.props.getClientWithDebtsList()
    }

    handleFieldChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.setState({ search: event.target.value })
    };


    handleModalIsOpen = () => {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    }

    handleSetDebtId = (clientId) => {
        const { getClientDebts } = this.props;
        this.handleModalIsOpen()
        getClientDebts(clientId)
    }

    handleDeleteDebt = (id) => {
        this.props.deleteDebt(id)
    }

    render() {

        const { modalIsOpen, search } = this.state
        const { clientWithDebts, clientDebts } = this.props;

        let filterClients = this.props.clientWithDebts.filter((clientDebt) => {
            return clientDebt.client_name.toLowerCase().indexOf(search.toLowerCase()) !== -1 
        });

        return (
            <div>
                <h3>Clients with debt</h3>
                <div className="listofclients">
                    {filterClients.map((clientDebt) =>
                        <div
                            className="debtList"
                            onClick={() => this.handleSetDebtId(clientDebt.client_id)}
                            key={clientDebts.client_name}
                        >
                            <p>{clientDebt.client_name}</p>
                            <p>$: {clientDebt.debt_value.toFixed(2)}</p>
                        </div>
                    )}
                    <Modal isOpen={modalIsOpen} onRequestClose={this.handleModalIsOpen} className="Modal" overlayClassName="Overlay">
                        {clientDebts.map((debt) =>
                            (<div className="detailsclientcontent" key={debt.client_id}>
                                <p>ID: {debt.client_id}</p>
                                <p>Name: {debt.client_name}</p>
                                <p>Reason: {debt.debt_reason}</p>
                                <p>Date: {debt.debt_date.split('T')[0]}</p>
                                <p>$: {debt.debt_value.toFixed(2)}</p>
                                <div>
                                    <DeleteForeverIcon className="deleteIcon" onClick={() => { this.handleDeleteDebt(debt.id) }} /><EditIcon className="editIcon" />
                                </div>
                            </div>)
                        )}
                    </Modal>
                </div>

                <div className="search_field">
                    <TextField 
                    placeholder="search"
                    value={search}
                    onChange={this.handleFieldChange}
                    />
                </div>

            </div>
        );
    }
}


const mapStateToProps = state => ({
    clientWithDebts: state.clients.allClientsWithDebts,
    clientDebts: state.clients.clientDebts
})


const mapDispatchToProps = (dispatch) => ({
    getClientWithDebtsList: () => dispatch(getClientWithDebtsList()),
    getClientDebts: (clientId) => dispatch(getClientDebtsDetails(clientId)),
    deleteDebt: (id) => dispatch(deleteDebt(id)),
    goToLogin: () => dispatch(push(routes.Login))
})



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientDebtList);
