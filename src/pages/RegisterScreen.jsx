import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../actions/auth';

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const { email, username, password, confirmPassword } = data;

  const handleChange = (e) => {
    const value = e.target.value;

    setData({
      ...data,
      [e.target.id]: value,
    });

    console.log(value);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (email.trim() === '' || !email.trim().includes('@')) {
      return;
    }
    if (username.trim().length < 2) {
      return;
    }
    if (password.trim().length < 6) {
      return;
    } else if (password.trim() !== confirmPassword.trim()) {
      return;
    }

    dispatch(register(email, username, password));
    console.log('Register completed');
  };

  return (
    <div className='container'>
      <h3>Register</h3>
      <hr />
      <div className='row container back'>
        <form onSubmit={handleRegister} className='col s12'>
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
              <i className='material-icons prefix'>assignment_ind</i>
              <input
                onChange={handleChange}
                value={username}
                id='username'
                name='username'
                className='materialize-textarea'
                type='text'
              ></input>
              <label htmlFor='username'>Username</label>
            </div>
            <div className='input-field col s12'>
              <i className='material-icons prefix'>password</i>
              <input
                onChange={handleChange}
                value={password}
                id='password'
                name='password'
                className='materialize-textarea'
                type='password'
              ></input>
              <label htmlFor='password'>Password</label>
            </div>
            <div className='input-field col s12'>
              <i className='material-icons prefix'>password</i>
              <input
                onChange={handleChange}
                value={confirmPassword}
                id='confirmPassword'
                name='confirmPassword'
                className='materialize-textarea'
                type='password'
              ></input>
              <label htmlFor='confirmPassword'>Password</label>
            </div>
          </div>
          <button className='waves-effect waves-light btn' type='submit'>
            Enviar
          </button>
          <br />
          <br />
          <Link to='/login'>Login into account</Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
