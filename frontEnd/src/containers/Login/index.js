import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import { connect } from "react-redux";
import { postLoginUser } from "../../actions/debtManagerUser";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { DivContet, HeaderLogin, LoginWrapper } from "./styled"






class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount(dispatch) {
    const token = window.localStorage.getItem("token")
    if (token !== null) {
      this.props.goToHome()
    }
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLoginButton = () => {
    this.props.login(this.state.email, this.state.password)
  }

  render() {
    const { email, password } = this.state;

    return (
      <DivContet>
        <HeaderLogin>
          <h1>Debts Manager</h1>
        </HeaderLogin>

        <LoginWrapper>

          <TextField
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            label="E-mail"
            value={email}
          />
          <TextField
            onChange={this.handleFieldChange}
            name="password"
            type="password"
            label="password"
            value={password}
          />

          <Button onClick={this.handleLoginButton}>Login</Button>
        </LoginWrapper>
      </DivContet>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(postLoginUser(email, password)),
  goToHome: () => dispatch(push(routes.Home))
})

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);