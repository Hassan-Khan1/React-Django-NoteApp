import React, { useEffect, useState } from 'react'
//  Link of Specific Note Id


const Login = () => {
	
	return (
		<div >
			<div>
        <h1>Login user form</h1>

        <label>
          Username:
          <input type="text" name="username"
           />
        </label>
        <br/>
        <label>
          Password:
          <input type="password" name="password"
           />
        </label>
        <br/>
        <button >Login</button>
        <button >Register</button>
      </div>
		</div>
	)
};
export default Login;
