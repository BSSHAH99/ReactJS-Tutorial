import { useState } from "react";
import FormsInput from "./FormsInput";
import validation from "./validateinfo";
import input from "./InputFildData";
import "./FromInputcss.css";

function Forms() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthdy: "",
    password: "",
    cofirmpassword: "",
  });
  const [formerror, setFormeError] = useState({});
  // console.log("this is error msg", formerror);
  // const [isSubmit, setIsSubmit] = useState(false);

  const handalSubmit = (e) => {
    e.preventDefault();
    setFormeError(validation(values));
    const data = new FormData(e.target);
    console.log(data);
    console.log(Object.fromEntries(data.entries()));
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setFormeError({
      ...formerror,
      [e.target.name]: validation({ [e.target.name]: e.target.value })[
        e.target.name
      ],
    });
  };

  console.log(values);
  return (
    <>
      <div className="container my-3">
        <div className="container">
          <form onSubmit={handalSubmit}>
            {input.map((input) => {
              return (
                <FormsInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                  error={formerror}
                />
              );
            })}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Forms;
