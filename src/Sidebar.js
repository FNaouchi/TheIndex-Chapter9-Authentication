import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
// Logo
import logo from "./assets/theindex.svg";
import * as actionCreators from "./store/actions/authentication";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <img src={logo} className="logo" alt="the index logo" />
        <section>
          <h4 className="menu-item active">
            <NavLink to="/authors">AUTHORS</NavLink>
          </h4>
        </section>
        <div className="fixed-bottom">
          {this.props.user ? (
            <button className="btn btn-danger" onClick={this.props.logout}>
              Logout {this.props.user.username}
            </button>
          ) : (
            <Link to="/login" className="btn btn-info m-2 float-left">
              Login
            </Link>
          )}
          {this.props.user ? null : (
            <Link to="/signup" className="btn btn-success m-2 float-left">
              Signup
            </Link>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.rootAuth.user
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionCreators.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
