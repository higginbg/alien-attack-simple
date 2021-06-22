import { useEffect, useState } from 'react';

import { getRandomNumber } from './utils';
import Title from './components/Title';
import HealthBar from './components/HealthBar';
import Buttons from './components/Buttons';

import './App.scss';

const App = () => {
  const [alienHealth, setAlienHealth] = useState(100);
  const [playerHealth, setPlayerHealth] = useState(100);
  const [gameOver, setGameOver] = useState(false);
  
  const alienAttack = () => { 
    setPlayerHealth(prev => {
      const attackValue = getRandomNumber(5, 12);
      const updatedPlayerHealth = prev - attackValue < 0 ? 0 : prev - attackValue;
      return updatedPlayerHealth;
    });
  };
  
  const recharge = () => {
    setPlayerHealth(prev => {
      const healPoints = getRandomNumber(7, 14);
      const updatedPlayerHealth = prev + healPoints > 100 ? 100 : prev + healPoints;
      return updatedPlayerHealth;
    });
    
    alienAttack();
  };

  const attack = () => {    
    setAlienHealth(prev => {
      const attackValue = getRandomNumber(3, 10);
      const updatedAlienHealth = prev - attackValue < 0 ? 0 : prev - attackValue;
      return updatedAlienHealth;
    });
    
    alienAttack();
  };
  
  const reset = () => {
    setPlayerHealth(100);
    setAlienHealth(100);
    setGameOver(false);
  };

  useEffect(() => {
    if (playerHealth === 0 || alienHealth === 0) {
      setGameOver(true);
    }
  }, [playerHealth, alienHealth]);

  let message;
  if (playerHealth === 0 && alienHealth === 0) {
    message = <p style={{ color: 'white' }}>Mutual<br />destruction!</p>;
  } else if (playerHealth === 0) {
    message = <p style={{ color: 'red' }}>Game over!</p>;
  } else if (alienHealth === 0) {
    message = <p style={{ color: 'green' }}>You won!</p>;
  }

  return (
    <div id='wrapper'>
      <div>
        <Title />

        <div id='container'>
          <div id='message'>
            {message}
          </div>
          
          <div id='screen'>
            <HealthBar health={alienHealth} type='alien' />

            {alienHealth > 0 && (
              <div id='alien'>
                👾
              </div>
            )}

            <HealthBar health={playerHealth} type='player' />
          </div>

          <Buttons
            attack={attack}
            recharge={recharge}
            reset={reset}
            attackDisabled={gameOver}
            rechargeDisabled={playerHealth === 100 || gameOver}
            resetDisabled={playerHealth === 100 && alienHealth === 100}
            gameOver={gameOver}
          />

        </div>
      </div>
    </div>
  );
}

export default App;
