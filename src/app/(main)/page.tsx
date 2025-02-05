"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

function Home() {
  const navigate = useRouter();
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
        onClick={() => navigate.push("/counter")}
      >
        Counter Compo
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ mr: 1 }}
        onClick={() => navigate.push("/user-form")}
      >
        User Form
      </Button>
    </div>
  );
}

export default Home;
