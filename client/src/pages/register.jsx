//registration pahe
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { authService } from '../services/api';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      await authService.register({ username, email, password });
      navigate('/login');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Register </h1>
      
      {error && <p className="text-red-500 mb-4">{error}</p>}
      
      <input
        type="text"
        placeholder="Enter your user name"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        className="w-full p-2 mb-4 border"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-4 border"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border"
      />
      <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">
        Register
      </button>
    </form>
  );
};

export default Register;
