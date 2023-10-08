const configureStore = require("@reduxjs/toolkit").configureStore;
const reducer = require("./StateSlice");

const store = configureStore({
  reducer,
});

module.exports = store;
