import React, {useState} from "react"

export default function TextForm(props){

    const handelUpClick = ()=>{
         let newTest = text.toUpperCase(); 
         setText(newTest);
    }

    const handelDownClick = ()=>{
         let newTest = text.toLowerCase();
         setText(newTest);
    }
    //to download text in localdevice
    const handelDownload =()=>{
        const element = document.createElement("a");
        const file = new Blob([document.getElementById('myBox').value],    
        {type: 'text/plain;charset=utf-8'});
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element);
        element.click();

    }
    //for copy text
    const handelCopy = ()=>{
    console.log('text', text)
    var textField = document.getElementById('myBox')
    textField.select()
    navigator.clipboard.writeText(text.value)  
    }
    //to clerar text area
    const handelClearClick = ()=>{
         setText('');
    }

    const HanldeOnChange = (event)=>{
        // console.log("value changed");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    

    return(
        <>
        <h1>{props.heading}</h1>
     <div className="mb-3">
            <textarea className="form-control" value={text} onChange={HanldeOnChange} id="myBox" rows="10"></textarea>
     </div>
        <button className="btn btn-primary btn-sm mr-3" onClick={handelUpClick}>CONVERT TO UPPER CASE</button>
        <button className="btn btn-primary btn-sm mr-3" onClick={handelDownClick}> CONVERT TO LOWER CASE</button>
        <button className="btn btn-primary btn-sm mr-3" onClick={handelCopy}>Copy Text</button>
        <button className="btn btn-primary btn-sm mr-3" onClick={handelDownload}>Download Text</button>
        <button className="btn btn-primary btn-sm mr-3" onClick={handelClearClick}>Clear Text</button>
        <div className="container">
            <h1>Your Text Summery</h1>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p> Number Of Sentence {text.split(".").length-1}  </p>
            <h2>Preview</h2>
        <p>
            {text}

        </p>
        </div>
        </>

    ) 
}