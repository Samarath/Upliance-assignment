"use client";

import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button, Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const navigate = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const savedCount = localStorage.getItem("count");
      if (savedCount) setCount(parseInt(savedCount));
    }
  }, [isClient]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("count", count.toString());
    }
  }, [count, isClient]);

  const maxCount = 20;
  const fillLevel = Math.min((count / maxCount) * 100, 100);
  const fillAnimation = useSpring({
    height: `${fillLevel}%`,
    config: { mass: 1, tension: 210, friction: 20 },
  });

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: 450,
        height: 500,
        border: "2px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
        margin: "50px auto",
        backgroundColor: "gray",
      }}
    >
      <animated.div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "tomato",
          ...fillAnimation,
        }}
      />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => navigate.push("/")}
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

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "20px",
        }}
      >
        <Typography variant="h4">Counter</Typography>
        <Typography variant="h2">{count}</Typography>

        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleIncrement}
            sx={{ mr: 1 }}
          >
            +
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleReset}
            sx={{ mx: 1 }}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleDecrement}
            sx={{ ml: 1 }}
            disabled={count === 0}
          >
            -
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Counter;
