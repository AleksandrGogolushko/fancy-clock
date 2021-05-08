import React, { useEffect, useState } from 'react';
import './App.css';
import TimeElement from './component/timeElement';

function App(): React.ReactElement {
  
const [time,setTime] = useState(new Date());
  useEffect(() => {
    setInterval(()=> setTime(new Date()),1000)
  },[]);

  const h = time.getHours() < 10 ? `0${time.getHours()}`.split("") : String(time.getHours()).split("");
  const m = time.getMinutes() < 10 ? `0${time.getMinutes()}`.split("") : String(time.getMinutes()).split("");
  const s = time.getSeconds() < 10 ? `0${time.getSeconds()}`.split("") : String(time.getSeconds()).split("");

  // const hms = [String(time.getHours()).split(""), String(time.getMinutes()).split(""), String(time.getMinutes()).split("")]
  console.log(h,m,s)
  return (
    <div className="App">
      < TimeElement timeFirstNumber={h[0]} timeSecondNumber={h[1]} isHours />
      < TimeElement timeFirstNumber={m[0]} timeSecondNumber={m[1] }/>
      < TimeElement timeFirstNumber={s[0]} timeSecondNumber={s[1]} />
    </div>
  );
}

export default App;


