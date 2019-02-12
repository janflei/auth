import React from "react";

import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import DisplayNameInput from "./DisplayNameInput";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    //this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(e) {
  //   this.setState({
  //     emailValue: e.value
  //   });
  // }

  render() {
    return (
      <div>
        <EmailInput />
        <br />
        <PasswordInput showConfirm={false}/>
        <br />
        <button>Login</button>
      </div>
    );
  }
}

export default Login;