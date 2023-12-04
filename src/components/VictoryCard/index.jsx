import React from "react";
import styles from "../../styles/colors";

export default function VictoryCard({themeSelect, playerWin}) {
  return (
    <div
    style={{
      position: 'fixed',
      top: '0px',
      left: '0px',
      width: '100vw',
      height: '50vh',
      display: 'flex',
      alignItems: "end",
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        padding: '16px',
        backgroundColor: styles[themeSelect].success,
        borderRadius: '8px',
        textAlign: 'center',
      }}
    >
      <h2>
        {`Congratulation Player ${playerWin+1}`}
      </h2>
      <h2>
        You are the Winner!
      </h2>
    </div>
  </div> 
  )
}