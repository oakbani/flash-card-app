let API_URL = "http://localhost:8000/api";
if (process.env.NODE_ENV === "development") {
  API_URL = "http://localhost:8000/api";
}
export { API_URL };
