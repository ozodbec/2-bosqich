import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk("auth/register", async (userData) => {
  const response = await fetch(
    "https://json-api.uz/api/project/fn23/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  );

  console.log(response);
  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(errorDetails.message || "Registration failed");
  }

  return await response.json();
});
