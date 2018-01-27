import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';

import Input from '../Input';
import { login } from '../../actions/auth';
import { registerUser } from '../../actions/users';
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const { username, password, firstName, lastName, role } = values;
    const user = { username, password, firstName, lastName, role };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
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

    let { selectedRole } = this.props

    let successMessage;
    if (this.props.submitSucceeded) {
      successMessage = (
        <div className="signup sigup-success">
          Signed up successfully
        </div>
      );
    }

    let errorMessage;
    if (this.props.error) {
      errorMessage = (
        <div className="signup signup-error">{this.props.error}</div>
      );
    }


    return (
      <form
        className="registration-form"
        onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
        )}>

        {successMessage}
        {errorMessage}

        <fieldset>
          <legend>Sign Up</legend>

        <label htmlFor="firstName"></label>
        <Field component={Input} type="text" name="firstName" placeholder="first name"/>
        <label htmlFor="lastName"></label>
        <Field component={Input} type="text" name="lastName" placeholder="last name"/>
        <label htmlFor="username"></label>
        <Field
          component={Input}
          type="text"
          name="username"
          placeholder="username"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor="password"></label>
        <Field
          component={Input}
          type="password"
          name="password"
          placeholder="password"
          validate={[required, length({min: 6, max: 72}), isTrimmed]}
        />
        <label htmlFor="passwordConfirm"></label>
        <Field
          component={Input}
          type="password"
          name="passwordConfirm"
          placeholder="confirm password"
          validate={[required, nonEmpty, matches('password')]}
        />
        <label htmlFor="role"></label>
        <Field
          component="select"
          type="role"
          name="role"
          validate={[required]}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </Field>
        {selectedRole && <div>{selectedRole}</div>}
        <button
            className="login-button"
            type="submit"
            disabled={this.props.pristine || this.props.submitting}>
            Sign Up
        </button>
        </fieldset>
        {/* <p>Already have an account? Log in <Link to={'/login'}><span className="log-in-here">here</span></Link>.</p> */}
      </form>
    );
  }
}

const mapStateToProps = state => ({
  selectedRole: state.form.registration.values.role,
  loggedIn: state.auth.currentUser !== null,
  user: state.auth.currentUser,
})

RegistrationForm = connect(
  mapStateToProps)(RegistrationForm);

export default reduxForm({
  form: 'registration',
  initialValues: { role: 'student' },
  onSubmitFail: (errors, dispatch) =>
      dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
