// import React from 'react'
// import { useState } from 'react'

// function Textform(props) {
//   const information=props.information;
//   // const info=props.info;

//   const jail=()=>{
//     console.log("Converted to uppercase");
//     let ntext=text.toUpperCase();
//     setText(ntext);

//   }
//  const handleChange=(event)=>{
//     console.log("On change");
//     setText(event.target.value);

//   }
//   const [text,setText]=useState('');

//   return (
//     <>
//     <div className='container'>
//       <label htmlFor="myBox">Textarea</label><br />
//       <textarea name="myarea" id="myareaa" rows="10" cols="10" title="Enter your text here" value={text} onChange={handleChange}></textarea><br />
//       <input type="button" value="Click Me" onClick={jail} />
//     </div>
//     <div className="container">
//       <h1>Data Summary</h1>
//       <p>{text.split(" ").length} words and number of alphabets are {text.trim().length}</p>
//       <p>{0.008*text.trim().length} seconds to read {text.split(" ").length} word</p>


//     </div>
//     <br /><br />
//     <h1 className="text-purple-600 bg-yellow-200 cursor-pointer font-extrabold p-12 m-12 flex justify-center underline border-orange-950 ">Preview</h1>
//     <p>{text}</p>
//     </>
//   )
// }

// export default Textform
