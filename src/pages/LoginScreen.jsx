import React from 'react';
import { useDispatch } from 'react-redux';
import GoogleButton from 'react-google-button';
import { googleLogin } from '../actions/auth';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    dispatch(googleLogin('12345', 'Juan'));
    console.log('Google login');
  };
  return (
    <div className='container'>
      <h3>Login Page</h3>
      <hr />
      <div className='row container back'>
        <form className='col s12'>
          <div className='row'>
            <div className='input-field col s12'>
              <i className='material-icons prefix'>email</i>
              <textarea id='email' className='materialize-textarea'></textarea>
              <label htmlFor='email'>Email</label>
            </div>
            <div className='input-field col s12'>
              <i className='material-icons prefix'>password</i>
              <textarea
                id='password'
                className='materialize-textarea'
              ></textarea>
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
