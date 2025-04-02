import{d as a,m as l,j as t,R as g}from"./index-vEfM4k_Q.js";import{L as i,W as n,T as x,M as w}from"./LocaleService-C19YxyPP.js";import{S as $}from"./link-DMm59mZN.js";var f=(e=>(e.BOLD="bold",e.NORMAL="normal",e))(f||{});const y="INTRO",v=a.section`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  max-width: 95vw;
  margin: 2rem auto;

  @media screen and (min-width: ${i}px) {
    flex-direction: ${e=>e.$isRight&&"row-reverse"};
    width: 85vw;
    margin: 3.25rem auto 14%;
  }

  @media screen and (min-width: ${i}px) and (max-width: ${i}px) {
    margin-bottom: 10%;
  }

  @media screen and (width >= ${n}px) {
    margin-bottom: 10%;
  }
`,b=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 2rem 1.5rem 4rem 1.5rem;
  border-radius: 5px;
  background-color: ${e=>e.theme.colors.darkGray.hexa};

  @media screen and (width > ${x}px) {
    align-items: ${e=>e.$isRight?"flex-end":"flex-start"};
  }

  @media screen and (width > ${i}px) {
    width: 65%;
    padding: 3.5rem 2rem 6.5rem 2rem;
    border-radius: 10px;
    clip-path: ${e=>e.$isRight?"polygon(5% 0%, 100% 0, 100% 100%, 0% 100%)":"polygon(0 0, 100% 0%, 95% 100%, 0% 100%)"};
  }
`,h=l`
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
`,u=l`
  0% {
    opacity: 0;
    filter: grayscale(100%);
  }
  50% {
    transform: scale(1.2);
    filter: grayscale(100%);
}
`,j=a.p`
  font-family: SEATBCN-Condensed, sans-serif;
  font-weight: 500;
  color: ${e=>e.theme.colors.primaryGreen.hexa};
  font-size: clamp(1.2rem, 2.9vw, 5rem);
  animation: 2s ${h} ease-in-out;
  margin: 0;
`,R=a.p`
  font-family: SEATBCN-Condensed, sans-serif;
  font-weight: 350;
  color: ${e=>e.theme.colors.primaryGreen.hexa};
  font-size: clamp(1rem, 2.1vw, 4.5rem);
  margin: 1vw 0;
  animation: 2s ${h} ease-in-out;
`,C=a.p`
  color: ${e=>e.theme.colors.white.hexa};
  text-align: left;
  font-size: clamp(12px, 1.3vw, 3rem);
  line-height: clamp(17px, 1.6vw, 3.6rem);
  animation: 2s ${h} ease-in-out;

  @media screen and (width > ${x}px) {
    text-align: ${e=>e.$isRight?"right":"left"};
  }

  @media screen and (width >= ${i}px) {
    width: 32vw;
  }

  span {
    &.bold {
      font-family: SEATBCN-CondensedMedium, sans-serif;
      font-weight: 500;
    }
    &.normal {
      font-weight: 400;
    }
  }
`,E=a.span`
  display: flex;
  margin-bottom: 2rem;
`,L=a.div`
  display: flex;
  margin: auto;
  width: 85vw;
  gap: 2vw;
  margin-top: -2.5em;
  img {
    width: 100%;
    height: 150px;
    display: block;
    object-fit: cover;
    object-position: center;
    border-radius: 5px;
  }

  @media screen and (min-width: ${w}px) and (max-width: ${i}px) and (orientation: landscape) {
    width: 90vw;
    img {
      height: 250px;
    }
  }

  @media screen and (min-width: ${i}px) {
    position: absolute;
    clip-path: ${e=>e.$isRight?"polygon(0 0, 54% 0, 50% 100%, 0% 100%)":"polygon(5% 0%, 100% 0, 100% 100%, 0% 100%)"};
    margin-top: 4rem;
    left: ${e=>e.$isRight?"0":"39vw"};
    img {
      height: 30em;
      max-height: 600px;
      &.twice {
        width: 26%;
      }
      &.single {
        width: 54%;
      }
      animation: ${u} 2000ms cubic-bezier(0.9, 0.7, 0.5, 0.9);
    }
  }

  @media screen and (width: ${n}px) {
    img {
      height: 600px;
    }
  }

  @media screen and (min-width: ${i}px) and (max-width: ${i}px) {
    margin-top: 2.5em;
    img {
      height: 20em;

      &.single {
        width: 51%;
      }
    }
  }

  @media screen and (min-width: ${n+1}px) {
    img {
      height: max-content;
      max-height: 1200px;
    }
  }
`,k=l`
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
`,S=a.div`
  position: relative;
  margin-top: 1vh;
  animation: 2s ${k} ease-in-out;
`,p=a.a`
  display: block;
  width: fit-content;
  padding: 14px 1rem;
  text-decoration: none;
  background: ${e=>e.theme.colors.primaryGreen.hexa};
  font-family: SEATBCN-Condensed, sans-serif;
  font-weight: 500;
  text-align: center;
  line-height: 100%;
  color: black;
  font-size: clamp(14px, 1.2vw, 4rem);
  text-transform: uppercase;
  transition: all 0.35s;
  border: 2px solid transparent;

  @media screen and (width >= ${i}px) {
    padding: 20px 54px;
    &:hover {
      width: 200px;
      border: 2px solid ${e=>e.theme.colors.primaryGreen.hexa};
      background: transparent;
      color: ${e=>e.theme.colors.primaryGreen.hexa};
    }
  }

  @media screen and (width > ${n}px) {
    padding: 1em 2em;
    &:hover {
      border: 3px solid ${e=>e.theme.colors.primaryGreen.hexa};
      width: 350px;
    }
  }
`,T=a.div`
  width: 50px;
  height: 50px;
  border: 2px solid transparent;
  position: absolute;
  transform: rotate(45deg);
  right: 0;
  top: 0;
  z-index: -1;
  transition: all 0.35s;

  @media screen and (width >= ${i}px) {
    svg {
      width: 30px;
      position: absolute;
      top: calc(50% - 15px);
      left: calc(50% - 15px);
      transform: rotate(-45deg);
      fill: ${e=>e.theme.colors.primaryGreen.hexa};
      transition: all 0.35s;
    }
    ${p}:hover + & {
      border: 2px solid ${e=>e.theme.colors.primaryGreen.hexa};
      ${e=>e.$isRight?"left: -22%;":"right: -22%;"}
    }
  }

  @media screen and (width > ${n}px) {
    width: 3.5vw;
    height: 3.5vw;
    ${p}:hover + & {
      border: 3px solid ${e=>e.theme.colors.primaryGreen.hexa};
      ${e=>e.$isRight?"left: -5vw;":"right: -5vw;"}
    }
  }
`,G=({to:e,text:o,isRight:s=!1})=>t.jsxs(S,{children:[t.jsx(p,{href:e,children:o}),t.jsx(T,{$isRight:s,children:t.jsx($,{})})]}),A=({isRight:e=!1,title:o,subtitle:s,paragraph:c,link:d,image:m})=>t.jsxs(v,{$isRight:e,children:[t.jsxs(b,{$isRight:e,children:[t.jsx(j,{children:o}),t.jsx(R,{children:s}),t.jsx(C,{$isRight:e,children:!!c.length&&c.map(r=>t.jsxs(g.Fragment,{children:[t.jsx("span",{className:`${r.font}`,children:r.text}),r.key.includes(y)&&t.jsx(E,{})]},r.key))}),d&&t.jsx(G,{to:d.to,text:d.text,isRight:e})]}),t.jsx(L,{$isRight:e,children:!!m.length&&m.map(r=>t.jsx("img",{className:m.length===2?"twice":"single",src:r.src,alt:r.alt,loading:"lazy"},r.alt))})]});export{A as C,E,f as F,p as S,C as W,b as a,L as b,j as c};
