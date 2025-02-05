"use client";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "40%",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        sx={{ mr: 1 }}
        onClick={() => navigate("/counter")}
      >
        Counter Compo
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ mr: 1 }}
        onClick={() => navigate("/user-form")}
      >
        User Form
      </Button>
    </div>
  );
}

export default Home;
