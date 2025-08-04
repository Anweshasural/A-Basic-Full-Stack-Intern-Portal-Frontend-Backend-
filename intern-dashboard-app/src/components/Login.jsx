import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <h2 className="title">Intern Login</h2>
      <form onSubmit={handleLogin} className="form">
        <input type="text" placeholder="Name" className="input" required /><br />
        <input type="email" placeholder="Email" className="input" required /><br />
        <input type="password" placeholder="Password" className="input" required /><br />
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
};

export default Login;