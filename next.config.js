module.exports = {
  reactStrictMode: true,
  env: {
    MONGO_URI: process.env.MONGO_URI,
    DEV_URL: process.env.DEV_URL,
    PROD_URL: process.env.PROD_URL,
  },
};
