import server from "@/config/server";
import axios from "axios";

const HTTP = axios.create({
  baseURL: server.BASEURL,
});

export default HTTP;
