import React, { Component, Fragment } from "react";

class PasswordInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      passwordValue: "",
      confirmValue: "",
      isTheSame: true
    };

    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeConfirm = this.handleChangeConfirm.bind(this);
  }

  handleChangePassword(e) {
    const value = e.target.value;
    this.setState(prevState => ({
      passwordValue: value,
      isTheSame: value === prevState.confirmValue
    }));
  }

  handleChangeConfirm(e) {
    const value = e.target.value;
    this.setState(prevState => ({
      confirmValue: value,
      isTheSame: value === prevState.passwordValue
    }));
  }

  render() {
    return (
      <div>
        Password:
        <input
          type="text"
          value={this.state.passwordValue}
          onChange={this.handleChangePassword}
        />
        <br />
        {this.props.showConfirm && (
          <Fragment>
            Confirm:
            <input
              type="text"
              value={this.state.confirmValue}
              onChange={this.handleChangeConfirm}
            />
            <br />
            {this.state.isTheSame ? "ok" : "not okay"}
          </Fragment>
        )}
      </div>
    );
  }
}

export default PasswordInput;
