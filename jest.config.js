module.exports = {
  //make sure any js or jsx files are transformed using jest-preprocess.js
  transform: {
    "^.+//jsx?$": `<rootDir>/jest-preprocess.js`,
  },
};
