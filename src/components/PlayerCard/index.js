import React from "react";

export default function PlayerCard({
  bgColor='#000000', 
  player='Player', 
  playerValue='X',
  marginLeft = 0
}){
  return (
    <div
      style={{
        width: '30vw',
        maxWidth: '250px',
        borderRadius: '8px', 
        padding: '16px',
        backgroundColor: bgColor,
        marginLeft: marginLeft,
      }}
    >
      <h5>
        {`${player}: ${playerValue}`}
      </h5>
    </div>
  )
}