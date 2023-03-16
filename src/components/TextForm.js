import React, {useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState('');

    // setText(localStorage.getItem("text"))

    // window.addEventListener("beforeunload", function () {
    //     let conf = confirm("Have you saved your text")
    // });

    
    const handleUpClick = () => {
        if (text.length === 0) return
        let newText = text.toUpperCase();
        setText(newText)
        props.alert("Converted to upper case", "success")
    }

    const handleLowClick = () => {
        if (text.length === 0) return
        let newText = text.toLowerCase();
        setText(newText)
        props.alert("Converted to lower case", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleClearClick = () => {
        if (text.length === 0) return
        setText("")
        props.alert("Text cleared", "success")
    }

    const handleCopyClick = () => {
        if (text.length === 0) return
        navigator.clipboard.writeText(text)
        props.alert("Text copied", "success")
    }

    const handleReverseClick = () => {
        if (text.length === 0) return
        let reversedText = text.split("").reverse().join("")
        setText(reversedText)
        props.alert("Text reversed", "success")
    }

    return (
        <>
        <div className="container mb-3">
            <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className={`form-control bg-${props.mode==='light'?'light':'dark'} text-${props.mode==='light'?'dark':'light'}`} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleReverseClick}>Reverse Text</button>
        </div>
        <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
            <h2>Your text summary</h2>
            <p>{text.split("").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text===''?'Enetr text to preiew here':text}</p>
        </div>
        </>
    );
}
