import axios from "axios";

const BaseUrl = axios.create({
  baseURL: "https://market.ilyosbekdev.uz",
});

export default BaseUrl;
