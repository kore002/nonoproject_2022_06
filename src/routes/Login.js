
import React, { useState } from "react";
import { Link } from 'react-router-dom';
function Login({ authenticated, login, location }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
      <>
        <h1>Login</h1>
        <input
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
          type="text"
          placeholder="email"
        />
        <input
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
          type="password"
          placeholder="password"
        />
        <Link to="./Home">
            <button>이동하기</button>
         </Link>

      </>
    );
}

export default Login

