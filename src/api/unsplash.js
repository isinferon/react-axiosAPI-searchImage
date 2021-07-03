import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID DHTs98gonF9exiRd5NOSxSYPCYLmQMX8KQicBV7XBmo",
      },
})