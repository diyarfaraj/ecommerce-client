const API_URL =
  process.env.NODE_ENV === "production"
    ? window.API_URL
    : "https://ecommerce-api-diyar.azurewebsites.net/api/";

export default {
  API_URL,
};
