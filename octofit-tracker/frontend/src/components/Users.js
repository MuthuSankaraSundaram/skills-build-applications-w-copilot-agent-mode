import React, { useState, useEffect } from 'react';

function Users() {
  // Step 1: Create state to store fetched data
  const [items, setItems] = useState([]);

  // Step 2: Base URL for backend API
  const baseUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api`;

  // Step 3: Fetch data when component mounts
  useEffect(() => {
    fetch(`${baseUrl}/users/`)
      .then(response => response.json())
      .then(data => {
        const list = data.results ? data.results : data; // handle paginated or plain array
        console.log(list); // for debugging
        setItems(list);     // update state
      })
      .catch(err => console.error(err));
  }, []); // empty array = run once on mount

  // Step 4: Render the data
  return (
    <div>
      <h2>Users</h2>
      <pre>{JSON.stringify(items, null, 2)}</pre>
    </div>
  );
}

export default Users;
