import React, {useState} from "react"

export default function TextForm(props){

    const handelUpClick = ()=>{
         let newTest = text.toUpperCase(); 
         setText(newTest);
    }

    const handelDownClick = ()=>{
         let newTest = text.toLowerCase();
         setText(newTest)
    }
    // const handelCamalClick = ()=>{
    //      let newTest = text.toc
    //      setText(newTest)
    // }

    const HanldeOnChange = (event)=>{
        console.log("value changed");
        setText(event.target.value);
    }
    const [text, setText] = useState('enter text here');

    return(
    <div>
     <div className="mb-3">
        <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={HanldeOnChange} id="myBox" rows="10"></textarea>
     </div>
        <button className="btn btn-primary btn-sm mr-3" onClick={handelUpClick}>CONVERT TO UPPER CASE</button>
        <button className="btn btn-primary btn-sm mr-3" onClick={handelDownClick}> CONVERT TO LOWER CASE</button>
        {/* <button className="btn btn-primary btn-sm mr-3" onClick={handelCamalClick}> CONVERT TO CAMAL CASE</button> */}
    </div>
    )
}