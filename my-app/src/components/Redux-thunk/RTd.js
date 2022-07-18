import React, { Component } from "react";
import { connect } from "react-redux";
import {
  featchUseres,
  fetchUsersRequest,
} from "../reduxDemo/action/userDataAction";

const mapStateToProps = (props) => {
  const loading = props.userData.loading;
  const users1 = props.userData.users;
  console.log("this is loading", loading);
  console.log("this is users", users1);
  return {
    ...props,
    users: props.userData.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsersRequest: dispatch(fetchUsersRequest()),
    featchUseres: dispatch(featchUseres()),
  };
};

class RTd extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log("props :>> ", this.props.test);
    // this.props.test();
  }

  render() {
    return (
      <div>
        <div className="container my-3">
          <div className="container">
            {console.log("******************************")}
            {this.props.userData.loading == true ? (
              <div className="text-center">
                <div className="spinner-border m-5" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">City</th>
                    <th scope="col">Phone No</th>
                  </tr>
                </thead>
                <tbody>
                  {console.log(this.props)}
                  {console.log(this.props.users)}
                  {this.props.users.map((items, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <th scope="row">{items.name}</th>
                        <td>{items.email}</td>
                        <td>{items.address.city}</td>
                        <td>{items.phone}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RTd);
