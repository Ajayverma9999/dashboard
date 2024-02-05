import React, { useEffect, useState } from "react";
import "../Style/grow.css";
import axios from "axios";
import exportFromJSON from "export-from-json";

const Grow = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/grow-with-us/getAll",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setData(res.data.data);
      } catch (error) {
        alert(`${error.response.data} \n Logout and Try Again`)
        setError("Error fetching data. Please logout and try again.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const onExport = () => {
    const fileName = "download";
    const exportType = exportFromJSON.types.csv;
    exportFromJSON({ data, fileName, exportType });
  };

  return (
    <>
      <div className="main-container">
        <div className="grow">
          <h1 id="heading">Grow with Us</h1>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <>
              <div id="main1">
                <table>
                  <thead>
                    <tr className="tableRow1">
                      <th>Name</th>
                      <th>Email</th>
                      <th>Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={index} className="tableRow1">
                        <td>{item.fullName}</td>
                        <td>{item.email}</td>
                        <td>{item.contactNumber}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <button className="exportButton" onClick={onExport}>
                  Export
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Grow;
