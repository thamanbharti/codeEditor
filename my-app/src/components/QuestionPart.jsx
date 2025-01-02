import React, { useState } from 'react';
import logo from '../utillity/questionPartlogo';

export default function QuestionPart() {
  const arr = logo;
  const [content, setContent] = useState("Description");

  return (
    <div
      style={{
        border: 'solid',
        borderWidth: '1px',
        scrollbarWidth: 'none',
        resize: 'horizontal',
        overflow: 'auto',
        minWidth: '100px',
        width: '600px',
        maxWidth: '1400px',
        backgroundColor: '#272728',
        borderColor: 'white',
        height: '90vh',
        borderRadius: '10px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top Header Section for the Tabs */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#333434',
          gap: '10px',
          height: '3vh',
          padding: '5px',
          paddingTop: '10px',
          alignItems: 'center',
        }}
      >
        {arr.map((val, idx) => (
          <span
            onClick={() => setContent(val.name)}
            key={idx}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              paddingLeft: '10px',
              cursor: 'pointer',
            }}
          >
            {val.logo}
            {val.name}
          </span>
        ))}
      </div>

      {/* Question Content Section */}
      

      {
         content==='Description'? <div
          style={{
            flex: 1,
            padding: '10px',
            color: 'white',
          }}
        >
          <h2>{content === "Description" ? "Minimum cost for tickets" : content}</h2>
          <span
            style={{
              color: 'crimson',
              display: 'inline-block',
              backgroundColor: '#333434',
              borderRadius: '50px',
              padding: '5px 10px',
              textAlign: 'center',
            }}
          >
            Medium
          </span>
        </div> :<div style={{marginLeft:'10px'}}>
         <h2>Test Result</h2>
         <h3>Test Cases</h3>
         <div style={{display:"flex",flexDirection:'column',gap:'10px'}}>
            <div style={{padding:'5px',borderRadius:'5px',backgroundColor:'#333434',width:'max-content'}}>case 1</div>
            <div style={{padding:'5px',borderRadius:'5px',backgroundColor:'#333434',width:'max-content'}}>output 1</div>
         </div>
      </div>
      }

      

      {/* Constraints Section at the Bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
          padding: '10px',
          backgroundColor: '#333434',
          borderTop: '1px solid white',
          color: 'white',
          
        }}
      >
        <strong>Constraints</strong>
      </div>
    </div>
  );
}
