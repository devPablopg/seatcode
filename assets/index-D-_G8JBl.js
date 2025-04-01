import{d as e,m as n,j as s}from"./index-DLFp2ZYQ.js";const o=n`
  0% {
    opacity: 0;
    transform: translateY(80%);
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`,r=e.p`
  font-family: SEATBCN-Condensed, sans-serif;
  font-size: clamp(12px, 1.9vw, 4vw);
  line-height: clamp(16px, 2.3vw, 4.8vw);
  color: ${t=>t.theme.colors.white.hexa};
  font-weight: 350;
  font-style: italic;
  text-align: center;
  margin: 2rem 9.7vw 2rem 9.7vw;
  animation: 2s ${o} ease-in-out;
`,m=({summary:t})=>t.map(a=>s.jsx(r,{children:a},a.slice(0,9)));export{m as S,r as W};
