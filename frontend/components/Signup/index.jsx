import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Form from '../Form/index';
import Error from '../DisplayError/index';
import { SIGNUP_MUTATION } from '../../lib/mutations';

class Signup extends Component {
  state = {
    email: '',
    name: '',
    password: ''
  };
  saveToState = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { state } = this.state;
    return (
      <Mutation mutation={SIGNUP_MUTATION} variables={state}>
        {(signup, { error, loading }) => (
          <Form
            method="post"
            onSubmit={async event => {
              event.preventDefault();
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <Error error={error} />
              <h2>Sign Up for an Account</h2>
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="name">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  value={this.state.name}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>
              <button type="submit">Sign Up!</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default Signup;
