import React, { useState, useEffect } from 'react';

function NewsBlog() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=5936cb774fb142babb22d891cdb4b882');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setNewsData(data.articles);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {newsData.map((newsItem, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={newsItem.urlToImage} className="card-img-top" alt="News" />
              <div className="card-body">
                <h5 className="card-title">{newsItem.title}</h5>
                <p className="card-text">{newsItem.description}</p>
                <a href={newsItem.url} className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsBlog;
