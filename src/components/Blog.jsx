import React from "react";
import Joditeditor from "jodit-react";
import { useRef } from "react";
import { useState } from "react";
import axios from "axios";
const Blog = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [heading, setHeading] = useState("");
  const config = { placeholder: "Start Typing..." };
  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(content);
    try {
      const res = await axios.post("http://localhost:8080/post/create", {
        title: heading,
        content: content,
        author: "trianglespace",
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
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
            <label htmlFor="">Enter Heading:-</label>
            <input
              style={{
                height: "50px",
                borderRadius: "15px",
                fontSize:"20px",
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
            <label htmlFor="">Enter Content:-</label>
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
    </>
  );
};

export default Blog;
