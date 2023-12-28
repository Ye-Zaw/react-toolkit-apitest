import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    userDetails: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.users = action.payload.data;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    builder.addCase(fetchUserDetails.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.userDetails = action.payload.data;
    });
    builder.addCase(fetchUserDetails.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://reqres.in/api/users");
  const data = await response.json();
  return data;
});

export const fetchUserDetails = createAsyncThunk(
  "users/fetchUserDetails",
  async (userId) => {
    const response = await fetch(`https://reqres.in/api/users/${userId}`);
    const data = response.json();
    return data;
  }
);

export default userSlice.reducer;
