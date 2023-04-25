import React from 'react';
import { useState } from 'react'


function Login3() {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser(e){
        e.preventDefault();
        const response = await fetch('http://localhost:3001/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }, body: JSON.stringify({
            password: password,
            userName: userName,
          })
        })
    
        const data = await response.json();
        console.log(data)
    }
    
    return (
        <div className='bg-pw h-screen w-full'>
            <div className="login__container border-2 border-tg h-1/2 w-1/3 bg-cs rounded-xl shadow-sm">
                <div className="login__header text-center text-2xl font-bold text-tg pt-4">
                    Login
                </div>
                <div className="login__form">
                    <form className="flex flex-col items-center" onSubmit={(e) => {loginUser(e)}}>
                        <div className="login__form__email w-3/4 mt-4">
                            <label className="text-tg text-sm font-bold" htmlFor="email">Username</label>
                            <input className="w-full h-8 border-2 border-tg rounded-md" value={userName} onChange={(e) => setUsername(e.target.value)}  name="username" id="username" />
                        </div>
                        <div className="login__form__password w-3/4 mt-4">
                            <label className="text-tg text-sm font-bold" htmlFor="password">Password</label>
                            <input className="w-full h-8 border-2 border-tg rounded-md" type="password" name="password"  value={password} onChange={(e) => setPassword(e.target.value)} id="password" />
                        </div>
                        <div className="login__form__submit w-3/4 mt-4">
                            <button className="w-full h-8 bg-tg text-cs rounded-md">Login</button>
                        </div>
                    </form>
                    </div>
            </div>
            
        </div>
    );
}

export default Login3;