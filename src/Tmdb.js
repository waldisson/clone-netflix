const API_KEY = '73d388e389c8f61eaf4115837f6783d0';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFeatch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFeatch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: await basicFeatch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFeatch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFeatch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFeatch(`/discover/movie?with_genres=28?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFeatch(`/discover/movie?with_genres=27?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFeatch(`/discover/movie?with_genres=10749?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFeatch(`/discover/movie?with_genres=99?language=pt-BR&api_key=${API_KEY}`)
      },
    ]
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};

    if(movieId) {
      switch(type) {
        case 'movie':
          info = await basicFeatch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
        break;
        case 'tv':
          info = await basicFeatch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
        break;
      default:
      }
    }
    return info;
  }
}