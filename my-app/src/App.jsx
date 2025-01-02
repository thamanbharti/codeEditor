import './App.css';
import Navbar from './components/Navbar';
import QuestionPart from './components/QuestionPart';
import EditorComponent from './components/Editor';
import { useState } from 'react';

export default function App() {
  const [permission,setPermission]=useState(false);
  
  const permissionHandler=(data)=>{
       setPermission(data)
  }
  return (
    <div className="App">
     <Navbar sendData={setPermission}/>
     <div style={{display:'grid',gridTemplateColumns:'auto 1fr',color:'white',padding:'10px',gap:'10px'}}>
          <QuestionPart/>
          <EditorComponent permission={permission}/>
      </div>
    </div>
  );
}

