import React, {useState} from "react";


export default function TextForms(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked " + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("COverted to UpperCase ","success")
    }
    const handleLoClick = ()=>{
        // console.log("UpperCase was clicked " + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("COverted to LowerCase ","success")
    }
    const ClearTextClick = ()=>{
        // console.log("UpperCase was clicked " + text)

        let newText = ""
        setText(newText)
        props.showAlert("Text Cleared ","success")
    }
    const handleOnChange = (event)=>{
        // console.log("on change")
        setText(event.target.value)

    }
    // const replace = ()=>{
    //     let newText=text.replaceAll(searchValue,newValue)
    // }
    // const handleCopy = ()=>{
    //     // // console.log("on change")
    //     // var text = document.getElementById("mybox")
    //     // text.select();
    //     // // navigator.clipboard.writeText(text.value);
    //     // navigator.clipboard.writeText(text.Value)
       
    // }
      const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to uour clipboard","success")
     }  
      const handleExtraSpaces = () => {
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "))
       props.showAlert("Extra Spaces Cleared","success")
     }  
      const [text, setText]= useState("");
    

    return (
        <>
        <div className="container " style={{color : props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
             <textarea className="form-control" style={{backgroundColor : props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'#042743'}} id="myBox" onChange={handleOnChange} rows="8" value={text}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={ClearTextClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
           
        </div>
        <div className="className my-3" style={{color : props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length } Mintutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text above to preview it here"}</p>
        </div>
        </>
    );
}
 