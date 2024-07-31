import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import './SignUp.css'; // Import the CSS file
import googleLogo from '../assets/google-logo.svg';
const Login = () => {
    const { login, loginwithGoogle} = useContext(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password).then((userCredential) => {
        //signed in
        const user = userCredential.user;
        alert("Sign up successful!")
        navigate(from, {replace: true})
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage);
  });
}

  //handle login with google

  const handleRegister = () => {
    loginwithGoogle().then((result) => {
      const user = result.user;
      alert("Sign up successfully!")
      navigate(from, {replace:true})
    }).catch((error) => {
      setError(error.message);
    });
  }
  return (
    <div className="container">
    <div className="wrapper">
      <div className="overlay"></div>
      <div className="formContainer">
        <div className="formWrapper">
          <h1 className="title">Login</h1>
          <form onSubmit={handleLogin} className="form">
            <div className="inputContainer">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="input"
                placeholder="Email Address"
              />
              <label htmlFor="email" className="label">
                Email Address
              </label>
            </div>
            <div className="inputContainer">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="input"
                placeholder="Password"
              />
              <label htmlFor="password" className="label">
                Password
              </label>
            </div>
            {
                error ? <p className="text-red-600 text-base">Email or Password incorrect!!</p> : ""
  
            }
            <p className="loginText">
              Create new account?{' '}
              <Link to="/sign-up" className="link">
                Sign Up
              </Link>{' '}
              here.
            </p>
            <button className="button">Login</button>
            {error && <p className="error">{error}</p>}
          </form>
          <hr/>
          <div className='flex w-full items-center flex-col mt-5 gap-3'>
            <button onClick={handleRegister} className='block' >
              <img src={googleLogo} alt="Google" className='w-12 h-12 inline-block' />Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Login
