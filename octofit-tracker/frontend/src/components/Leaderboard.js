import React, { useState, useEffect } from 'react';

const baseUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api`;

export default function Leaderboard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/leaderboard/`)
      .then(response => response.json())
      .then(data => {
        const items = data.results ? data.results : data;
        console.log('Leaderboard:', items);
        setItems(items);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <pre>{JSON.stringify(items, null, 2)}</pre>
    </div>
  );
}
