import React from "react";
import CheckboxGroup from "./ ReusableComponents/CheckboxGroup";
import DatePicker from "./ ReusableComponents/DatePicker";
import Input from "./ ReusableComponents/Input";
import RadioButton from "./ ReusableComponents/RadioButton";
import Select from "./ ReusableComponents/Select";
import TextArea from "./ ReusableComponents/TextArea";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;

    case "textarea":
      return <TextArea {...rest} />;

    case "select":
      return <Select {...rest} />;

    case "radio":
      return <RadioButton {...rest} />;

      case "checkbox":
        return <CheckboxGroup {...rest} />;

        case "date":
          return <DatePicker {...rest} />;

    default:
      return null;
  }
  //   return (
  //     <div>FormikControl</div>
  //   )
};

export default FormikControl;
