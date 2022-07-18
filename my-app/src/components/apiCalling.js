import axios from "./Services/Instances";

// export function apiCalling(field, method, item) {
//   return fetch(`https://fakestoreapi.com/${field}`, {
//     method: method,
//     body: JSON.stringify(item),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.statusCode === 200) {
//         console.log("data");
//         return data;
//       }
//       console.log(data);
//       return data;
//     })
//     .catch((error) => alert(error.message));
// }

export function apiCalling(field, method, item) {
  return axios({
    url: field,
    method: method,
    data: item,
  })
    .then((res) => {
      //   if (res.status === 200) {
      //     console.log(res.status);
      //   }
      console.log(res.data);
      return res.data;
    })
    .catch((error) => console.log(error.message));
}
