import './styles.css';

const FeatureMovie = ({item}) => {

  return (
    <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className="featured--vertical">
        <div className="featured--horizontal"></div>
      </div>
    </section>
  )
}

export default FeatureMovie;

