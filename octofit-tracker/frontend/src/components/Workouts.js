import React, { useState, useEffect } from "react";

const Workouts = () => {
  const [items, setItems] = useState([]);
 const baseUrl = "http://127.0.0.1:8000/api";

  useEffect(() => {
    fetch(`${baseUrl}/workouts/`)
      .then((res) => res.json())
      .then((data) => {
        const fetchedItems = data.results || data;
        console.log("Fetched workouts:", fetchedItems);
        setItems(fetchedItems);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!items.length) return <p>Loading workouts...</p>;

  return (
    <div className="container mt-4">
      <h2>Workouts</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            {Object.keys(items[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx}>
              {Object.values(item).map((val, i) => (
                <td key={i}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Workouts;
