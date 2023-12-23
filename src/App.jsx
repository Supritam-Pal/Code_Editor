import React , {useState} from 'react'
//import Editor from './Components/Editor'
import "./App.css"

const App = () => {
  const [html , setHtml] = useState("");
  const[css , setCss] = useState("");
  const[js , setJs] = useState("");
  
  const handleOutput = () => {
   
    const iframe = document.getElementById("output")
    iframe.contentDocument.body.innerHTML = html + "<style>" + css + "</style>";
    
    iframe.contentWindow.eval(js)
  }


  return (
    <>
     <div className='play'>

      <div className='left'>
       <label>HTML</label>
       <textarea name='html' onChange={(e) => setHtml(e.target.value)}></textarea>

       <label>CSS</label>
       <textarea name='css' onChange={(e) => setCss(e.target.value)}></textarea>

       <label>JAVASCRIPT</label>
       <textarea name='javascript' onChange={(e) => setJs(e.target.value)}></textarea>

      </div>
      
      <div className='right'>
       <button onClick={handleOutput}>Run</button>
       <iframe id="output"></iframe>
      </div>

     </div>
    </>
  )
}

export default App

