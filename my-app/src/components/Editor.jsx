import React, { useContext, useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { logo, leftLogo, languageList } from "../utillity/editorLogo";



export default function EditorComponent({permission}) {
  const Logo = logo;
  const languages = languageList;
  const [show, setShow] = useState(false);
  const [language, setLanguage] = useState("c++");
  const [code, setCode] = useState("");
  // const [token,setToken]=useState(null);
  // const [response,setResponse]=useState(null);
  //  useEffect(()=>{
  //       const payLoad={
  //         source_code:code,
  //         language_id:54,
  //         std_in:"",
  //       }

  //       const submitCode= async ()=>{
  //         const options = {
  //           method: 'POST',
  //           url: 'https://judge0-ce.p.rapidapi.com/submissions',
  //           params: {fields: '*'},
  //           headers: {
  //             'x-rapidapi-key': '0097f5b453msh06fb2661a86322ep12315ajsnd8bbb6763027',
  //             'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
  //             'Content-Type': 'application/json'
  //           },
  //           data: {
  //             language_id: 52,
  //             source_code:code,
  //             stdin: ''
  //           }
  //         };
          
  //         try {
  //           const response = await axios.request(options);
  //           console.log(response.data);
  //           setToken(response.data.token);
  //         } catch (error) {
  //           console.error(error);
  //         }
  //       }

  //       submitCode();
        
  //  },[permission]);

  //  useEffect(() => {
  //   const getResult = async (token) => {
  //     const options = {
  //       method: 'GET',
  //       url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
  //       params: {
  //         base64_encoded: 'true',
  //         fields: '*'
  //       },
  //       headers: {
  //         'x-rapidapi-key': '0097f5b453msh06fb2661a86322ep12315ajsnd8bbb6763027',
  //         'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
  //       }
  //     };
  
  //     try {
  //       const response = await axios.request(options);
  //       console.log(response.data);
  
  //       if (response.data.status.description === "Processing") {
  //         // Use a function reference for setTimeout
  //         setTimeout(() => getResult(token), 2000);
  //       } else {
  //         console.log("Final result:",atob(response.data.stdout));
  //         setResponse(response.data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching result:", error);
  //     }
  //   };
  
  //   if (token && code.length > 0) {
  //     getResult(token);
  //   }
  // }, [token]);
  
  const handleEditorChange = (value) => {
    setCode(value);
  };

  const hoverableComponent = () => {
    return (
      <div
        style={{
          padding: "10px",
          display: "grid",
          top:'150px',
          gridTemplateColumns: "1fr 1fr 1fr",
          zIndex: "3",
          position: "absolute",
          width: "30vw",
          height: "30vh",
          border: "1px solid gray",
          backgroundColor: "#333434",
          borderRadius: "5px",
          transition: "ease-in",
        }}
      >
        {languages.map((val, idx) => (
          <span
            style={{
              cursor: "pointer",
              padding: "5px",
              transition: "background-color 0.3s",
            }}
            onClick={() => setLanguage(val)}
            key={idx}
          >
            {val}
          </span>
        ))}
      </div>
    );
  };

  return (
   
    <div 
      style={{
        display: "flex",
        flexDirection: "column",
        height: "90vh", // Full available height minus some padding
        backgroundColor: "#272728",
        borderRadius: "10px",
        overflow: "hidden", // Ensure no overflow issues
      }}
    >
      {/* Header */}
      <div 
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#333434",
          borderBottom: "1px solid gray",
        }}
      >
        <span style={{ width: "28px", height: "28px", display: "inline-flex" }}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            style={{ width: "20px", color: "#26e408" }}
            data-icon="code"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path
              fill="currentColor"
              d="M399.1 1.1c-12.7-3.9-26.1 3.1-30 15.8l-144 464c-3.9 12.7 3.1 26.1 15.8 30s26.1-3.1 30-15.8l144-464c3.9-12.7-3.1-26.1-15.8-30zm71.4 118.5c-9.1 9.7-8.6 24.9 1.1 33.9L580.9 256 471.6 358.5c-9.7 9.1-10.2 24.3-1.1 33.9s24.3 10.2 33.9 1.1l128-120c4.8-4.5 7.6-10.9 7.6-17.5s-2.7-13-7.6-17.5l-128-120c-9.7-9.1-24.9-8.6-33.9 1.1zm-301 0c-9.1-9.7-24.3-10.2-33.9-1.1l-128 120C2.7 243 0 249.4 0 256s2.7 13 7.6 17.5l128 120c9.7 9.1 24.9 8.6 33.9-1.1s8.6-24.9-1.1-33.9L59.1 256 168.4 153.5c9.7-9.1 10.2-24.3 1.1-33.9z"
            ></path>
          </svg>
        </span>
        <strong style={{ fontSize: "large", marginLeft: "10px" }}>Code</strong>
      </div>

      {/* Toolbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          borderBottom: "1px solid gray",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: "small" }}>{language}</span>&nbsp;
          {leftLogo.map((val, idx) => (
            <span
              key={idx}
              onClick={idx === 0 ? () => setShow(!show) : () => null}
              style={{
                display: "inline-flex",
                objectFit: "contain",
                width: "1vw",
                cursor: "pointer",
              }}
            >
              {val}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: "14px" }}>
          {Logo.map((val, idx) => (
            <span
              key={idx}
              style={{
                cursor: "pointer",
                display: "inline-flex",
                objectFit: "contain",
                width: "1vw",
                height: "2.5vh",
              }}
            >
              {val}
            </span>
          ))}
        </div>
      </div>

      {/* Hoverable Component */}
      {show && hoverableComponent()}

      {/* Editor */}
      <div style={{ flex: 1, overflow: "hidden" }}>
        <Editor
          theme="vs-dark"
          language={language}
          value={code}
          onChange={handleEditorChange}
          options={{ automaticLayout: true }}
        />
      </div>
    </div>
    
  );
}


