import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <div className='head'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1000'
          height='275'
          viewBox='0 0 803 275'
        >
          <defs>
            <filter
              id='Line_3'
              x='0'
              y='140'
              width='818'
              height='53'
              filterUnits='userSpaceOnUse'
            >
              <feOffset input='SourceAlpha' />
              <feGaussianBlur stdDeviation='7.5' result='blur' />
              <feFlood flood-color='#d35400' />
              <feComposite operator='in' in2='blur' />
              <feComposite in='SourceGraphic' />
            </filter>
          </defs>
          <g id='Group_1' data-name='Group 1' transform='translate(-228 -75)'>
            <text
              id='CSS_Test_Labs'
              data-name='CSS Test Labs'
              class='cls-1'
              transform='translate(229 76)'
            >
              <tspan id='css' x='0' y='140'>
                CSS
              </tspan>
              <tspan id='test' x='260'>
                Test
              </tspan>
              <tspan id='labs'>Labs</tspan>
            </text>
            <g class='cls-3' transform='matrix(1, 0, 0, 1, 209, 75)'>
              <line
                id='Line_3-2'
                data-name='Line 3'
                class='cls-2'
                x2='765'
                transform='translate(26.5 166.5)'
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default App;
