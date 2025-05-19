import React, { use, useState } from 'react'
import props from 'react'
export default function ABOUT(props) {
//     const [myStyle, setMystyle]= useState({
//             color: 'white',
//             backgroundColor:'grey'})
// //     const [Btntext, setBtntext]= useState("ENABLE WHITE MODE")
// //    function togglystye() {
// //         if (myStyle.color == 'white') {
// //             setMystyle({
// //                 color: 'grey',
// //                 backgroundColor: 'white'
// //             })
        
//         setBtntext("ENABLE DARK MODE")}
//         else {
//         setMystyle({ color:'white', backgroundColor:'grey'}) 
//         setBtntext("ENABLE WHITE MODE")
//     }}
        let myStyle =({
            color: props.mode==="dark"?"white":"black",
            backgroundColor: props.mode==="dark"?"grey":"white"
        })
  return (
            <div>
        <div className = "container" style = {myStyle}>
            <h1>ABOUT UP&down </h1>
        <div className= "accordion" id="accordionExample" style = {myStyle}>
        <div className= "accordion-item">
            <h2 className= "accordion-header" id="headingOne">
            <button className= "accordion-button" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className= "accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className= "accordion-body" style = {myStyle}>
                <strong>Summary:</strong>Our website offers a simple yet powerful utility to effortlessly convert your text between uppercase and lowercase. Whether you need to transform your text for professional documents, social media posts, or coding projects, our tool makes it quick and easy. Just paste your text, choose your desired case conversion, and get the result instantly — no complicated steps or software installations needed.
            </div>
            </div>
        </div>
        <div className= "accordion-item">
            <h2 className= "accordion-header" id="headingTwo">
            <button className= "accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" style = {myStyle} aria-controls="collapseTwo">
                Completly Free 
            </button>
            </h2>
            <div id="collapseTwo" className= "accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className= "accordion-body" style = {myStyle}>
                <strong>No money.No ads</strong> We believe everyone should have access to efficient text tools without any cost barriers. That’s why our case conversion service is completely free to use, with no hidden fees or subscriptions. You can access it anytime, anywhere, and use it as many times as you want. It’s designed to be user-friendly for students, writers, programmers, and anyone who works with text daily.
            </div>
            </div>
        </div>
        <div className= "accordion-item">
            <h2 className= "accordion-header" id="headingThree">
            <button className= "accordion-button collapsed" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Dark Mode
            </button>
            </h2>
            <div id="collapseThree" className= "accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className= "accordion-body" style = {myStyle}>
                <strong>No strain</strong> To make your experience more enjoyable, our website includes a sleek dark mode option. Whether you prefer a light interface or want to reduce eye strain during late-night work sessions, switching between light and dark modes is effortless. This feature ensures you can use the tool comfortably in any environment, making it perfect for prolonged or quick text editing tasks.


            </div>
            </div>
        </div>
        </div>
        {/* <button className = " btn btn-primary my-5" onClick={togglystye}>{Btntext}</button> */}
            </div>
            </div>
            
  )
}
