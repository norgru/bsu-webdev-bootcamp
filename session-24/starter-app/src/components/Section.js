import React from 'react';
import ReactDOM from 'react-dom/client';

function Section(){

    

    return(
        <div className='articleGrid'>

            <div>
                <h1>{article[0].title}</h1>
                <img src={`/img/${article[0].image}`} alt="hi"/>
                <p>{article[0].text}</p>
            </div>
            {/*Keep images in public folder*/}
            <div>
                <h1>{article[1].title}</h1>
                <img src={`/img/${article[1].image}`} alt="hi2"/>
                <p>{article[1].text}</p>
            </div>

            <div>
                <h1>{article[2].title}</h1>
                <img src={`/img/${article[2].image}`} alt="hi3"/>
                <p>{article[2].text}</p>
            </div>
        </div>
        
        
        

        
        
    )
}

export default Section;