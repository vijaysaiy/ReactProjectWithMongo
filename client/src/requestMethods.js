import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODUxYjY4MjA3NTE1YjcxMmYwMzExMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjE4MjU1MCwiZXhwIjoxNjM2MzU1MzUwfQ.2RMH0aVGo974V-Yir-Sb5YM1XPTlNXYsjEXdZx_nA4k";

export const publicRequest = axios.create({
  baseUrl: BASE_URL,
});

export const userRequest = axios.create({
  baseUrl: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
