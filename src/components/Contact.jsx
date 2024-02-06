import React, { useEffect, useState } from "react";
import "../Style/Contact.css";
import axios from "axios";
import exportFromJSON from "export-from-json";

const Contact = ({ setLoggedIn }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/reach-out/getAll", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setData(res.data.data);
      } catch (error) {
        if (error.response.status === 403) {
          setLoggedIn(false);
          alert(`Session Expired! Login Again!`);
        }
        setError("Error fetching data. Please logout and try again.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setLoggedIn]);

  const onExport = () => {
    const fileName = "download";
    const exportType = exportFromJSON.types.csv;
    exportFromJSON({ data, fileName, exportType });
  };

  return (
    <div className="main-container">
      <div className="contact">
        <h1 id="heading">Contact</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div id="main">
            <table>
              <thead>
                <tr className="tableRow">
                  <th>Email Address</th>
                  <th>Full Name</th>
                  <th>Contact Number</th>
                  <th>Services</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="tableRow">
                    <td>{item.email}</td>
                    <td>{item.fullName}</td>
                    <td>{item.contactNumber}</td>
                    <td>{item.services.join()}</td>
                    <td>{item.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {data.length > 0 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30px",
                }}
              >
                <button className="exportButton" onClick={onExport}>
                  Export
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
