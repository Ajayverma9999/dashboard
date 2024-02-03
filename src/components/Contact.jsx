import React, { useEffect, useState } from "react";
import "../Style/Contact.css";
import axios from "axios";
import exportFromJSON from "export-from-json";
const Contact = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/reach-out/getAll");
        setData(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
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
    <div className="contact">
      <h1 id="heading">Contact</h1>
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
            {data.map((item, index) => {
              return (
                <tr key={index} className="tableRow">
                  <td>{item.email}</td>
                  <td>{item.fullName}</td>
                  <td>{item.contactNumber}</td>
                  <td>{item.services.join()}</td>
                  <td>{item.message}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button onClick={onExport}>Export</button>
    </div>
  );
};

export default Contact;
