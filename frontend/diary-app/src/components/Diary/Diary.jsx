import React from 'react';
import { useState } from 'react';


function Diary() {
    const [user, setUser] = useState();
    return (
        <div className='h-screen w-full bg-tg'>
            
                <div className='nav__bar h-10 bg-pw'>
                    <ul className='flex justify-between p-2 mx-2'>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>Logout</a></li>
                    </ul>
                </div>
            <div className='diary__container h-full flex-col relative justify-center'>
                <div className="diary__entry h-[200px] w-1/2 bg-cs rounded-2xl border-2 border-buff shadow-md text-center absolute left-1/4 top-1/4">Secrets:
                <ol className=' pt-8'>
                    <li>Social Insurance Number: 35</li>
                    <li>Least Favourite Coworker: Bob</li>
                    <li>Crush: Bob</li>
                </ol>
                </div>
            </div>
        </div>
         
    );
}

export default Diary;