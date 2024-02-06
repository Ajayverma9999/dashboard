import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style/AllBlogs.css";

const AllBlogs = ({ setLoggedIn }) => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/blog/searchByAuthorId",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setBlogs(response.data); // Set to an empty array if undefined
    } catch (error) {
      if (error.response.status === 403) {
        setLoggedIn(false);
      }
      console.error("Error fetching blogs:", error.message);
    }
  };

  useEffect(() => {
    getBlogs();
   // eslint-disable-next-line
  },[]);

  const deleteHandler = async (id) => {
    const userConfirmed = window.confirm("Are you sure you want to delete?");

    if (userConfirmed) {
      try {
        const res = await axios.delete(
          `http://localhost:8080/blog/delete/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (res.status === 200) {
          alert("Blog Deleted");
          getBlogs();
        }
      } catch (error) {
        console.error("Error deleting blog:", error.message);
      }
    }
  };

  return (
    <div id="allblogs">
      <table>
        <thead>
          <tr className="blogsTable">
            <th>
              <h3>Sr. No</h3>
            </th>
            <th>
              <h3>Title of the blog</h3>
            </th>
            <th>
              <h3>Action</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => (
            <tr key={blog._id} className="blogsTable">
              <td>{index + 1}</td>
              <td>{blog.title}</td>
              <td>
                <button onClick={() => deleteHandler(blog._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBlogs;
