import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "sagar",
      age: 24,
    },
    {
      id: 2,
      name: "akash",
      age: 17,
    },
    {
      id: 3,
      name: "abcd",
      age: 21,
    },
    {
      id: 4,
      name: "swpanil",
      age: 23,
    },
    {
      id: 5,
      name: "nainesh",
      age: 23,
    },
    {
      id: 6,
      name: "keval",
      age: 23,
    },
    {
      id: 7,
      name: "bhavik",
      age: 23,
    },
  ];
  const personsList = persons.map((person) => (
    <Person key={person.id}  person={person} />
  ));
  return <div>{personsList}</div>;
}

export default NameList;
