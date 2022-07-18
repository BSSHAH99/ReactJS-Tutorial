import React, { useEffect, useMemo, useState } from "react";

import data from "./Data";

function Task() {
  const [select, setSelect] = useState({});
  const [searchValue, setsearchValue] = useState("");
  // const [datee, setDatee] = useState({
  //   startDate: "",
  //   endDate: "",
  // });
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;

    setSelect((preData) => {
      return {
        ...preData,
        [name]: checked
          ? preData[name]
            ? [...preData[name], value]
            : [value]
          : preData[name]
          ? preData[name].filter((val) => val !== value)
          : [],
      };
    });
  };

  useEffect(() => {
    console.log("SELECT", select);
  }, [select]);

  const onChangeForDate = (e, key) => {
    const { name, value } = e.target;

    // name == "startDate" ? (sdate = "startDate") : (edate = "startDate");
    // console.log("this is sdata and edata and name", edate);

    setSelect((prevSelect) => ({
      ...prevSelect,
      [key]: prevSelect[key]
        ? { ...prevSelect[key], [name]: value }
        : { [name]: value, type: "date" },
    }));
  };

  Date.prototype.valid = function () {
    return isFinite(this);
  };

  function validStringDate(value) {
    var d = new Date(value);
    return d.valid() && value.split("-")[0] == d.getMonth() + 1;
  }

  // const field = new Set();
  // const fieldmemo = useMemo(() => {
  //   data.map((items) => {
  //     return Object.entries(items).map(([key]) => {
  //       field.add(key);
  //       return key;
  //     });
  //   });
  //   return (
  //     <React.Fragment>
  //       <tr>
  //         {Array.from(field.values()).map((items, index) => {
  //           return (
  //             <th key={index} scope="col">
  //               {items}
  //             </th>
  //           );
  //         })}
  //       </tr>
  //     </React.Fragment>
  //   );
  // }, [select]);
  console.log("this is set select ", select);
  const field = new Set();

  data.map((items) => {
    return Object.entries(items).map(([key]) => {
      field.add(key);
      return key;
    });
  });
  const Boxes = new Object();
  {
    data.map((items) => {
      return Object.entries(items).map(([key, value]) => {
        Boxes[key] = Boxes[key] ? [...Boxes[key], value] : [value];
        return value;
      });
    });
  }

  const tableRow = new Array();

  data.map((items, index) => {
    const item = Object.entries(items, index);
    tableRow.push(items);
    return items;
  });

  return (
    <>
      <div className="container my-3">
        <div className="container">
          <div className="mb-12 form-check d-flex">
            {Object.entries(Boxes).map(([key, value], index) => {
              // console.log("this is key value and index", key, value, index);
              var deduped = Array.from(new Set(value));
              // console.log("sdfsdf", key);

              if (key != "id" && key != "name") {
                const regDate = /\d{4}-\d{2}-\d{2}/;
                const regDate1 = /\d{2}-\d{2}-\d{4}/;

                if (regDate.test(value) || regDate1.test(value)) {
                  console.log(key);

                  // const date = value;
                  // if (date instanceof Date && !Number.isNaN(date.valueOf())) {

                  return (
                    <React.Fragment key={index}>
                      <div className="mb-3 form-check mx-3 my-3 ">
                        <h1 scope="col">{key}</h1>
                        <label className="form-check-label">Start Date</label>
                        <input
                          type="date"
                          className="form-control"
                          name="startDate"
                          // value={select[key] ? select[key].startDate : ""}
                          value={select[key]?.startDate || ""}
                          onChange={(e) => onChangeForDate(e, key)}
                        />
                        <label className="form-check-label">End Date</label>
                        <input
                          type="date"
                          className="form-control"
                          name="endDate"
                          // value={select[key] ? select[key].endDate : ""}
                          value={select[key]?.endDate || ""}
                          onChange={(e) => onChangeForDate(e, key)}
                          min={select[key]?.startDate}
                          disabled={select[key]?.startDate ? false : true}
                        />
                      </div>
                    </React.Fragment>
                  );
                }
                return (
                  <div
                    key={index}
                    className="mb-3 form-switch form-check mx-3 my-3 "
                  >
                    <h1 scope="col">{key}</h1>

                    {deduped.map((checkBox, index) => {
                      return (
                        <div key={index} className="mb-3 form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            role="switch"
                            name={key}
                            value={checkBox}
                            onChange={onChange}
                          />
                          <label className="form-check-label">{checkBox}</label>
                          <br />
                        </div>
                      );
                    })}
                  </div>
                );
              }
            })}
          </div>
          <div className="mb-3 form-check mx-3 my-3 ">
            <input
              type="text"
              placeholder="Search Name"
              className="form-control"
              value={searchValue}
              onChange={(e) => {
                setsearchValue(e.target.value);
              }}
            />
          </div>

          <table className="table table-bordered">
            <thead>
              {/* {fieldmemo} */}

              <tr>
                {Array.from(field.values()).map((items, index) => {
                  return (
                    <th key={index} scope="col">
                      {items}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {tableRow.map((items, index) => {
                if (
                  Object.entries({
                    ...select,
                    searchValue,
                    // ...chekDate,
                  }).every(([key, value]) => {
                    // console.log("VALUE TYPE", value?.type, value);

                    if (value?.type === "date") {
                      return (
                        items[key] >= value.startDate &&
                        items[key] <= value.endDate
                      );
                    }

                    if (key === "searchValue" && value)
                      return items.name?.includes(value);
                    // if (key === "date" && value.startDate && value.endDate) {
                    //   return (
                    //     items.date >= value.startDate &&
                    //     items.date <= value.endDate
                    //   );
                    // }
                    return (
                      !Array.isArray(value) ||
                      value.length === 0 ||
                      value.includes(items[key])
                    );
                  })

                  // (
                  //   select.city.length == 0 || select.city.includes(items.city)
                  // ) &&
                  // (select.category.length == 0 ||
                  //   select.category.includes(items.category)) &&
                  // (select.type.length == 0 ||
                  //   select.type.includes(items.type)) &&
                  // (select.active == 0 || select.active.includes(items.active))
                ) {
                  return (
                    <React.Fragment key={index}>
                      <tr>
                        {Array.from(field.values()).map((cell, index) => {
                          return (
                            <td key={index} scope="col">
                              {items[cell]}
                            </td>
                          );
                        })}
                      </tr>
                    </React.Fragment>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Task;

{
  /* <DatePicker disabledDate={d => !d || d.isAfter("2002-12-31") || d.isSameOrBefore("1960-01-01") } format="YYYY-MM-DD HH:mm:ss" defaultPickerValue={moment("2002-12-31")} placeholder="Start" /> */
}
