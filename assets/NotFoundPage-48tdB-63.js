import{d as a,j as r}from"./index-vEfM4k_Q.js";import{L as o,M as i,W as t,a as s}from"./LocaleService-C19YxyPP.js";const d=a.div`
  display: flex;
  flex-wrap: wrap;

  :first-child {
    position: relative;
  }
  :first-child h1 {
    position: absolute;
    font-family: "SEATBCN-CondensedBlack", sans-serif;
    font-size: 11vw;
    color: ${e=>e.theme.colors.primaryGreen.hexa};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: ${o}px) {
    flex-wrap: nowrap;
    flex-direction: row-reverse;
  }

  @media screen and (min-width: ${i}px) and (max-width: ${o}px) and (orientation: landscape) {
    flex-wrap: nowrap;
    flex-direction: row-reverse;
  }
`,h=a.img`
  width: 100vw;
  height: 50vh;
  object-fit: cover;

  @media screen and (min-width: ${o}px) {
    width: 50vw;
    height: 100vh;
  }

  @media screen and (min-width: ${i}px) and (max-width: ${o}px) and (orientation: landscape) {
    width: 50vw;
    height: 100vh;
  }
`,c=a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40vh;
  color: ${e=>e.theme.colors.white.hexa};
  padding: 1vw 5vw;

  h1 {
    font-size: clamp(28px, 3vw, 5vw);
    font-family: "SEATBCN-CondensedBlack", sans-serif;
    font-weight: 900;
    margin-bottom: 1vw;
    line-height: clamp(36.4px, 3.9vw, 6.5vw);
    color: ${e=>e.theme.colors.white.hexa};
  }

  p {
    font-size: clamp(21px, 2.5vw, 4.5vw);
    font-family: "SEATBCN-Condensed", sans-serif;
    font-weight: 400;
    margin: 3vw 0;
  }

  a {
    margin: 4vw 0;
  }

  @media screen and (min-width: ${o}px) {
    width: 50vw;
    height: 100vh;
  }

  @media screen and (min-width: ${i}px) and (max-width: ${o}px) and (orientation: landscape) {
    width: 50vw;
    height: 100vh;
  }
`,l=a.a`
  display: inline-block;
  padding: 0.8rem 2.5rem;
  font-family: "SEATBCN-Condensed", sans-serif;
  font-weight: 500;
  line-height: 1.45;
  text-align: center;
  letter-spacing: 0.1em;
  font-size: 2vw;
  color: ${e=>e.theme.colors.primaryGreen.hexa};
  background-color: transparent;
  border: 1px solid ${e=>e.theme.colors.primaryGreen.hexa};
  border-radius: 0.1875rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: ${e=>e.theme.colors.darkGray.hexa};
    background-color: ${e=>e.theme.colors.primaryGreen.hexa};
    border-color: ${e=>e.theme.colors.primaryGreen.hexa};
  }

  @media screen and (min-width: ${t}px) {
    padding: 1.4rem 3.2rem;
    border: 2px solid ${e=>e.theme.colors.primaryGreen.hexa};
  }

  @media screen and (min-width: ${t+1}px) {
    padding: 2.2rem 4rem;
    border: 3px solid ${e=>e.theme.colors.primaryGreen.hexa};
  }
`,m={en:{messageFirstPart:"Sorry, we couldn't find",messageSecondPart:"what you are looking for",messageThirdPart:"Looks that this page doesn't exist",backHome:"take me back home"}},n={...m[s.getLanguage()]},w=()=>r.jsxs(d,{children:[r.jsxs("div",{children:[r.jsx(h,{src:"src/assets/img/seat/inside.webp",alt:"office inside",loading:"lazy"}),r.jsx("h1",{children:"404"})]}),r.jsxs(c,{children:[r.jsxs("h1",{children:[n.messageFirstPart,r.jsx("br",{}),n.messageSecondPart]}),r.jsx("p",{children:n.messageThirdPart}),r.jsx("div",{children:r.jsx(l,{href:"../",children:n.backHome})})]})]});export{w as default};
