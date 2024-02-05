import React from "react";
import Joditeditor from "jodit-react";
import { useRef } from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import upload_area from "../Assets/upload-area.svg";
import '../Style/Blog.css'
const Blog = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [heading, setHeading] = useState("");
  const [image, setImage] = useState(null);
  const config = { placeholder: "Start Typing..." };

  const imageHandler = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(content);
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", heading);
      formData.append("content", content);

      const res = await axios.post(
        "http://localhost:8080/blog/create",
        formData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          "Content-Type": "multipart/form-data",
        }
      );
      if (res.status === 201) {
        setHeading("");
        setContent("");
        setImage(null);
        Swal.fire({
          text: "Blog Posted Successfully!",
          icon: "success",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="main-container">
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h1 style={{ padding: "10px 20px", textAlign: "center" }}>
            Write A Blog
          </h1>
          <form
            style={{
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
            onSubmit={submitHandler}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              Upload Image:-
              <label htmlFor="file-input">
                <img
                  src={image ? URL.createObjectURL(image) : upload_area}
                  className="blog-thumbnail"
                  alt=""
                />
              </label>
              <input
                onChange={imageHandler}
                type="file"
                name="image"
                id="file-input"
                hidden
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <label htmlFor="">
                Enter Heading:- <span style={{ color: "red" }}>*</span>
              </label>
              <input
                style={{
                  height: "50px",
                  borderRadius: "15px",
                  fontSize: "20px",
                  fontFamily: '"Open Sans",sans-serif',
                  padding: "5px 10px",
                }}
                type="text"
                value={heading}
                onChange={(e) => {
                  setHeading(e.target.value);
                }}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <label htmlFor="">
                Enter Content:- <span style={{ color: "red" }}>*</span>
              </label>
              <Joditeditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1}
                onBlur={(newContent) => setContent(newContent)}
                onChange={(newContent) => {}}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <button
                style={{ padding: "20px", borderRadius: "15px" }}
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Blog;
