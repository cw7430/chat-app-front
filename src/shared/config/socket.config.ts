import { io } from "socket.io-client";

import envConfig from "./env.config";

const baseUrl = envConfig.API_BASE_URL;

const socket = io(baseUrl);

export default socket;