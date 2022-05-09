import './Newsfeed.css';
import React, { useState,useEffect } from 'react';
function World() {
    const [user, setUser] = useState([]);
    console.log("user",user)
    const apiKey = '3762a134137a48c3a990ce0e35c12aa2';
    // const url = 

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



    // {data.map((item)=>(
    //     <div>
    //         {/* <Homeitem item={item}/> */}
    //         <Homeitem  key ={item.id} item={item}/>
    //        <Detail {...item}/>

  
    return (
        <div className='news'>
            
            {user.map(e => (
                <>
               <h4 key={e.id}>{e.author}</h4>
               <h6 key={e.id}>{e.content}</h6>
               <img className="img" src={e.urlToImage} alt="e.author" />
               </>
            ))}
            
        </div>

    );
};

export default World