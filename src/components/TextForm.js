import React,{useState} from "react";

export default function TextForm(props) {

    const handleOnClick = ()=>{
        // console.log("Upper Case Wanted");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("to uppercase done!","success");
    }

    const handleLoClick = ()=>{
        // console.log("Lower Case Wanted");
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("to lowercase done!","success");
    }

    const handleOnChange = (event)=>{
        // console.log("value changed");
        setText(event.target.value);
    }

    // const [text,setText] = useState("Enter Text here");
    const [text,setText] = useState("");
    // text = "dfdfd" //wrong way
    // setText("New Text"); //correct way

    //copying the text
    const handleCopy = ()=>{
      // var text = document.getElementById("myBox");
      // text.select();
      navigator.clipboard.writeText(text);
      props.showAlert("text copied!","success");
    }

    //removing extra spaces
    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("extra spaces removed!","success");
    }

  return (
    <>
    <div className="container">
      <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label" style={{color:props.mode==='light'?'black':'white'}}>
          Example textarea
        </label>
        <textarea
          style={{backgroundColor:props.mode==='dark'?'#212529':'white',
          color:props.mode==='light'?'black':'white'}}
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button disabled={text.length===0}className={`btn btn-${props.mode==='dark'?(props.diffDarkMode==='1'?'danger':'warning'):'primary'} mx-2 my-1`} onClick={handleOnClick}>Convert to Uppercase</button>
      <button disabled={text.length===0}className={`btn btn-${props.mode==='dark'?(props.diffDarkMode==='1'?'danger':'warning'):'primary'} mx-2 my-1`} onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0}className={`btn btn-${props.mode==='dark'?(props.diffDarkMode==='1'?'danger':'warning'):'primary'} mx-2 my-1`} onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0}className={`btn btn-${props.mode==='dark'?(props.diffDarkMode==='1'?'danger':'warning'):'primary'} mx-2 my-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{
        return(element.length!==0);
      }).length} words & {text.replace(/\s/g, '').length} chars</p>
      <p>{0.008*text.replace(/\s/g, '').length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Type Something"}</p>
    </div>
    </>
  );
}
