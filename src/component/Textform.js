import React, {useState} from "react"

export default function TextForm(props){

    const handelUpClick = ()=>{
         let newTest = text.toUpperCase(); 
         setText(newTest);
         props.showAlert("Upper Case","success")
    }

    const handelDownClick = ()=>{
         let newTest = text.toLowerCase();
         setText(newTest);
         props.showAlert("Lower Case","success")
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
        props.showAlert("File Downloaded","success")
    }
    
    //for copy text
    const handelCopy = ()=>{
    console.log('text', text)
    var textField = document.getElementById('myBox')
    textField.select()
    navigator.clipboard.writeText(text.valueOf)  
    props.showAlert("Text Copied","success")
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
     <div className="container" style ={{ color: props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
     <div className="mb-3">
            <textarea className="form-control" style ={{ backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'black'} } value={text} onChange={HanldeOnChange} id="myBox" rows="10"></textarea>
     </div>
        <button className="btn btn-primary btn-sm mx-2 my-2" onClick={handelUpClick}>CONVERT TO UPPER CASE</button>
        <button className="btn btn-primary btn-sm mx-2 my-2" onClick={handelDownClick}> CONVERT TO LOWER CASE</button>
        <button className="btn btn-primary btn-sm mx-2 my-2" onClick={handelCopy}>Copy Text</button>
        <button className="btn btn-primary btn-sm mx-2 my-2" onClick={handelDownload}>Download Text</button>
        <button className="btn btn-primary btn-sm mx-2 my-2" onClick={handelClearClick}>Clear Text</button>
        <div className="container">
            <h1>Your Text Summery</h1>
            <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words   words and {text.length} characters</p>
            <p> Number Of Sentence {text.split(".").length-1}  </p>
            <h2>Preview</h2>
            {text} 
        </div>
        </div>

    ) 
}