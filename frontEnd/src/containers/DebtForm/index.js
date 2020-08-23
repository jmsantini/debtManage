import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions/getUser"
import { registerDebt } from "../../actions/debt"
import TextField from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import MenuItem from '@material-ui/core/MenuItem';
import './styled.css'


export class DebtForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            client: {},
            debt_reason: "",
            debt_date: "",
            debt_value: null
        }
    }

    componentDidMount() {
        this.props.getUsers()
    }

    handleFieldChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSignupButton = () => {
        this.props.registerDebt(
            this.state.client.id,
            this.state.client.name,
            this.state.debt_reason,
            this.state.debt_date,
            this.state.debt_value
        )
    }



    render() {

        const { client, debt_reason, debt_date, debt_value } = this.state

        return (
            
                <form className='DebtForm' onSubmit={this.handleSignupButton}>
                    <h2>Register New Debt</h2>
                    <InputLabel>Client</InputLabel>
                    <Select
                        name="client"
                        value={client}
                        onChange={this.handleFieldChange}
                        className="debtForm"
                        required={true}
                    >
                        <MenuItem value=""> Client list</MenuItem>
                        {this.props.user.map((client) =>
                            <MenuItem value={client} > ID:{client.id} | {client.name} </MenuItem>
                        )}
                    </Select>

                    <TextField
                        onChange={this.handleFieldChange}
                        name="debt_reason"
                        type="text"
                        label="Debt Reason"
                        value={debt_reason}
                        className="debtForm"
                        required={true}
                    />
                    <TextField
                        onChange={this.handleFieldChange}
                        name="debt_date"
                        type="date"
                        value={debt_date}
                        className="debtForm"
                        required={true}
                    />

                    <TextField
                        onChange={this.handleFieldChange}
                        name="debt_value"
                        label="Value EX: 1000.00"
                        value={debt_value}
                        className="debtForm"
                        required={true}
                    />

                    <button className="buttonDebtForm" type="submit">Register</button>
                </form>
            
        );
    }

}


const mapStateToProps = state => ({
    user: state.users.allUsers,

})


const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch(getUsers()),
    registerDebt: (client_id, client_name, debt_reason, debt_date, debt_value) => dispatch(registerDebt(client_id, client_name, debt_reason, debt_date, debt_value))
})



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DebtForm);
