import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import data from './data';

function App() {
  console.log(data)
  return (
    <div className="app">
      <NavBar/>
      <Hero/>
      <section className='card-list'>
        {
          data.map((item) => (
            <Card
            key={item.id}
              img={item.coverImg}
              title={item.title}
              location={item.location}
              price={item.price}
              rating={item.stats.rating}
              reviewCount={item.stats.reviewCount}
              openSpots={item.openSpots}

            />
          ))
        }
      </section>
    </div>
  );
}

export default App;
