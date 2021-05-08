import React, { useEffect, useState } from "react";
import "./timeElement.css";

interface TimeElementProps {
  timeFirstNumber?: string;
  timeSecondNumber?: string;
  classes?: string;
  isHours?: boolean;
}

function TimeElement(props: TimeElementProps): React.ReactElement {
  const [isFirstNumberChange, setFirstChangeValue] = useState(0);
  const [isSecondNumberChange, setSecondChangeValue] = useState(0);
  const [isFirstNumberReset, setFirstResetValue] = useState(false);
  const [isSecondNumberReset, setSecondResetValue] = useState(false);

//   const calcTransition = (param: number, isFirst?: boolean): void => {
//      if(isFirst){
//          {parseInt(props.timeFirstNumber!) === 0
//      }
//       isFirst ? setFirstChangeValue(isFirstNumberChange + 60) : setSecondChangeValue(isSecondNumberChange + 60);
//   };

//   useEffect(() => {
//     calcTransition(isFirstNumberChange, true)
//   }, [props.timeFirstNumber]);

//   useEffect(() => {
//     calcTransition(isSecondNumberChange)
//   }, [props.timeSecondNumber]);

  const avaibleNumber = props.isHours
    ? [
        [0, 1, 2],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ]
    : [
        [0, 1, 2, 3, 4, 5],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ];
  const isNumberActive = (number: string, timeNumber: string | undefined): boolean =>
    number === timeNumber;
  console.log(isFirstNumberChange, isSecondNumberChange)
  return (
    <div className={`timeElement`}>
      <div
        className="firstNumber"
        style={{ transform: `translateY(-${parseInt(props.timeFirstNumber!) * 45}px)` }}
      >
        {avaibleNumber[0].map((e, i) => (
          <span
            className={`${
              isNumberActive(String(e), props.timeFirstNumber) ? "isActive" : ""
            }`}
            key={i + "first"}
          >
            {e}
          </span>
        ))}
      </div>
      <div
        className="secondNumber"
        style={{ transform: `translateY(-${parseInt(props.timeSecondNumber!) * 45}px)` }}
      >
        {avaibleNumber[1].map((e, i) => (
          <span
            className={`${
              isNumberActive(String(e), props.timeSecondNumber) ? "isActive" : ""
            }`}
            key={i + "second"}
          >
            {e}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TimeElement;
