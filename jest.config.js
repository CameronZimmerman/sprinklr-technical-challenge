module.exports = {
  //make sure any js or jsx files are transformed using jest-preprocess.js
  transform: {
    "^.+//jsx?$": `<rootDir>/jest-preprocess.js`,
  },
  //this will mock our static assets (stylesheets with identitiy-obj-proxy, others with our file-mock.js file)
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
  }
};
