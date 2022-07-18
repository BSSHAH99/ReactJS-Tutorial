import React from "react";
import TestTable from "./ReusableComponents/Table/TestTable";
const testdata = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    // Hobbies: ["Reading", "Learning a new language", "Hiking"],
    address: [
      {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
      },
    ],
  },
  {
    id: 2,
    name: "Bhavik Shah",
    username: "Bsshah",
    email: "bhavik@gmailcom",
    address: [
      {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
      },
    ],
  },
  {
    id: 3,
    name: "Sagar",
    username: "Sagar123",
    email: "Sincere@april.biz",
    address: [
      {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
      },
    ],
  },
  {
    id: 4,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
    },
  },
];

// testdata.map((item) => {
//   console.log(">>>", item);
//   console.log(typeof item.address === "object" && !Array.isArray(item.address));
// });

// Object.entries(items).map(([key]) => {

//   // console.log("......................", key);
//   th.add(key);
//   return key;

// }

// testdata.map((items) => {
//   return items[key].?console.log();

// return console.log(
//   typeof items === "object" && !Array.isArray(items) && items !== null
// );
// });

// const th = new Set();
// testdata.map((items) => {
//   return Object.entries(items).map(([key]) => {
//     // console.log("......................", key);
//     th.add(key);
//     return key;
//   });
// });

// testdata.map((data, index) => {
//   console.log("this is data and index", data, index);
//   return (
//     <React.Fragment key={index}>
//       <tr>
//         {Array.from(th.values()).map((items, index) => {
//           console.log(">>>>>>>", items);
//           return (
//             <React.Fragment key={index}>
//               {data[items] && Array.isArray(data[items])
//                 ? console.log("this is tru part")
//                 : console.log("this is fals part")}
//             </React.Fragment>
//           );
//         })}
//       </tr>
//     </React.Fragment>
//   );
// });

const TestData = () => {
  return (
    <div>
      <TestTable tableData={testdata} />
    </div>
  );
};

export default TestData;
