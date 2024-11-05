import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { TestTube, TestTubeFormProps } from "./types";
import { defaultTubeState, getTubesInputs } from "./const";

const TestTubeForm: React.FC<TestTubeFormProps> = ({ onAddTestTube }) => {
  const [formState, setFormState] = useState<TestTube>(defaultTubeState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTestTube(formState);
    setFormState(defaultTubeState);
  };
  const tubesInputs = getTubesInputs(formState);

  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "200px" } }}
      onSubmit={handleSubmit}
    >
      {tubesInputs.map((input) => (
        <TextField
          key={input.label}
          variant="outlined"
          onChange={handleChange}
          {...input}
        />
      ))}

      <Button variant="contained" type="submit">
        Add Test Tube
      </Button>
    </Box>
  );
};

export default TestTubeForm;
