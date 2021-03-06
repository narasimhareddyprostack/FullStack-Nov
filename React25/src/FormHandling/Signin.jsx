import React, { Component } from "react";

export class Signin extends Component {
  state = {
    email: "",
    password: "",
  };
  inputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  btnHandler = (event) => {
    event.preventDefault();
    alert(JSON.stringify(this.state));
  };
  render() {
    let { email, password } = this.state;

    return (
      <React.Fragment>
        <div className="container">
          <pre>{JSON.stringify(this.state)}</pre>
          <div className="row">
            <div className="col-md-6">
              <h1> Login Form</h1>
              <form>
                <div className="form-group">
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="email"
                      value={email}
                      className="form-control"
                      onChange={this.inputHandler}
                      name="email"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="password"
                    value={password}
                    className="form-control"
                    onChange={this.inputHandler}
                    name="password"
                  />
                </div>
                {1 ? (
                  <button className="btn btn-success" onClick={this.btnHandler}>
                    {" "}
                    Login
                  </button>
                ) : (
                  ""
                )}
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Signin;

/*
Step 1: HTML Form Element  ie input/textarea etc, you need to create state property
        to Get the state property value to your form use value attribute
step 2: To update state obj property, we need to use setState({})
        How to use?
        Requierd one function/method. 
        Required form event handler?
        
        onChange={handler}

step 3: implete eventhandler - methods to update setState method, with event Object

        email:event.target.value.
*/
