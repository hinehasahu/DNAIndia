import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Newsfeed from './components/Newsfeed';
import apikey from './data/config';
// import NewsCard from './components/NewsCard';

function App() {
  const [newsArray, setnewsArray] = useState([]);
  const [newsResults, setnewsResults] = useState();
  const newsApi = async () =>{

    try{
     
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${apikey}`
      )
      console.log(news);
      // setnewsArray(news.data.articles);
      // setnewsResults(news.data.totalResults);
    }
    catch(error){
      console.log(error);
    }

  }

  useEffect(() =>{
     newsApi();
  },[newsResults])

  return (
    <div className="App">
      <Navbar/>
      <Menu/>
      < Newsfeed newsArray={newsArray} newsResults={newsResults} />
      {/* <NewsCard/> */}
    </div>
  );
}

export default App;
