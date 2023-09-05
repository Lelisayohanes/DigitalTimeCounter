import  { useEffect, useState } from 'react';
import '../Styles/DigitalClock.css';

function DigitalClock() {
  const [time, setTime] = useState(updateDigitalClock());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(updateDigitalClock());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function updateDigitalClock() {
    let date = new Date(),
      hour = date.getHours(),
      min = date.getMinutes(),
      sec = date.getSeconds();

    let d;
    d = hour < 12 ? "AM" : "PM";
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour === 0 ? 12 : hour;

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    return {
      hour,
      min,
      sec,
      amPm: d,
    };
  }

  return (
    <section>
      <div className="digital-container">
        <div className="digital-time">
          <div className="time-colon">
            <div className="time-text">
              <span className="num hour_num ">{time.hour}</span>
              <span className="text">Hours</span>
            </div>
            <span className="colon">:</span>
          </div>
          <div className="time-colon">
            <div className="time-text">
              <span className="num min_num">{time.min}</span>
              <span className="text">Minutes</span>
            </div>
            <span className="colon">:</span>
          </div>
          <div className="time-colon">
            <div className="time-text">
              <span className="num sec_num">{time.sec}</span>
              <span className="text">Seconds</span>
            </div>
            <span className="am_pm">{time.amPm}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DigitalClock;
