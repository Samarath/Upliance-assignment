"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import { Button } from "@mui/material";
import "./text-editor.css";
import { useRouter } from "next/navigation";

const ReactQuill = dynamic(
  () => import("react-quill-new").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <p>Loading editor...</p>,
  }
);

const TextEditor = () => {
  const [formData, setFormData] = useState("");
  const navigate = useRouter();

  useEffect(() => {
    const savedText = localStorage.getItem("userData");
    if (savedText) {
      try {
        const jsonData = JSON.parse(savedText);
        const formattedData = Object.entries(jsonData)
          .map(([key, value]) => `${key}: ${value}`)
          .join("\n");
        setFormData(formattedData);
        /* eslint-disable-next-line */
      } catch (e) {
        setFormData(savedText);
      }
    }
  }, []);

  const handleChange = (value: string) => {
    setFormData(value);
    localStorage.setItem("richText", value);
  };

  return (
    <div className="container">
      <h2>Rich Text Editor</h2>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => navigate.push("/user-form")}
        sx={{
          position: "absolute",
          top: "8px",
          right: "8px",
          zIndex: 10,
          backgroundColor: "white",
        }}
      >
        X
      </Button>
      <ReactQuill value={formData} onChange={handleChange} theme="snow" />
    </div>
  );
};

export default TextEditor;
