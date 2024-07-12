import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  interface SampleData {
    body: string,
    title: string
  };

  const [data, setData] = useState<SampleData | null>(null);

  useEffect(() => {
    
    // Replace with your API endpoint
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetched Data</h1>
      {data ? (
        <div>
          <h2>{data.title}</h2>
          Found your data 2
          <p>{data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DataFetcher;