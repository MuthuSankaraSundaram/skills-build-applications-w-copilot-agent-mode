import React, { useState, useEffect } from 'react';

const baseUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api`;

function Activities() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/activities/`)
      .then(res => res.json())
      .then(data => {
        const results = data.results ? data.results : data;
        console.log("Activities data:", results);
        setItems(results);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Activities</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            {items.length > 0 && Object.keys(items[0]).map(key => <th key={key}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((val, i) => <td key={i}>{val}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;
