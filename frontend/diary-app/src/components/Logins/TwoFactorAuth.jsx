import React from 'react';
import { useState } from 'react'

function TwoFactorAuth() {
    const [code, setCode] = useState('')

    async function verify(e){
        e.preventDefault();
        const response = await fetch('http://localhost:3001/api/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }, body: JSON.stringify({
            code: code,
          })
        })
    
        const data = await response.json();
        console.log(data)
    }
    return (
        <div className='bg-pw h-screen w-full flex justify-center'>
            <div className="login__container border-2 border-tg h-1/3 w-1/3 bg-cs rounded-xl shadow-sm align-center">
                <div className="login__header text-center text-2xl font-bold text-tg pt-4">
                    2FA
                </div>
                <div className="auth__form">
                    <form className="flex flex-col items-center" onSubmit={(e) => verify(e) }>
                        <div className="login__form__email w-3/4 mt-4">
                            <label className="text-tg text-sm font-bold" htmlFor="auth">2 Factor Authentication</label>
                            <input className="w-full h-8 border-2 border-tg rounded-md"  name="username" id="username"  value={code} onChange={(e) => setCode(e.target.value)} />
                        </div>
                    
                        <div className="login__form__submit w-3/4 mt-4">
                            <button  className="w-full h-8 bg-tg text-cs rounded-md">Verify</button>
                        </div>
                    </form>
                    </div>
            </div>
            
        </div>
    );
}

export default TwoFactorAuth;