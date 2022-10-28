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
        (() => {
          if (time === 1 || time.toString().slice(-2) !== '11' && time.toString().slice(-1) === '1') {
            return 'секунда'
          }
          else if (time === 2 || time.toString().slice(-2) !== '12' && time.toString().slice(-1) === '2') {
            return 'секунды'
          }
          else if (time === 3 || time.toString().slice(-2) !== '13' && time.toString().slice(-1) === '3') {
            return 'секунды'
          }
          else if (time === 4 || time.toString().slice(-2) !== '14' && time.toString().slice(-1) === '4') {
            return 'секунды'
          }
          else {
            return 'секунд'
          }
        })()
      }</h3>
    </div>
  )
}

export default App