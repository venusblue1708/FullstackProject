import { Box } from "@mui/material";
import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <Box sx={{ display: "flex", width: "500px" }}>
        <div id="PaymentForm">
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <form style={{ marginTop: "20px", marginLeft: "70px" }}>
            <input
              type="tel"
              name="cvc"
              placeholder="cvc"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              style={{
                marginTop: "8px",
                width: "230px",
                height: "23px",
                marginLeft: "64px",
                borderRadius: "8px",
                border: "1px solid grey",
              }}
            />
            <input
              type="tel"
              name="expiry"
              placeholder="expiry"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              style={{
                marginTop: "8px",
                width: "230px",
                height: "23px",
                marginLeft: "64px",
                borderRadius: "8px",
                border: "1px solid grey",
              }}
            />

            <input
              type="tel"
              name="number"
              placeholder="card number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              style={{
                marginTop: "8px",
                width: "230px",
                height: "23px",
                marginLeft: "64px",
                borderRadius: "8px",
                border: "1px solid grey",
              }}
            />
            <input
              type="tel"
              name="name"
              placeholder="name"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              style={{
                marginTop: "8px",
                width: "230px",
                height: "23px",
                marginLeft: "64px",
                borderRadius: "8px",
                border: "1px solid grey",
              }}
            />
          </form>
        </div>
      </Box>
    );
  }
}
