// import axios from "axios";

// const API_KEY = "JUxp1MPibBiw2RjxsmCYGolrkqsyIRYarXoAoqFNEKI";
// axios.defaults.baseURL = "https://api.unsplash.com/";

// export const fetchImages = async (query, page = 1) => {
//   try {
//     const response = await axios.get("/search/photos", {
//       params: {
//         query,
//         page,
//         per_page: 12,
//       },
//       headers: {
//         Authorization: `Client-ID ${API_KEY}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching images:", error);
//     throw error;
//   }
// };
