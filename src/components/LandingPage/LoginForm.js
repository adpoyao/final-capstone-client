import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';

import Input from '../Input';
import { login } from '../../actions/auth';
import { required, nonEmpty } from '../../validators';

export class LoginForm extends React.Component {
  onSubmit(values) {
    const { username, password } = values;
    return this.props.dispatch(login(username, password));
  }

  render() {
    if (this.props.loggedIn) {
      if(this.props.user.role === 'student'){
      return <Redirect to="/student/dashboard" />;
      } 
      else if(this.props.user.role === 'teacher'){
        return <Redirect to="/teacher/dashboard" />
      }
    }

    let error;
    if (this.props.error) {
        error = (
          <div className="login-error" aria-live="polite">
            {this.props.error}
          </div>
        );
    }
    return (
      <div className="login-form">
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
        )}>

        {error}

        <fieldset>
            <legend>Log In</legend>
            <label htmlFor="username"></label>
            <Field
              component={Input}
              type="text"
              name="username"
              id="username"
              placeholder="username"
              validate={[required, nonEmpty]}
            />
            <label htmlFor="password"></label>
            <Field
              component={Input}
              type="password"
              name="password"
              id="password"
              placeholder="password"
              validate={[required, nonEmpty]}
          />
            <button className="log-in" disabled={this.props.pristine || this.props.submitting}>
              Log in
            </button>
          </fieldset>
      </form>
      {/* <p>Don't have an account yet? Sign up <Link to={'/signup'}><span className="signup-here">here</span></Link>.</p> */}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  loggedIn: state.auth.currentUser !== null,
  user: state.auth.currentUser
})

export default LoginForm = connect(
  mapStateToProps)(reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm));