import React, {useState} from 'react'

export default function FORM(props) {
    const [text,setText]= useState("Erase this and paste your text!");


    const handleclick = () =>{
        let newText= text.toUpperCase()
        setText(newText)
        props.showAlert("text converted to UPPERCASE!", "success")
}
    
    const handleonchange = (event) =>{
        setText(event.target.value)
    }

    const handleclick2 = () => {
        setText(text.toLowerCase())
        props.showAlert("text converted to lowercaser!", "success")

    }
    const handleclick3= () =>{
      let newText =('')
      setText(newText)
      props.showAlert("Cleared text!", "success")

    }
    const handleclick4=()=>{
      navigator.clipboard.writeText(text) 
      props.showAlert("Copied text!", "success")
 
    }

  return (

    <div className="container" style={{
      backgroundColor: props.mode === "light" ? "white" : "grey",
      color: props.mode === "light" ? "grey" : "white"
    }}>
      <div className="mb-3">
        <h1>{props.title}</h1>
        <label htmlFor="mybox" className="form-label">{props.heading}</label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleonchange}
          id="mybox"
          rows="10"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "grey",
            color: props.mode === "light" ? "grey" : "white"
          }}
        ></textarea>
        <button className="btn btn-primary" disabled={text.length===0} onClick={handleclick} style={{ backgroundColor: props.mode=== "light"? "grey": "black", color: "white"}}>CONVERT TO UPPERCASE</button>
        <button className='btn  mx-2'  disabled={text.length===0}  onClick={handleclick2}  style={{ backgroundColor: props.mode=== "light"? "grey": "black", color: "white"}}>convert to lowercase</button>
        <button className='btn mx-2'  disabled={text.length===0} onClick={handleclick3} style={{ backgroundColor: props.mode=== "light"? "grey": "black", color: "white"}}>Clear text</button>
        <button className='btn mx-2'  disabled={text.length===0} onClick={handleclick4} style={{ backgroundColor: props.mode=== "light"? "grey": "black", color: "white"}}>Copy text</button>

        <div className='container mt-3'>
          <h1>ANALYSIS</h1>
          <p>Number of characters = {text.length} and words = {text.trim() === "" ? 0 : text.trim().split(/\s+/).length}</p>
          <h2>PREVIEW</h2>
          <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
      </div>
    </div>);}