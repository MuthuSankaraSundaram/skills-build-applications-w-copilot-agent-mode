import React, { useState, useEffect } from 'react';

function Workouts() {
  // Step 1: Define state to store the fetched data
  const [items, setItems] = useState([]);

  // Step 2: Define your backend base URL
  const baseUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api`;

  // Step 3: Use useEffect to fetch data when component mounts
  useEffect(() => {
    fetch(`${baseUrl}/workouts/`)
      .then(response => response.json())
      .then(data => {
        const list = data.results ? data.results : data; // handle paginated or plain array
        console.log(list); // for debugging
        setItems(list);     // store data in state
      })
      .catch(err => console.error(err));
  }, []); // empty dependency array means this runs once on mount

  // Step 4: Render the data
  return (
    <div>
      <h2>Workouts</h2>
      <pre>{JSON.stringify(items, null, 2)}</pre>
    </div>
  );
}

export default Workouts;
