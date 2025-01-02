import React, { useState } from "react";
import { leftsidelogo, middlesidelogo, rightsidelogo } from "../utillity/logo";

export default function Navbar({sendData}) {
  const Leftsidelogo = leftsidelogo;
  const Middlesidelogo = middlesidelogo;
  const Rightsidelogo = rightsidelogo;
  // Combine hover states for both Left and Middle parts
  const [hoverStates, setHoverStates] = useState({
    left: new Array(Leftsidelogo.length).fill(false),
    middle: new Array(Middlesidelogo.length).fill(false),
    right:new Array(Rightsidelogo.length).fill(false)
  });

  const [dropDownValue, setDropDown] = useState({
    left:['Leetcode','View problems',null,'Prev','Next','Choose random'],
    middle: ['Upgrade to premium','Run code','Submit code','Start timer','Take notes'],
    right:['Back to old version','Settings','Problem of the day','Ugrade to premium','Profile']
  })
  

  const [isSending,sendHandler]=useState(false);
  
   const sendDataHandler=()=>{
      
        sendHandler(!isSending);
        sendData(isSending);
       
   }

   const hoverableComponent = (idx, part) => {
    return (
      <div
        style={{
          position: "absolute",
          zIndex: 2,
          marginTop: "90px",
          backgroundColor: "#333",
          color: "white",
          padding: "5px 10px", // Compact padding
          borderRadius: "4px", // Slightly smaller border radius
          fontSize: "12px", // Reduced font size for compactness
          maxWidth: "max-content", // Limit the width
          overflow: "hidden", // Prevent overflow
          textOverflow: "ellipsis", // Ellipsis for overflow text
          whiteSpace: "nowrap", // Single-line display
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)", // Subtle shadow for visibility
        
          transform: "translateY(-10px)",
          transition: "opacity 0.3s ease, transform 0.3s ease", 
        }}
      >
        {dropDownValue[part][idx]}
      </div>
    );
  };
  

  const handleHover = (section, idx, state) => {
    setHoverStates((prev) => ({
      ...prev,
      [section]: prev[section].map((val, i) => (i === idx ? state : val)),
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "300px",
        color: "white",
        paddingTop: "15px",
        paddingLeft: "15px",
      }}
    >
      {/* Left Side Logo */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "25px",
          flexWrap: "wrap",
          paddingLeft: "15px",
        }}
      >
        {Leftsidelogo.map((val, idx) => (
          <span
            key={idx}
            onMouseEnter={() => handleHover("left", idx, true)}
            onMouseLeave={() => handleHover("left", idx, false)}
            style={{
              width: "18px",
              height: "18px",
              position: "relative",
              display: "inline-flex",
              paddingRight: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {val}
            {hoverStates.left[idx] && hoverableComponent(idx,"left")}
          </span>
        ))}
      </div>

      {/* Middle Side Logo */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2px",
          flexWrap: "wrap",
          paddingLeft: "15px",
        }}
      >
        {Middlesidelogo.map((val, idx) => (
          <span
            key={idx}
            onMouseEnter={() => handleHover("middle", idx, true)}
            onMouseLeave={() => handleHover("middle", idx, false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#272728",
              padding: "5.5px",
              borderWidth: "2px",
              borderRadius: "5px",
              position: "relative",
            }}
          >
            {val}{" "}
            {idx === 1 && <strong onClick={()=>sendDataHandler()} style={{cursor:'pointer'}}>&nbsp;&nbsp;Run</strong>}{" "}
            {idx === 2 && (
              <strong style={{ color: "#26e408" }}>&nbsp;&nbsp;Submit</strong>
            )}
            {hoverStates.middle[idx] && hoverableComponent(idx,"middle")}
          </span>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "25px",
          flexWrap: "wrap",
          paddingLeft: "15px",
        }}
      >
        {Rightsidelogo.map((val, idx) => (
  <span
    key={idx}
    onMouseEnter={() => handleHover("right", idx, true)}
    onMouseLeave={() => handleHover("right", idx, false)}
    style={{
      width: "18px",
      height: "18px",
      position: "relative",
      cursor:'pointer',
      display: "inline-flex",
      objectFit: 'contain',
      paddingRight: "10px",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {idx === Rightsidelogo.length - 1 ? (
      // Apply circular style to the img tag for the last index (profile image)
      React.cloneElement(val, {
        style: {
          width: "24px",   // Adjust size as needed
          height: "24px",  // Adjust size as needed
          borderRadius: "50%",  // Makes the image circular
          objectFit: "cover",    // Ensures image fits well inside the circle
        }
      })
    ) : (
      val // For other indices, just render the icon or element
    )}
    {hoverStates.right[idx] && hoverableComponent(idx,"right")}
  </span>
))}


      </div>
    </div>
  );
}
