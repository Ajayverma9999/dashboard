// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../Style/comments.css'; // Make sure to create this CSS file

// const Comments = () => {
//     const [blogs, setBlogs] = useState([]);

//     const getBlogs = async () => {
//         try {
//             const response = await axios.get(`http://localhost:8080/blog/getAllPosts`);

//             // Filter out blog posts where at least one comment is not approved
//             const filtered = response.data.posts.filter(blog =>
//                 blog.comments.some(comment => !comment.approved)
//             );
//             console.log(filtered)

//             setBlogs(filtered);

//         } catch (error) {
//             console.error('Error fetching blogs with unapproved comments:', error.message);
//         }
//     };

//     useEffect(() => {
//         getBlogs();
//     }, []);

//     const handleApprove = async (blogId, commentId) => {
//         try {
//             const response = await axios.post(`http://localhost:8080/blog/${blogId}/comment/${commentId}`)
//             if (response.status === 200) {
//                 getBlogs()
//             }
//         } catch (error) {
//             console.error('Error rejecting comment:', error);
//         }
//     };

//     const handleReject = async (blogId, commentId) => {
//         try {
//             const response = await axios.delete(`http://localhost:8080/blog/delete/${blogId}/comment/${commentId}`)
//             if (response.status === 200) {
//                 getBlogs()
//             }
//         } catch (error) {
//             console.error('Error rejecting comment:', error);
//         }
//     };

//     return (
//         <>
//             <div className="main">
//                 {blogs.map((blog) => (
//                     <div key={blog._id} className="comment-card">
//                         <h3 className='lines title1'>{blog.title}</h3>
//                         {blog.comments.map((comment) => (
//                             <div key={comment._id}>
//                                 <p className='lines'><strong>Name:</strong> {comment.user}</p>
//                                 <p className='lines'><strong>Website:</strong> {comment.email}</p>
//                                 <p className='lines'><strong>Comment:</strong> {comment.text}</p>
//                                 <div className="action-buttons">
//                                     <button onClick={() => handleApprove(blog._id, comment._id)}>Approve</button>
//                                     <button onClick={() => handleReject(blog._id, comment._id)}>Reject</button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default Comments;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style/comments.css"; // Make sure to create this CSS file

const Comments = ({ setLoggedIn }) => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/blog/searchByAuthorId`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      // Filter out approved comments
      const filteredBlogs = response.data
        .map((blog) => ({
          ...blog,
          comments: blog.comments.filter((comment) => !comment.approved),
        }))
        .filter((blog) => blog.comments.length > 0);

      setBlogs(filteredBlogs);
    } catch (error) {
      console.error(error);
      if (error.response.status === 403) {
        setLoggedIn(false);
      }
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const handleApprove = async (blogId, commentId) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/blog/${blogId}/comment/${commentId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (response.status === 200) {
        getBlogs();
      }
    } catch (error) {
      console.error("Error approving comment:", error);
    }
  };

  const handleReject = async (blogId, commentId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/blog/delete/${blogId}/comment/${commentId}`
      );
      if (response.status === 200) {
        getBlogs();
      }
    } catch (error) {
      console.error("Error rejecting comment:", error);
    }
  };

  return (
    <>
      <div className="main">
        {blogs.map((blog) => (
          <div key={blog._id} className="comment-card">
            <h3 className="lines title1">{blog.title}</h3>
            {blog.comments.map((comment) => (
              <div key={comment._id}>
                <p className="lines">
                  <strong>Name:</strong> {comment.user}
                </p>
                <p className="lines">
                  <strong>Website:</strong> {comment.email}
                </p>
                <p className="lines">
                  <strong>Comment:</strong> {comment.text}
                </p>
                <div className="action-buttons">
                  <button onClick={() => handleApprove(blog._id, comment._id)}>
                    Approve
                  </button>
                  <button onClick={() => handleReject(blog._id, comment._id)}>
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Comments;
