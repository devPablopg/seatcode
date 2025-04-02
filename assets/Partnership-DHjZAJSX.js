import{d as r,m as d,j as e}from"./index-CENDjnmR.js";import{L as i,D as o,M as p,T as m,W as h,a as w}from"./LocaleService-C19YxyPP.js";import{H as g}from"./index-CoxWQPcU.js";import{S as f}from"./index-Dval6rR-.js";import{F as x}from"./index-SRmAHu1F.js";const v=r.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5vw auto 10vw;
  max-width: 90%;
  justify-content: space-evenly;

  :nth-child(even) div:last-of-type {
    justify-content: flex-end;
  }

  @media screen and (min-width: ${i}px) {
    justify-content: space-between;
  }

  @media screen and (min-width: ${o}px) {
    & > *:nth-child(even) {
      margin-left: auto;
    }

    & > *:nth-child(odd) {
      margin-right: auto;
    }

    :nth-child(even) div {
      text-align: right;
      width: 100%;

      p {
        margin-left: auto;
      }
    }
    :nth-child(even) div:last-of-type {
      width: 0;
    }

    :nth-child(odd) div > img {
      left: 75%;
    }

    :nth-child(even) div > img {
      margin-right: 49vw;
    }
  }
`,u={en:{title:"PARTNERSHIP",subTitle:"Our partners",summary:["Humility is the key for a growth mindset. That is why we collaborate with external partners for SEAT CODE to boost our reputation as employers & digital makers, inspire our talent and be a key player in the tech ecosystem in Barcelona (and beyond!).","SEAT CODE preserves its StartUp spirit since 2019 and by partnering with such fresh entities we aim to maintain our hands-on mindset and focus on delivery!"],cardTitle1:"LA SALLE URL",cardParagraph1:"Together we will work to promote the development of entrepreneurship and economic-social cooperation within the framework of the Corporate Board Council, the business council of La Salle Barcelona – Universitat Ramon Llull.",cardTitle2:"TECH BARCELONA",cardParagraph2:"Tech Barcelona is a network of more than 1.300 members and an audience of 35.000+ tech profiles and we are GLOBAL Partners and co-founders. SEAT CODE aims to support product commercialisation, establish closer collaboration with Startups and to participate and organize tech events for the community.",cardTitle3:"22@ NETWORK",cardParagraph3:"The 22@Network Barcelona is an association of companies which are based in Poblenou (the 1st  innovation district in the world). SEAT CODE aims to contribute on consolidating the use of technology and innovative transformation from Poblenou to the world.",cardTitle4:"MOBILE WORLD CAPITAL",cardParagraph4:"We are recently partnered with Mobile World Capital to speed up access to digital talent and offer SEAT CODErs with inspiring content and events to promote knowledge transfer and collaboration among local entities."}},c=d`
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
`,y=d`
  0% {
    transform: perspective(1000px) rotateX(90deg);
    opacity: 0;
  }
  50% {
    background-color: #a7f9ab;
  }
  100% {
    transform: perspective(1000px) rotateX(0deg);
    opacity: 1;
  }
`,T=r.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 90vw;
  margin: 3vw 0;
  padding: 1rem;
  font-family: SEATBCN-Condensed, sans-serif;
  background-color: ${t=>t.theme.colors.darkGray.hexa};

  @media screen and (min-width: ${p}px) and (max-width: ${i-1}px) and (orientation: landscape) {
    margin: 1vw 0;
    max-width: 43%;
  }

  @media screen and (min-width: ${m}px) {
    margin: 1vw 0;
    max-width: 42%;
  }

  @media screen and (min-width: ${i}px) {
    margin: 2vw 0;
    max-width: 37vw;
    padding: 3.5rem 2rem 6.5rem 2rem;
  }

  @media screen and (min-width: ${o}px) {
    flex-wrap: nowrap;
    max-width: 90vw;
    width: 60%;
    margin: 7vw 0;
  }

  @media screen and (min-width: ${h+1}px) {
    margin: 8vw 0;
  }

  @media screen and (min-width: 4000px) {
    margin: 12vw 0;
  }
`,b=r.div`
  display: flex;
  flex-direction: column;
`,E=r.p`
  font-weight: 500;
  color: ${t=>t.theme.colors.primaryGreen.hexa};
  font-size: clamp(1.2rem, 2.9vw, 5rem);
  animation: 2s ${c} ease-in-out;
  margin: 0;
`,P=r.p`
  font-weight: 400;
  color: ${t=>t.theme.colors.white.hexa};
  font-size: clamp(12px, 1.3vw, 3rem);
  line-height: clamp(17px, 1.6vw, 3.6rem);
  animation: 2s ${c} ease-in-out;

  @media screen and (width >= ${i}px) {
    width: 32vw;
  }
`,j=r.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: flex-end;
  perspective: 2500px;

  img {
    width: 45%;
    height: 80px;
    padding: 2vw;
    object-fit: contain;
    object-position: center;
    background-color: ${t=>t.theme.colors.white.hexa};
    transform-origin: bottom;
    transform-style: preserve-3d;
    animation: ${y} 1.5s ease-in-out forwards;

    @media screen and (min-width: ${i}px) {
      width: 50%;
      height: 120px;
    }
  }

  @media screen and (min-width: ${o}px) {
    img {
      position: absolute;
      width: 35vw;
      height: 25vw;
      top: 0.5vw;
    }
  }
`,n=({title:t,paragraph:l,image:s})=>e.jsxs(T,{children:[e.jsxs(b,{children:[e.jsx(E,{children:t}),e.jsx(P,{children:l})]}),e.jsx(j,{children:e.jsx("img",{src:s.src,alt:s.alt,loading:"lazy"})})]}),a={...u[w.getLanguage()]},O=()=>e.jsxs(e.Fragment,{children:[e.jsx(g,{title:a.title,subTitle:a.subTitle}),e.jsx(f,{summary:a.summary}),e.jsxs(v,{children:[e.jsx(n,{title:a.cardTitle1,paragraph:a.cardParagraph1,image:{src:"la-salle.svg",alt:"la-salle-url"}}),e.jsx(n,{title:a.cardTitle2,paragraph:a.cardParagraph2,image:{src:"tech-bcn.svg",alt:"tech-bcn"}}),e.jsx(n,{title:a.cardTitle3,paragraph:a.cardParagraph3,image:{src:"network-bcn.svg",alt:"22@-network-bcn"}}),e.jsx(n,{title:a.cardTitle4,paragraph:a.cardParagraph4,image:{src:"mwb.svg",alt:"mobile-world-capital"}})]}),e.jsx(x,{})]});export{O as default};
