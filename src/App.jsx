import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Reference for the first card's height
  const firstCardRef = useRef(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsdata.io/api/1/latest?apikey=pub_66423383d537b31c23079c0720f667115c1e1&q=coronavirus'
        );
        const fetchedNews = response.data.results || [];

        // Duplicate the fetched data
        setNews([...fetchedNews, ...fetchedNews]);  
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Get the height of the first card once it's loaded
  const firstCardHeight = firstCardRef.current ? firstCardRef.current.offsetHeight : 0;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (

    <div className="alldivs container my-4 ">

      <div className="row">
        {/* First card (6 columns wide) */}
        <div className="col-md-6 mb-1">
          <div className="card h-100 overflow-hidden" ref={firstCardRef}>
            {news[0]?.image_url && (
              <img
                src={news[0]?.image_url}
                alt={news[0]?.title}
                className="card-img-top"
                style={{ height: '400px', objectFit: 'cover', padding: '10px' }}
              />
            )}
            <div className="card-body">
              <h5 className="card-title">{news[0]?.title}</h5>
              <p className="card-text text-truncate">
                {news[0]?.description || 'No description available.'}
              </p>
            </div>
          </div>
        </div>

        {/* Second and third cards (stacked, each 6 columns wide) */}
        <div className="col-md-6 d-flex flex-column">
          {[1, 2].map((i) => (
            <div
              className={`card flex-grow-1 mb-1 ${i === 1 ? 'd-flex flex-row-reverse' : 'd-flex flex-row'}`}
              key={i}
              style={{
                height: firstCardHeight / 2,
              }}
            >
              <div className="d-flex flex-row align-items-start overflow-hidden">
                {news[i]?.image_url && (
                  <img
                    src={news[i]?.image_url}
                    alt={news[i]?.title}
                    style={{
                      width: '40%',
                      height: '70%',
                      objectFit: 'cover',
                      margin: i === 1 ? '0 0 0 15px' : '0 15px 0 0',
                    }}
                  />
                )}
                <div>
                  <h5 className="card-title">{news[i]?.title}</h5>
                  <p className="card-text  ">
                    {news[i]?.description || 'No description available.'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="mt-5 d-flex">Latest News ---------------------------------------</h2>

      <div className="row">

        {/* Main section with 2 cards per row */}
        <div className="col-md-8 g-5">
          <div className="row g-3"> {/* g-3 for consistent spacing */}
            {news.slice(3, 13).map((item, index) => (
              <div className="col-md-6" key={index}> {/* Two cards per row */}
                <div style={{ height: '350px' }} className="card overflow-hidden">
                  {/* Image */}
                  {item.image_url && (
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }} // Adjusted height for better layout
                    />
                  )}
                  {/* Text Content */}
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text text-truncate">
                      {item.description || "No description available."}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Aside section for the remaining cards */}
        <aside className="col-md-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>Trending Headlines</h4>
            <button className="btn btn-sm btn-outline-primary">View All</button>
          </div>
          <div>
            {news.slice(11).map((item, index) => (
              <div
                className="card mb-3 d-flex flex-row align-items-start"
                key={index}
                style={{ height: "120px", overflow: "hidden" }}
              >
                {/* Image */}
                {item.image_url && (
                  <img
                    src={item.image_url}
                    alt={item.title}
                    style={{
                      width: "40%",
                      height: "100%",
                      objectFit: "cover",
                      marginRight: "10px",
                    }}
                  />
                )}

                {/* Text */}
                <div className="card-body p-2">
                  <h6 className="card-title">{item.title}</h6>
                  <p className="card-text small text-truncate">
                    {item.description || "No description available."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </aside>

      </div>
    
    </div>
  );
}







export default App;
