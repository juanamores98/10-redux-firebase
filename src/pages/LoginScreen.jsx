import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import GoogleButton from 'react-google-button';
import { googleLogin, emailAndPasswordLogin } from '../actions/auth';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  const [data, setData] = useState({
    email: '',
    username: '',
  });

  const { email, password } = data;

  const handleChange = (e) => {
    const value = e.target.value;

    setData({
      ...data,
      [e.target.id]: value,
    });

    console.log(value);
  };

  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
    console.log('Google login');
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();

    if (email.trim() === '' || !email.trim().includes('@')) {
      return;
    }
    if (password.trim().length < 6) {
      return;
    }

    dispatch(emailAndPasswordLogin(email, password));
  };

  return (
    <div className='container'>
      <h3>Login Page</h3>
      <hr />
      <div className='row container back'>
        <form onSubmit={handleEmailLogin} className='col s12'>
          <div className='row'>
            <div className='input-field col s12'>
              <i className='material-icons prefix'>email</i>
              <input
                onChange={handleChange}
                value={email}
                id='email'
                name='email'
                className='materialize-textarea'
                type='email'
              ></input>
              <label htmlFor='email'>Email</label>
            </div>
            <div className='input-field col s12'>
              <i className='material-icons prefix'>password</i>
              <input
                onChange={handleChange}
                id='password'
                value={password}
                name={password}
                className='materialize-textarea'
                type='password'
              ></input>
              <label htmlFor='password'>Password</label>
            </div>
          </div>
          <button className='waves-effect waves-light btn' type='submit'>
            Enviar
          </button>
          <br />
          <br />
          <GoogleButton onClick={handleGoogleLogin} />
          <Link to='/register'>Register in the platform</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
