import React, { useState} from 'react'

const Form = (props) => {

const[text,setText] = useState('');

const changeUpper = () => {
  let newText = text.toUpperCase();
  setText(newText);
  // console.log(' Change to uppsercase');
  props.showAlert("Convert into uppercase ","Success")
}

const changeLower = () => {
  let nnewstate = text.toLocaleLowerCase();
  setText(nnewstate);
  props.showAlert("Convert into lowercase ","Success")
}

const clearClik = () => {
  let saaf = ''
  setText(saaf)
  props.showAlert("Clear text ","Success")
}

const changeEvent =(event)=>{
  setText(event.target.value);
  // console.log('Change');
}
  return (
    <>
    <div className='container' style={{color :props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea value={text} className="form-control" onChange={changeEvent} id="exampleInputEmail1" rows="8" style={{backgroundColor :props.mode==='dark'?'#142749':'white',color :props.mode==='dark'?'white':'#042743'}} ></textarea>
    </div>
    <button className="btn btn-primary mx-2 my-2" onClick={changeUpper}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={changeLower}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={clearClik}>Clear</button>
    

    <div className="cotainer my-2"style={{color :props.mode==='dark'?'white':'#042743'}}>

      <h2>Text summry</h2>

      <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} Character</p>
      
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minute  to read summry</p>
    
    </div> 
    <div>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Something in text Box"}</p>
    </div>
    </div>
</>
  )
}

export default Form
