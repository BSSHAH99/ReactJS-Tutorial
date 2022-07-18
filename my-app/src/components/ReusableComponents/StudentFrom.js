import React, { useEffect, useState } from "react";
import TestFormInput from "./Form/TestFormInput";
import InputFildStudentData from "./InputFildStudentData";
import TestButton from "./Button/TestButton";
import TestTable from "../ReusableComponents/Table/TestTable";
import TestRadioInput from "./Form/TestRadioInput";
import { Helmet } from "react-helmet";

const StudentFrom = () => {
  const [values, setValues] = useState({});
  const [data, setData] = useState([]);
  const [isUpdate, setisUpdate] = useState(false);
  const d = new Date().getTime().toString();

  console.log("this is values", values);
  console.log("this is data", data);
  useEffect(() => {}, [data]);

  let abcd = "bhavik";
  let encodedData = btoa(abcd);
  let decodedData = atob(encodedData);
  // console.log(
  //   "this is decodedData data is : ",
  //   decodedData + " this is encodedData data is : ",
  //   encodedData
  // );

  // const [atob, setatob] = useState("bhvaik");

  // setatob(atob(atob));
  // console.log("this is atob", atob);

  const handalSubmit = (e) => {
    // console.log(">>>>>>>>>>>>>>>>>>>>> inside of handal submit", isUpdate);
    if (isUpdate == true) {
      console.log("this is update calling");
      onUpdate();
    } else {
      // console.log("this is insert calling");
      insert();
    }
    e.preventDefault();
    // console.log("the states value is ", values);

    // setValues(reset1(values));
  };

  const insert = () => {
    // { ...values, id: d }
    const newData = [...data, { ...values, id: d }];
    setData(newData);
    // console.log("this is datat(array of object)", data);
    // e.preventDefault();
    setValues(reset(values));
  };

  const reset = (obj) => {
    const newObj = Object.keys(obj).reduce((accumulator, current) => {
      accumulator[current] = "";
      return accumulator;
    }, {});
    return newObj;
  };

  const onChange = (e) => {
    console.log("e.target.value :>> ", e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onDelete = (e, index) => {
    if (window.confirm(" Are you sure you want to delete? ") == true) {
      // text = "You pressed OK!";
      // console.log("data", data);
      console.log(index);
      console.log("this is onDelete obj >>>>>>>>>>>>", data);

      // const dat = data[index];
      // console.log(">>>>", dat);
      // setData(data.filter((item) => item.email !== dat.email));

      const newData = [...data];
      newData.splice(index, 1);
      setData([...newData]);
    } else {
      // text = "You canceled!";
    }
  };

  const onEdit = (e, index) => {
    setisUpdate(true);
    console.log(data[index]);
    setValues(data[index]);

    // const editEle = data[index];
    // const obj = Object.entries(editEle);
    // console.log(">>>>>>>>", editEle);

    // obj.map(([key, value]) => {
    //   console.log("key is this", key, value);
    //   key = key ? (values[key] = value) : null;

    // switch (key) {
    //   case "name":
    //     values.name = value;
    // }
    // });
  };

  const onUpdate = () => {
    console.log(">>>>>>>>>>>>>", values);
    data.map((items, index) => {
      if (items.id === values.id) {
        setData([...data, (data[index] = values)]);
      }
      setValues(reset(values));
    });
    setData(data);
    setisUpdate(false);
  };

  // console.log("thsi is recupdate >>>>>", data);
  // console.log(values);
  return (
    <React.Fragment>
      <div>
        <Helmet>
          <title>Student From</title>
          <meta name="student from" content="student registration from" />
          <meta name="keywords" content="student registration" />
        </Helmet>
      </div>

      <div className="container my-3">
        <div className="container">
          <form onSubmit={handalSubmit}>
            {InputFildStudentData.map((input, index) => {
              switch (input.type) {
                case "radio":
                  return (
                    <TestRadioInput
                      key={index}
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                      checked={input?.label === values[input.name]}
                    ></TestRadioInput>
                  );

                default:
                  return (
                    <TestFormInput
                      key={index}
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                  );
              }
            })}

            <TestButton type={"submit"}>
              {isUpdate ? "Update" : "Submit"}
            </TestButton>
          </form>
        </div>
      </div>
      <TestTable
        tableData={data}
        btnEdit={"Edit"}
        btnDelete={"Delete"}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </React.Fragment>
  );
};

// api key = 69cad6b13b9d464d92369d47c8f4ac9c

export default StudentFrom;
