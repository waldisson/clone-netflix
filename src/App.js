import React,{ useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import Movies from './components/Movies';
import FeatureMovie from './components/FeatureMovie';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let movies = await Tmdb.getHomeList();
      setMovieList(movies);

      let originals = movies.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
    }
    loadAll();
  },[]);

  return (
    <div className="page">

      {featureData && 
        <FeatureMovie item={featureData}/>
      }
      
      <section className="moviesList">
        {
          movieList.map((item, key) => (
            <Movies key={key} title={item.title} items={item.items} />
          ))
        }
      </section>

    </div>
  );
}

export default App;
