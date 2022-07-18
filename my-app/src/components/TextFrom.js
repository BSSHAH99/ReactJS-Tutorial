import React,{useState} from "react";

export default function TextFrom(props) {
    const handleUpClick = ()=>{
        console.log("btn click" ,text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        console.log("btn click" ,text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = ()=>{
        console.log("btn click" ,text);
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event)=>{
        console.log("btn click");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    
    // throw new Error();

  return (
      <>
      <div className="container my-3">
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
    </div>
    

    <div className="container my-2">
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length } words and {text.length} characters</p>
        <h3>Preview</h3>
        <p>{text}</p>
       
    </div>
    </div>
    </>
  
  );
}
