module.exports = {
  type: "react-app",
  webpack: {
    rules: {
      walt: {
        use: [
          {
            loader: "walt-loader"
          }
        ]
      }
    }
  }
};
