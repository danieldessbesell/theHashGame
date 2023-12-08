import React, { useState } from "react";
import styles from "../../styles/colors";
import Header from "../../components/Header";
import PlayerCard from "../../components/PlayerCard";
import VictoryCard from "../../components/VictoryCard";
import verifyRule1 from "../../rules/rule1";
import verifyRule2 from "../../rules/rule2";
import verifyRule3 from "../../rules/rule3";
import verifyRule4 from "../../rules/rule4";


export default function Hash() {
  const [values, setValues] = useState([
    ['','',''],
    ['','',''],
    ['','',''],
  ]);
  const value = ['X', 'O'];
  const [player, setPlayer] = useState(0);
  const [playerWin, setPlayerWin] = useState(undefined);
  const [themeSelect, setThemeSelect] = useState('dark');

  function handleChangeTheme() {
    if (themeSelect === 'dark') {
      setThemeSelect('light');
    } else {
      setThemeSelect('dark');
    }
  }
  
  function handleClick(x,y){
    values[x][y]=value[player];
    if (player === 0){
      setPlayer(1);
    } else {
      setPlayer(0);
    }
    const rulesResult = [];
    rulesResult.push(verifyRule1(values[x]));
    rulesResult.push(verifyRule2(y, values));
    rulesResult.push(verifyRule3(values));
    rulesResult.push(verifyRule4(values));
      
    if (rulesResult.find((x)=>x===true)){
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
        <Header themeSelect={themeSelect} />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px', marginBottom: '16px'}}>
          <PlayerCard
            bgColor={ player === 0 ? styles[themeSelect].bg1 : styles[themeSelect].bg2} 
            player="Player 1"
            playerValue={value[0]}
          />
          <PlayerCard
            bgColor={ player === 1 ? styles[themeSelect].bg1 : styles[themeSelect].bg2} 
            player="Player 2"
            playerValue={value[1]}
            marginLeft={16}
          />
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
          {(playerWin === 0 || playerWin === 1) && (
            <VictoryCard
              playerWin={playerWin} 
              themeSelect={themeSelect}
            />
          )}
        </div>
        <div style={{marginTop: 10, textAlign: 'center'}}>
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
        <div style={{marginTop: 10, textAlign: 'center'}}>
          <button 
            onClick={()=>{ handleChangeTheme(); }}
            style={{ 
              width: '75vw', 
              height: '45px', 
              maxWidth: '600px',
              borderRadius: '5px',
              backgroundColor: styles[themeSelect].bg1,
              color: styles[themeSelect].fontColor,
            }}
          >
            Theme: {themeSelect.toUpperCase()}
          </button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h6>
            Developed by Daniel Dessbesell - 2023
          </h6>
        </div>
      </div>
  )
}