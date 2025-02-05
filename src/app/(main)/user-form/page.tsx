"use client";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/slices/UserSlice";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const dispatch = useDispatch();
  const initialFormData = {
    id: "",
    name: "",
    address: "",
    email: "",
    phone: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isFormFieldChanged, setIsFormFieldChanged] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const navigate = useNavigate();

  const generateRandomId = (): string => {
    return `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const handleBeforeUnload = (e: BeforeUnloadEvent) => {
        if (isFormFieldChanged) {
          const message =
            "You have unsaved changes. Are you sure you want to leave?";
          e.returnValue = message;
          return message;
        }
      };
      window.addEventListener("beforeunload", handleBeforeUnload);

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, [isFormFieldChanged, isClient]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsFormFieldChanged(true);
  };

  const handleSubmit = () => {
    const newId = generateRandomId();
    const updatedFormData = { ...formData, id: newId };
    localStorage.setItem("userData", JSON.stringify(updatedFormData));
    dispatch(setUser(updatedFormData));
    alert("User Data Saved!");
    setFormData(initialFormData);
    setIsFormFieldChanged(false);
  };

  console.log(localStorage.getItem("userData"));

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: "white",
          textAlign: "center",
          marginTop: "50px",
          position: "relative",
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate("/")}
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
        <Typography variant="h5" gutterBottom>
          User Data Form
        </Typography>

        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          Save
        </Button>
        {localStorage.getItem("userData") ? (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate("/text-editor")}
            sx={{ mt: 2, marginLeft: "10px" }}
          >
            Go to the text editor
          </Button>
        ) : null}
      </Box>
    </Container>
  );
};

export default UserForm;
