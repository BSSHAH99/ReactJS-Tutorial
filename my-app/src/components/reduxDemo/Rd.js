import React, { Component } from "react";
import { connect } from "react-redux";
import { incNumber, decNumber } from "./action/index";

const mapStateToProps = (props) => {
  return {
    inc: props.changeTheNumber.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incNumber(5)),
    decNumber: () => dispatch(decNumber()),
  };
};

class Rd extends Component {
  hendalchange = (e) => {
    console.log("handal chage is calliing");
    const value = e.target.value;
    console.log("thios is value", value);
  };
  render() {
    return (
      <div>
        <div className="container my-3">
          <div className="container">
            <h1>Increment and Decrement</h1>
            <input
              type="text"
              aria-label="First name"
              className="form-control"
              onChange={this.hendalchange}
              value={this.props.inc}
            />
            <button
              type="button"
              className=" my-3 mx-3 btn btn-primary"
              onClick={() => {
                console.log("onclik is decrement calling");
                this.props.decNumber();
              }}
            >
              -
            </button>
            <button
              type="button"
              className="my-3 mx-3 btn btn-primary"
              onClick={() => {
                console.log("onclick is increment calling");
                this.props.increment();
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rd);
