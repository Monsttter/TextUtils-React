import React, { useState } from "react";

export default function TextForm(props) {

  const [text, setText]= useState("");

  function handleOnChange(event){
    setText(event.target.value);
  }

  function handleUpClick(){
    const newText= text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  }

  const handleLoClick= ()=>{
    const newText= text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success");
  }
  
  const handleClear= ()=> {
    setText("");
    props.showAlert("Text cleared!", "success");
  }

  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleCopy= () => {
    // var copyText = document.getElementById("myBox");

    // Select the text field
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    // navigator.clipboard.writeText(copyText.value);
    // document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text);
    props.showAlert("copied to clipboard!", "success");
  }

  const handleExtraSpaces = ()=>{
    let newText= text.split(/[ ]+/);  // regex in js
    setText(newText.join(" "));
    props.showAlert("extra spaces removed!", "success");
  }

  return (
    <>
    <div className="container" style={{color: props.mode==="light"?"black":"white"}}>
    <h1 className="mb-2">{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="light"?"white":"#12436a", color: props.mode==="light"?"black":"white"}} id="myBox" rows="8" ></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSpeak}>Speak</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container" style={{color: props.mode==="light"?"black":"white"}}>
        <h2>Your Text Summary</h2>
        <p> {text.split(/\s+/).filter((element)=> element.length !== 0).length} words and {text.length} letters</p>
        <p> {0.008 * text.split(/\s+/).filter((element)=> element.length !== 0).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Nothing to preview!"}</p>
    </div>
    </>
  );
}
