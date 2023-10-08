const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  profile: true,
};

const StateSlice = createSlice({
  name: "profilestate",
  initialState,
  reducers: {
    setProfile: (state) => {
      state.profile = !state.profile;
    },
  },
});

module.exports = StateSlice.reducer;
module.exports.actions = StateSlice.actions;
