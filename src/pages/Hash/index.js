import React, { useState } from "react";
import styles from "../../styles/colors";


export default function Hash() {
  const [values, setValues] = useState([
    ['','',''],
    ['','',''],
    ['','',''],
  ]);
  const [value, setValue] = useState(['X', 'O']);
  const [player, setPlayer] = useState(0);
  const [playerWin, setPlayerWin] = useState(undefined);
  const [themeSelect, setThemeSelect] = useState('dark');

  function handleClick(x,y){
    values[x][y]=value[player];
    console.log('value[player] =>', value[player]);
    if (player === 0){
      setPlayer(1);
    } else {
      setPlayer(0);
    }
    verifyRule1(values[x]);
    verifyRule2(y);
    verifyRule3();
    verifyRule4();
  }

  function verifyRule1(line) { // Line Verify
    const aux = line[0];
    let count = 0;
    if (aux !== '') {
    line.forEach((item) => {
      if (item === aux) {
        count += 1;
      }
    });
  }
    if (count === 3) {
      setPlayerWin(player);
    }
  }

  function verifyRule2(col) { // Column Verify
    const aux = values[0][col];
    let count = 0;
    if (aux !== '') {
    values.forEach((item) => {
      item.forEach((subitem, index)=>{
        if (index === col){
          if (subitem === aux) {
            count += 1;
          }
        }
      })
      
    });
  }
    if (count === 3) {
      setPlayerWin(player);
    }
  }

  function verifyRule3() { // Diagonal 1 Verify
    const aux = values[0][0];
    let positionForVerify = 0;
    let count = 0;
    if (aux !== '') {

    values.forEach((item, x) => {
      item.forEach((subitem, y)=>{
        if ((x=== positionForVerify) && (y===positionForVerify)) {       
          if (subitem === aux) {
            count += 1;
          }    
          positionForVerify = positionForVerify + 1;   
        }         
      })
      
     });
    }
    if (count === 3) {
      setPlayerWin(player);
    }
  }

  function verifyRule4() { // Diagonal 2 Verify
    const aux = values[0][2];
    let count = 0;
    if (aux !== '') {
      if (aux === values[0][2]){
        count = count + 1;
      }
      if (aux === values[1][1]){
        count = count + 1;
      }
      if (aux === values[2][0]){
        count = count + 1;
      }
    }
    console.log('count => ', count);
    if (count === 3) {
      setPlayerWin(player);
    }
  }

  function resetGame() {
    setPlayerWin(undefined);
    setPlayer(0);
    setValues([
      ['','',''],
      ['','',''],
      ['','',''],
    ]);
  }

  return (
      <div
        style={{
          backgroundColor: styles[themeSelect].bg3,
          color: styles[themeSelect].fontColor,
          height: '100vh',
        }}
      >
        <div 
        style={{
          textAlign: 'center',
          backgroundColor: styles[themeSelect].bg1, // '#2196f3',
          width: '100vw',
          height: '64px',
          margin: 0,
          padding: 16,
          boxSizing: 'border-box',
        }}
        >
          <h1 style={{margin: 0}} >
            The Hash Game
          </h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px', marginBottom: '16px'}}>
          <div
            style={{
              width: '30vw',
              maxWidth: '250px',
              borderRadius: '8px', 
              padding: '16px',
              backgroundColor: player === 0 ? styles[themeSelect].bg1 : styles[themeSelect].bg2,
              marginLeft: 0,
            }}
          >
            <h5>
            {player === 0 && ('> ')}
              Player 1: {value[0]}
            </h5>
          </div>
          <div
            style={{
              width: '30vw',
              maxWidth: '250px',
              borderRadius: '8px',
              padding: '16px',
              backgroundColor: player === 1 ? styles[themeSelect].bg1 : styles[themeSelect].bg2,
              marginLeft: 10,
            }}
          >
            <h5>
              {player === 1 && ('> ')}
              Player 2: {value[1]}
            </h5>
          </div>
        </div>
        <div>
          {values.map((line,x)=>(
            <div style={{ display: 'flex', justifyContent:'center' }}>
              {line.map((col,y)=>(
                <button 
                  onClick={()=>{handleClick(x,y)}}
                  style={{
                    width: '25vw',
                    height:'25vw',
                    backgroundColor: styles[themeSelect].bg1,
                    color: styles[themeSelect].fontColor,
                    cursor: "pointer",
                    fontSize: '7vw',
                    maxWidth: '200px',
                    maxHeight: '200px',
                  }}
                  disabled={(col !== '') || (playerWin === 0) || (playerWin === 1)}
                >
                  {col}
                </button>
              ))}
            </div>
          ))}
          {playerWin === 0 && (
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
          )}
        </div>
        <div style={{marginTop: 10, textAlign: 'center'}}>
        {/* <hr style={{ width: '200px'}}/> */}
          <button 
            onClick={()=>{ resetGame(); }}
            style={{ 
              width: '75vw', 
              height: '45px', 
              maxWidth: '600px',
              borderRadius: '5px',
              backgroundColor: styles[themeSelect].bg1,
              color: styles[themeSelect].fontColor,
            }}
          >
            Reset Game
          </button>
        </div>
        
      </div>
  )
}