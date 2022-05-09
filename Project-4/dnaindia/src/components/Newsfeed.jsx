
import React, { useState,useEffect } from 'react';
import './Newsfeed.css';

function Newsfeed () {

    const [user, setUser] = useState([]);
    console.log("user",user)
    const apiKey = '3762a134137a48c3a990ce0e35c12aa2';

    const getUser = async() =>{
        try {
            let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${apiKey}`);
            let data = await res.json();
            console.log("ppppp",data.articles);
            setUser(data.articles);
        }
        catch(err) {
            console.log(err);
        }
        
    }

    useEffect(() =>{
        getUser()
    },[])

  
    return (
        <div className='news'>
            
            {user.map(e => (
                
                <div className='block1'>
                    <img className="img1" src={e.urlToImage} alt="e.author" />
                    <h3 key={e.id}>{e.title}</h3>
                </div>
                    
                
            ))}
            
        </div>

    );
};

export default Newsfeed;