import React, { useState } from 'react';


export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  const { username, password } = formData;
  const { error, handleLogin } = props;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div class="login">
      <form class="login" onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}>
        <h3 class="login-title">Log in</h3>
        {
          error &&
          <p>{error}</p>
        }
        <label>
          <input
            class="login-input"
            type="text"
            value={username}
            name="username"
            placeholder="username"
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            class="login-input"
            type="password"
            value={password}
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
        </label>
        
          <button class="login-button">LOG IN</button>
        

      </form>
    </div>
  )
}