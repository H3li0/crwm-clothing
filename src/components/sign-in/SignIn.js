import React from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();

    this.setState({email: '', password: ''});
  };

  handleChange = evt => {
    console.log(`Inside handleChange, evt = ${evt}`);

    const {value, name} = evt.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email' 
            type='email' 
            value={this.state.email} 
            label='email'
            handleChange={this.handleChange}
            required 
          />

          <FormInput 
            name='password' 
            type='password' 
            value={this.state.password} 
            label='password'
            handleChange={this.handleChange}
            required 
          />

          <CustomButton type='submit'>Sign In</CustomButton>

        </form>
      </div>
    );
  }
}

export default SignIn;
