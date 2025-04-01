import{d as n,m as p,a as c,j as t}from"./index-DLFp2ZYQ.js";import{T as I,M as O,L as r,a as R,W as N}from"./LocaleService-C19YxyPP.js";import{R as m}from"./index-COZvynDY.js";const A=n.section`
  height: 33vh;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: ${I}px) and (max-width: ${r-1}px) {
    height: 46vh;
  }
  @media screen and (min-width: ${O}px) and (max-width: ${r-1}px) and (orientation: landscape) {
    height: 80vh;
  }
  @media screen and (width = ${r}px) {
    height: 50vh;
  }
  @media screen and (width > ${r}px) {
    height: 100vh;
  }
`,M=p`
  0%, 100% { 
    opacity: 1;
    transform: translate3d(40px, 0, 0);
    clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
  }
  20% { clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%); }
  30% { clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%); }
  40% { clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%); }
  50% { clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); }
  55% { clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%); }
  60% { clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%); }
  65% { clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%); }
  70% { clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%); }
  80% { clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%); }
  85% { clip-path: polygon(0 60%, 100% 60%, 100% 65%, 0 65%); }
  95% { clip-path: polygon(0 72%, 100% 72%, 100% 78%, 0 78%); }
`,L=p`
  0%, 100% { 
    opacity: 1;
    transform: translate3d(-10px, 0, 0);
    clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
  }
  10% { clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%); }
  15% { clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%); }
  17% { clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%); }
  19% { clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%); }
  33% { clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%); }
  35% { clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%); }
  40% { clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%); }
  45% { clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%); }
  49% { clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%); }
  50% { clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%); }
  55% { clip-path: polygon(0 15%, 100% 15%, 100% 35%, 0 35%); }
  60% { clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%); }
  70% { clip-path: polygon(0 65%, 100% 65%, 100% 60%, 0 60%); }
  80% { clip-path: polygon(0 80%, 100% 80%, 100% 85%, 0 85%); }
  90% { clip-path: polygon(0 55%, 100% 55%, 100% 65%, 0 65%); }
`,z=n.div`
  @keyframes fadeIn {
    0% {
      opacity: 0;
      filter: blur(20px);
      transform: scale(0.9);
    }
    50% {
      opacity: 0.5;
      filter: brightness(1) blur(10px);
    }
    100% {
      opacity: 1;
      filter: brightness(0.8) blur(5px);
      transform: scale(1);
    }
  }

  position: absolute;
  width: 100%;
  height: inherit;
  top: 0;
  left: 0;
  background-image: url("/src/assets/img/seat/hero-banner.webp");
  background-size: contain;
  background-position: right;
  overflow: hidden;
  will-change: transform, opacity, filter;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-repeat: no-repeat;
  z-index: -1;
  animation: fadeIn 3s ease;
  filter: brightness(0.7);

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: inherit;
    background-size: inherit;
    background-position: inherit;
    background-repeat: no-repeat;
    opacity: 0;
    pointer-events: none;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  &::before {
    animation: ${M} 15s infinite linear;
  }

  &::after {
    animation: ${L} 15s infinite linear;
  }
`,B=n.h1`
  @keyframes come2life {
    0% {
      transform: scale3d(0, 0, 1) rotate(0.02deg);
      opacity: 0;
      filter: blur(10px);
    }
    25% {
      transform: scale3d(1, 1, 1) rotate(0.02deg);
      opacity: 0.4;
      filter: blur(10px);
    }
    40% {
      opacity: 0.7;
      filter: blur(5px);
    }
    80% {
      opacity: 0.8;
    }
    100% {
      transform: scale3d(1, 1, 1) rotate(0.02deg);
      filter: blur(3px);
      opacity: 1;
    }
  }

  font-family: "SEATBCN-Condensed", sans-serif;
  font-size: clamp(36px, 7.6vw, 8vw);
  font-weight: 400;
  color: ${e=>e.theme.colors.white.hexa};
  height: fit-content;
  padding: 10vh 0 0 5vw;
  margin-bottom: 1rem;
  animation: come2life linear 3s;
  transform-origin: center center;
  filter: blur(1px);

  @media screen and (width >= ${r}px) {
    padding: 17vh 0 0 5vw;
    filter: blur(1px);
  }
`,P=n.h3`
  font-family: "SEATBCN-Condensed", sans-serif;
  font-weight: 350;
  font-style: italic;
  color: ${e=>e.theme.colors.primaryGreen.hexa};
  font-size: clamp(2rem, 5vw, 6vw);
  padding-left: 5vw;
  animation: come2life linear 4s;
  transform-origin: left center;
`,W=n.p`
  @keyframes delayedShow {
    to {
      visibility: visible;
    }
  }

  color: ${e=>e.theme.colors.white.hexa};
  font-size: clamp(12px, 2vw, 115px);
  line-height: clamp(14px, 2.4vw, 8.6rem);
  width: 20em;
  padding-left: 5vw;
  visibility: hidden;
  animation: 0s linear 1s forwards delayedShow;
`,H=n.nav`
  position: fixed;
  top: 0;
  z-index: 10000;
  width: 100vw;
  font-family: ${e=>e.theme.fontFamily.regular}, "Courier New",
    Courier, monospace, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  background-color: black;
`,U=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  height: 3rem;
  @media screen and (width >= ${r}px) {
    height: 7vh;
    align-items: unset;
  }
`,D=n.a`
  color: ${e=>e.theme.colors.white.hexa};
  padding: 0.5rem 1rem;
`,G=n.img`
  opacity: 1 !important;
  @media screen and (min-width: 1921px) {
    margin: 1rem;
    width: 6rem;
    height: 6rem;
  }
`,F=n.div`
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  opacity: 1 !important;
  transform: translateY(4%);
  @media screen and (width >= ${r}px) {
    width: 4%;
    height: 4%;
  }
`,X=n.svg`
  path {
    fill: none;
    stroke: white;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2px;
  }
`,_=n.div`
  height: calc(100vh - 3rem);
  align-items: center;
  display: flex;
  overflow: auto;
  position: absolute;
  text-align: left;
  width: 100vw;
  right: 0;
  transform: ${e=>e.$isOpen?"translateX(0)":"translateX(100%)"};
  top: 3rem;
  padding: 0;
  z-index: -1;
  backdrop-filter: blur(20px);
  opacity: 0.92;
  transition: transform 1s ease-in-out;
  @media screen and (width >= ${r}px) {
    transform: ${e=>e.$isOpen?"translateX(65%)":"translateX(100%)"};
  }
`,K=n.ul`
  height: auto;
  width: 100%;
  list-style-type: none;
  list-style-image: none;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: auto 0;
`,y=n.li`
  overflow: hidden;
  transition: height 0.4s cubic-bezier(0.77, 0, 0.18, 1);
  height: 6vh;
  font-family: ${e=>e.theme.fontFamily.medium}, sans-serif;
  font-weight: 500;

  @media screen and (min-width: ${O}px) and (max-width: ${r-1}px) and (orientation: landscape) {
    height: 8vh;
  }
`,v=n.a`
  position: relative;
  display: block;
  font-size: 1.777rem;
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
  @media screen and (width >= ${r}px) {
    font-size: 2vw;
    line-height: calc(2vw * 1.2);
  }

  span:hover {
    color: ${e=>e.theme.colors.primaryGreen.hexa};
  }

  ::after {
    content: "";
    position: absolute;
    transform: scaleX(0);
    height: 4%;
    top: 1.2em;
    left: 1rem;
    right: 15px;
    background-color: ${e=>e.theme.colors.primaryGreen.hexa};
    transform-origin: bottom center;
    transition: transform 0.25s ease-out;
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom center;
  }
`,b=n.span`
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  z-index: 1;
`;function q(e,i){c.useEffect(()=>{function o(a){e.current&&!e.current.contains(a.target)&&i()}return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[e,i])}const V={en:{home:"HOME",aboutus:"ABOUT US",oursolutions:"OUR SOLUTIONS",workwithus:"WORK WITH US",partnership:"PARTNERSHIP"}},j={...V[R.getLanguage()]},Y=()=>{const[e,i]=c.useState(!1),o=c.useRef(null);q(o,()=>i(!1));const a=()=>{i(!e)};return t.jsxs(H,{ref:o,children:[t.jsxs(U,{children:[t.jsx(D,{href:m.HOME,"aria-label":"fancy-toggle",children:t.jsx(G,{src:"src/assets/img/seat/SEATCODE_LogotipoV_RGB_Negativo.svg",alt:"logo"})}),t.jsx(F,{onClick:a,children:t.jsx(X,{viewBox:"0 0 70 70",xmlns:"http://www.w3.org/2000/svg",children:e?t.jsxs(t.Fragment,{children:[t.jsx("path",{id:"path-top",d:"M20,25c0,0,22,0,30,0c16,0,18.89,40.71-.15,21.75C38.7,35.65,19.9,16.8,19.9,16.8",style:{strokeDasharray:"30px, 88px",strokeDashoffset:"-81px"}}),t.jsx("path",{id:"path-bottom",d:"M19.9,46.98c0,0,18.8-18.85,29.95-29.95C68.89-1.92,66,38.78,50,38.78c-8,0-30,0-30,0",style:{strokeDasharray:"30px, 88.1px",strokeDashoffset:"-6px"}})]}):t.jsxs(t.Fragment,{children:[t.jsx("path",{id:"path-top",d:"M20,25h30"}),t.jsx("path",{id:"path-middle",d:"M20,35h30"}),t.jsx("path",{id:"path-bottom",d:"M20,45h30"})]})})})]}),t.jsx(_,{$isOpen:e,children:t.jsxs(K,{children:[t.jsx(y,{children:t.jsx(v,{href:m.HOME,children:t.jsx(b,{children:j.home})})}),t.jsx(y,{children:t.jsx(v,{href:m.ABOUT,children:t.jsx(b,{children:j.aboutus})})}),t.jsx(y,{children:t.jsx(v,{href:m.OURSOLUTIONS,children:t.jsx(b,{children:j.oursolutions})})}),t.jsx(y,{children:t.jsx(v,{href:m.WORKWITHUS,children:t.jsx(b,{children:j.workwithus})})}),t.jsx(y,{children:t.jsx(v,{href:m.PARTNERSHIP,children:t.jsx(b,{children:j.partnership})})})]})})]})},J=p`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`,Q=n.span`
  font-family: "SEATBCN-Condensed", sans-serif;
  font-size: 7.6vw;
  font-weight: 400;
  font-style: italic;
  color: ${e=>e.theme.colors.primaryGreen.hexa};
  white-space: nowrap;
  overflow: hidden;
  padding-left: 5vw;

  .cursor {
    animation: ${({$isBlinking:e})=>e?J:"none"} 0.9s infinite;
  }
`,Z=({animated:e})=>{const[i,o]=c.useState(""),[a,k]=c.useState(0),[f,g]=c.useState(!1),[S,x]=c.useState(!1);return c.useEffect(()=>{let l;return f?l=setTimeout(()=>{o(s=>s.slice(0,s.length-1))},100):l=setTimeout(()=>{i.length<e[a].length?o(s=>s+e[a][s.length]):(x(!0),setTimeout(()=>g(!0),1e3))},70),i===""&&f&&(g(!1),x(!1),k(s=>(s+1)%e.length)),()=>clearTimeout(l)},[i,f,a,e]),t.jsxs(Q,{$isBlinking:S,children:[i," ",t.jsx("span",{className:"cursor",children:"|"})]})},ee=n.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`,te=()=>{const e=c.useRef(null);return c.useEffect(()=>{const i=e.current;if(!i)return;const o=i.getContext("2d");i.width=i.clientWidth,i.height=i.clientHeight;const a=(l,s,h,u,w,C)=>{let d=l,E=s;const T=()=>{o&&(o.beginPath(),o.arc(d,E,h,0,Math.PI*2),o.fillStyle=C,o.fill())};return{draw:T,update:()=>{d+=u,E+=w,(d+h>i.width||d-h<0)&&(u=-u),(E+h>i.height||E-h<0)&&(w=-w),T()}}},k=[],f=40,g=["#a7f9ab"];for(let l=0;l<f;l++){const s=Math.random()*1.5+1,h=Math.random()*i.width,u=Math.random()*i.height,w=(Math.random()-.5)*2,C=(Math.random()-.5)*2,d=g[Math.floor(Math.random()*g.length)];k.push(a(h,u,s,w,C,d))}const S=()=>{o&&(o.clearRect(0,0,i.width,i.height),k.forEach(l=>l.update()),requestAnimationFrame(S))};S();const x=()=>{i.width=i.clientWidth,i.height=i.clientHeight};return window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x)}},[]),t.jsx(ee,{ref:e})},ie=p`
  to {
    transform: rotate(1turn);
  }
`,ne=p`
  to {
    transform: rotate(1turn);
  }
`,oe=n.h1`
  top: 55vw;
  right: 27vw;
  display: flex;
  justify-content: center;
  position: absolute;
  color: ${e=>e.theme.colors.primaryGreen.hexa};

  @media screen and (min-width: ${I}px) and (max-width: ${r-1}px) {
    top: 50vw;
    right: 30vw;
  }
  @media screen and (min-width: ${O}px) and (max-width: ${r-1}px) and (orientation: landscape) {
    top: 29vw;
    right: 19vw;
  }
  @media screen and (min-width: ${r}px) {
    top: 40vw;
    right: 25vw;
  }
  @media screen and (min-width: ${N}px) {
    top: 40vw;
    right: 25vw;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
    top: -2vw;
    left: 2vw;
    width: 6vw;
    height: 6vw;
    border-radius: 50%;
    border: 3vw solid ${e=>e.theme.colors.primaryGreen.rgba(.1)};
    box-sizing: border-box;
  }
`,$=n.em`
  font-family: "SEATBCN-CondensedMedium", sans-serif;
  color: ${e=>e.theme.colors.primaryGreen.hexa};
  font-size: 1.5vw;
  position: relative;
  font-style: normal;
  width: 1.5vw;
  text-align: center;
`,re=n($)`
  animation: ${ie} 4s linear infinite;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -0.5vmin;
    left: 3.5vmin;
    z-index: -1;
    width: 13vmin;
    height: 13vmin;
    border-radius: 50%;
  }
`,ae=n(re)`
  transform-origin: 3.6vw 1vw;

  &::after {
    content: "Ø";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: ${ne} 2s linear infinite;
  }
`,se=p`
  to {
    transform: rotate(360deg);
  }
`,le=p`
  50% {
    transform: scale(1);
  }
`,ce=n.div`
  height: 30px;
  animation: ${se} 6s linear infinite;
  position: absolute;
  top: 3px;
  left: 1.3vw;
`,he=n.div`
  display: inline-block;
  background-color: ${e=>e.theme.colors.primaryGreen.hexa};
  height: 30px;
  width: 30px;
  border-radius: 50%;
  transform: scale(0);
  animation: ${le} 1.5s linear infinite;
  ${e=>e.delay&&`animation-delay: ${e.delay};`}
`,pe=()=>t.jsxs(oe,{children:[t.jsx($,{children:"C"}),t.jsx(ce,{children:t.jsx(he,{})}),t.jsx(ae,{}),t.jsx($,{children:"D"}),t.jsx($,{children:"E"}),t.jsx($,{children:"."})]}),ue=({title:e,animated:i,subTitle:o,note:a})=>t.jsxs(A,{children:[t.jsx(Y,{}),t.jsx(te,{}),t.jsx(z,{}),t.jsx(pe,{}),t.jsx(B,{children:e}),o&&t.jsx(P,{children:o}),!!i&&t.jsx(Z,{animated:i}),t.jsx(W,{children:a})]});var de=(e=>(e.BOLD="bold",e.NORMAL="normal",e))(de||{});const we="INTRO",ye="/src/assets/img/seat/";export{de as F,ue as H,we as I,ye as S};
