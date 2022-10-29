import React, { useState, useEffect } from 'react'

const App = () => {
  const [timerIsOn, setTimerIsOn] = useState(0);
  const [time, setTime] = useState(0);
  const handleClick = () => {
    if (timerIsOn) {
      clearInterval(timerIsOn)
      setTimerIsOn(0)
      return
    }
    const timer = setInterval(() => {
      setTime(prevTime => prevTime + 1)
    }, 1000)
    setTimerIsOn(timer);
  }
  useEffect( () => {
    timerIsOn ? document.title = 'Таймер включен' : document.title = 'Таймер выключен'
  })
  return (
    <div>
      <div>
        <span>Запустить таймер: </span>
        <button
        onClick={handleClick}
        >{timerIsOn ? 'Выключить' : 'Включить'}</button>
      </div>
      <h3>Прошло: {time} {
        (number => {
          let n = Math.abs(number);
          n %= 100;
          if (n >= 5 && n <= 20) {
            return 'секунд';
          }
          n %= 10;
          if (n === 1) {
            return 'секунда';
          }
          if (n >= 2 && n <= 4) {
            return 'секунды';
          }
          return 'секунд';
        })(time)
      }</h3>
    </div>
  )
}

export default App