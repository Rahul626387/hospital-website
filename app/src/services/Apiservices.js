// import axios from "axios";
// // import { base_url, base_url, secretkey } from "../../config/Url";
// const base_url = process.env.BASE_URL
// const secretkey = process.env.API_KEY


// class ApiService {
//   // GET request
//   static async get(url, params = {}) {
//     console.log("url",url)
//     try {
//       const { data } = await axios.get(`${base_url}${url}`,{
//           headers: {
//         "x-api-key": secretkey,
//       },
//       params,
//     });
//       console.log("sdfsdggdfg",data)
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   }

//   // POST request
//   static async post(url, payload) {
//     try {
//       const { data } = await axios.post(`${base_url}${url}`, payload,{
//         headers:{
//           'x-api-key':secretkey
//         }
//       });
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   }

//   // PUT request
//   static async put(url, payload) {
//     try {
//       const { data } = await axios.put(`${base_url}${url}`, payload,{
//         headers:{
//           'x-api-key':secretkey
//         }
//       });
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   }

//   // DELETE request
//   static async delete(url) {
//     try {
//       const { data } = await axios.delete(`${base_url}${url}`,{
//         headers:{
//           'x-api-key':secretkey
//         }
//       });
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   }
// }
// export default ApiService;


import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const secretkey = process.env.NEXT_PUBLIC_API_KEY;


class ApiService {
  
  static async get(url, params = {}) {
    try {
      const { data } = await axios.get(`${base_url}${url}`, {
        headers: {
          "x-api-key": secretkey,
        },
        params,
      });

      return data;
    } catch (error) {
      console.error(
        "GET Error:",
        error.response?.data || error.message
      );
      throw error;
    }
  }

  // static async post(url, payload = {}) {
    
  //   try {
  //     const { data } = await axios.post(
  //       `${base_url}${url}`,
  //       payload,
  //       {
  //         headers: {
  //           "x-api-key": secretkey,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     return data;
  //   } catch (error) {
  //     console.error(
  //       "POST Error:",
  //       error.response?.data || error.message
  //     );
  //     throw error;
  //   }
  // }


  static async post(url, payload = {}) {
  try {
    const isFormData = payload instanceof FormData;

    const { data } = await axios.post(
      `${base_url}${url}`,
      payload,
      {
        headers: {
          "x-api-key": secretkey,

          ...(isFormData
            ? {}
            : {
                "Content-Type": "application/json",
              }),
        },
      }
    );

    return data;
  } catch (error) {
    console.error(
      "POST Error:",
      error.response?.data || error.message
    );

    throw error;
  }
}

  static async put(url, payload = {}) {
    try {
      const { data } = await axios.put(
        `${base_url}${url}`,
        payload,
        {
          headers: {
            "x-api-key": secretkey,
            "Content-Type": "application/json",
          },
        }
      );

      return data;
    } catch (error) {
      console.error(
        "PUT Error:",
        error.response?.data || error.message
      );
      throw error;
    }
  }

  // static async delete(url,payload = {}) {
  //   try {
  //     const { data } = await axios.delete(
  //       `${base_url}${url}`,
  //       payload,
  //       {
  //         headers: {
  //           "x-api-key": secretkey,
  //         },
  //       }

  //     );

  //     return data;
  //   } catch (error) {
  //     console.error(
  //       "DELETE Error:",
  //       error.response?.data || error.message
  //     );
  //     throw error;
  //   }
  // }


  static async delete(url, payload = {}) {
  try {
    const { data } = await axios.delete(
      `${base_url}${url}`,
      {
        headers: {
          "x-api-key": secretkey,
          "Content-Type": "application/json",
        },
        data: payload,
      }
    );

    return data;
  } catch (error) {
    console.error(
      "DELETE Error:",
      error.response?.data || error.message
    );

    throw error;
  }
}
}

export default ApiService;

