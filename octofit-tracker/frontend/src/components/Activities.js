import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const Activities = () => {
  const [items, setItems] = useState([]);

  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    console.log("Activities API URL:", apiUrl);

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        console.log("Activities API Data:", data);
        setItems(data.results || data);
      })
      .catch(err => console.error(err));
  }, [apiUrl]);

  return (
    <div>
      <h2>Activities</h2>
      <Table striped bordered hover>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx}>
              <td>{JSON.stringify(item)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Activities;
