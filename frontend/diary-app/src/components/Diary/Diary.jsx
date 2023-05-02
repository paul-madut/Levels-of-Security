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
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAACkCAYAAAAZtYVBAAAAAklEQVR4AewaftIAAAYDSURBVO3BQW4kOxbAQFKo+1+Z46VWAhJZ9lcPXoT9YIxLLMa4yGKMiyzGuMhijIssxrjIYoyLLMa4yGKMiyzGuMhijIssxrjIYoyLLMa4yGKMiyzGuMiHl1T+UsVO5aTiDZUnKnYqJxUnKicVJyp/qeKNxRgXWYxxkcUYF/nwZRXfpHJScaLyRMWu4gmVXcVOZadyUnGisqs4qfgmlW9ajHGRxRgXWYxxkQ+/TOWJijdUdhU7lV3FTmVXcaJyorKr2KnsKnYqv0nliYrftBjjIosxLrIY4yIf/nEqu4qdyhMVO5WTivE9izEushjjIosxLvLh/1zFTmWn8kTFicpJxTdV/D9ZjHGRxRgXWYxxkQ+/rOIvqZxUnKjsKk5UnlB5ouJEZVfxRMVNFmNcZDHGRRZjXOTDl6n8lyp2Kicqu4qdyq7ipGKnsqvYqZyo7CreULnZYoyLLMa4yGKMi9gP/mEqJxUnKruKnco3VZyoPFHx/2QxxkUWY1xkMcZFPryksqt4QmVXsVP5JpVdxUnFicpJxRsVO5UTlW+qOFHZVbyxGOMiizEushjjIvaDi6jsKk5UnqjYqZxU7FTeqHhDZVfxTSpvVLyxGOMiizEushjjIh9+mcqu4qRip3JSsVN5ouKNijdUdhU7lROVXcVO5Y2Kv7QY4yKLMS6yGOMi9oM/pPJExU7liYqdyq7iRGVXsVPZVexUdhU7lScqdionFTuVXcUTKruKb1qMcZHFGBdZjHGRD1+m8kTFTmWnclKxU9mpPKHyRMUTKicVO5WdyknFGyq7ihOVXcUbizEushjjIosxLvLhJZVdxU7ljYoTlV3FN1WcqOwqTipOVHYVO5VdxU7lCZVdxU5lV/GbFmNcZDHGRRZjXMR+8ILKScVO5aRip7KrOFE5qfgmlScq/pLKrmKnsqvYqZxUfNNijIssxrjIYoyL2A9+kcqu4kRlV7FTeaLiL6mcVOxUTireUNlVvKFyUvHGYoyLLMa4yGKMi3z4ZRVPVOxUTipOVHYVJypPVJxUPFGxU9lV7FTeUHmi4jctxrjIYoyLLMa4iP3gBZWTiidUdhVPqOwqTlS+qeKbVE4qdiq7ip3KruJE5aTimxZjXGQxxkUWY1zkw0sVO5UTlV3Ficqu4gmVNyp2KruKb1L5SyonFX9pMcZFFmNcZDHGRT78sYqdyq7ijYonVHYVb6g8UfGGyq7ipGKnsqs4UdlVfNNijIssxrjIYoyL2A++SOWJip3KExU7lZOKb1LZVZyonFS8oXJSsVPZVfyXFmNcZDHGRRZjXMR+8ILKruJEZVfxhsquYqfyTRUnKruKE5VdxU7liYoTlScqdiq7im9ajHGRxRgXWYxxkQ8vVZyo7CpOVJ6o2KnsKk5UdhUnKruK/1LFTuVfthjjIosxLrIY4yL2gz+kclJxorKrOFHZVZyo7Cp2Kn+p4kTljYqdyknFb1qMcZHFGBdZjHER+8ELKm9U7FROKk5UflPFicpJxYnKf6niROWk4o3FGBdZjHGRxRgXsR/8w1ROKp5Q+aaKb1I5qXhCZVexU9lV/KbFGBdZjHGRxRgX+fCSyl+qeEJlV7FT2VXsVE4qdipPqOwqTip2Kicqu4onKv7SYoyLLMa4yGKMi3z4sopvUjmp2KmcqJyo7CpOVJ5Q2VWcqOwqnqj4lyzGuMhijIssxrjIh1+m8kTFEypPVJyo7FR2FbuKE5UTlV3FruIJlTdUdhUnKruKNxZjXGQxxkUWY1zkwz+uYqdyovJExYnKExU7lROVk4qdyhsVO5WTim9ajHGRxRgXWYxxkQ//5yp2Kk+o7CpOKnYqT6jsKk5UdhU7lV3FTuWk4i8txrjIYoyLLMa4yIdfVvFfUtlV7FR2FTuVk4qdyr9M5aTiNy3GuMhijIssxrjIhy9T+Usqu4qdyk5lV/GEyhMVO5UnVN6o2KnsKk5UTlR2FW8sxrjIYoyLLMa4iP1gjEssxrjIYoyLLMa4yGKMiyzGuMhijIssxrjIYoyLLMa4yGKMiyzGuMhijIssxrjIYoyLLMa4yP8AAjzeXi3ypewAAAAASUVORK5CYII=" alt="" />
            </div>
        </div>
         
    );
}

export default Diary;