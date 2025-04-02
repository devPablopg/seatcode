import{d as a,m as d,j as e}from"./index-CCMKRyxT.js";import{L as i,W as l,T as m,M as p,a as f}from"./LocaleService-C19YxyPP.js";import{F as o,W as g,a as x,b as w,C as u,S as c,c as y}from"./index-D47c1UOU.js";import{H as b}from"./index-fLKs-cYf.js";import{S as v}from"./index-DUTK_cLq.js";import{R as h,F as j}from"./index-CkDgrAyp.js";import"./link-CSEmMD3R.js";const T={en:{title:"ABOUT US",subTitle:"Our story",summary:["We started our journey in 2017 as Metropolis:Lab, a small innovation hub in Barcelona with big ambitions.","Today, we’re a digital powerhouse, home to over 280 experts leading the charge in digital transformation for SEAT and CUPRA. We are committed to building digital solutions that improve efficiency for users and businesses alike."],cardTitle:"OUR VALUES",cardParagraph:[{key:"At-SC",font:o.NORMAL,text:"At SEAT CODE, "},{key:"believe",font:o.BOLD,text:"we believe our strength lies in people and technology. "},{key:"radical",font:o.NORMAL,text:"We believe in radical transparency, honesty and passion for our work."},{key:"INTRO-radical"},{key:"our-team",font:o.BOLD,text:"Our team comes first. "},{key:"mistakes",font:o.NORMAL,text:"Mistakes are seen as opportunities to grow. Trust, autonomy and continuous feedback fuel our success."},{key:"INTRO-mistakes"},{key:"being-open",font:o.NORMAL,text:"We believe in being open so that different perspectives can thrive. We know that innovation flourishes when people have the space to contribute and together we transform the digital experience."},{key:"INTRO-being-open"},{key:"strive",font:o.NORMAL,text:"We strive for excellence and impact, ensuring that everything we create delivers real value. We measure success not just in performance but in how we grow together celebrating achievements as one team."}],portfolio:"Portfolio",portfolio1Title:"CUPRA Digital Business",portfolio1Paragraph:"SEAT CODE takes the driver's seat in digital product development, to bring CUPRA's Digital Strategy to life with an outstanding user experience.",portfolio2Title:"Sales, Aftersales, Marketing & Car",portfolio2Paragraph:"We are responsible for turbocharging the transformation of commercial activities through digital products prioritized by SEAT, S.A. Also improving InCar experiences.",portfolio3Title:"SEAT CODE Products",portfolio3Paragraph:"We handle our own product portfolio, meeting SEAT, S.A. and Volkswagen brands needs and scaling as SaaS. A perfect example is our great Mobility Platform, Giravolta!",portfolio4Title:"Innovation & Venture Clienting",portfolio4Paragraph:"Combination of in-house capabilities & start-ups to showcase ideas with the most potential by opening our ecosystem to the external solutions & talent.",explore:"explore our work",news:"NEWS",linkedin:"LINKEDIN",morePosts:"MORE POSTS"}},k=d`
    to {
      visibility: visible;
    }
  `,S=d`
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
`,$=d`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`,A=a.div`
  ${g} {
    @media screen and (width >= ${i}px) {
      width: 32.2vw;
    }
  }

  ${x} {
    clip-path: unset;
  }

  ${w} {
    clip-path: unset;

    @media screen and (min-width: ${i}px) {
      img {
        height: max-content;
        max-height: 800px;
      }
    }

    @media screen and (min-width: ${l+1}px) {
      img {
        height: max-content;
        max-height: 1300px;
      }
    }
  }
`,P=a.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 20vw;
    width: 90vw;
    object-fit: cover;
    object-position: center;
  }
`,O=a.h4`
  position: absolute;
  font-weight: 700;
  font-size: clamp(21px, 3.5vw, 4vw);
  font-style: italic;
  color: ${r=>r.theme.colors.primaryGreen.hexa};
  visibility: hidden;
  animation: 0s linear 1s forwards ${k};
`,W=a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: SEATBCN-Condensed, sans-serif;
  color: ${r=>r.theme.colors.white.hexa};
  width: 90vw;
  margin: auto;
`,n=a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 4vw 0;

  @media screen and (min-width: ${m}px) and (max-width: ${i}px) {
    width: 45%;
  }
  @media screen and (min-width: ${p}px) and (max-width: ${i}px) and (orientation: landscape) {
    width: 45%;
  }
  @media screen and (min-width: ${i}px) {
    width: 24%;
  }

  p:first-of-type {
    font-family: SEATBCN-CondensedMedium, sans-serif;
    font-weight: 500;
    font-size: clamp(1rem, 1.4vw, 1.8vw);
    margin-bottom: 0;
  }

  p:last-of-type {
    display: inline-block;
    font-weight: 400;
    font-size: clamp(14px, 1.2vw, 1.5vw);
  }

  img {
    width: 100%;
    height: 151px;
    object-fit: cover;
    border-radius: 5px;
    animation: ${$} 1s ease-in-out ${r=>r.$delay}s forwards;

    @media screen and (min-width: ${p}px) and (max-width: ${i}px) and (orientation: landscape) {
      height: 250px;
    }
    @media screen and (min-width: ${i}px) {
      height: 20em;
    }
    @media screen and (min-width: ${l}px) {
      height: 26em;
    }
    @media screen and (min-width: ${l+1}px) {
      height: 35em;
    }
  }
`,s=a.div`
  text-align: center;
  text-align: -webkit-center;
  animation: 2s ${S} ease-in-out;
  margin-bottom: 5vw;
`,E=a.div`
  height: 70vh;
  overflow: hidden;
  margin-bottom: 5vw;

  @media screen and (min-width: ${p}px) and (max-width: ${i}px) and (orientation: landscape) {
    height: 90vh;
  }

  @media screen and (min-width: ${m}px) {
    height: 55vh;
  }
`,t={...T[f.getLanguage()]},B=()=>e.jsxs(e.Fragment,{children:[e.jsx(b,{title:t.title,subTitle:t.subTitle}),e.jsx(v,{summary:t.summary}),e.jsx(A,{children:e.jsx(u,{title:t.cardTitle,paragraph:t.cardParagraph,image:[{src:"placeholder.webp",alt:"portfolio-1"}]})}),e.jsxs(P,{children:[e.jsx("img",{src:"portfolio-opacidad.webp",alt:"seat-code-terrace"}),e.jsx(O,{children:t.portfolio})]}),e.jsxs(W,{children:[e.jsxs(n,{$delay:0,children:[e.jsx("img",{src:"portfolio-1.webp",alt:"portfolio-1",loading:"lazy"}),e.jsx("p",{children:t.portfolio1Title}),e.jsx("p",{children:t.portfolio1Paragraph})]}),e.jsxs(n,{$delay:.2,children:[e.jsx("img",{src:"portfolio-3.webp",alt:"portfolio-3",loading:"lazy"}),e.jsx("p",{children:t.portfolio2Title}),e.jsx("p",{children:t.portfolio2Paragraph})]}),e.jsxs(n,{$delay:.1,children:[e.jsx("img",{src:"portfolio-2.webp",alt:"portfolio-2",loading:"lazy"}),e.jsx("p",{children:t.portfolio3Title}),e.jsx("p",{children:t.portfolio3Paragraph})]}),e.jsxs(n,{$delay:.3,children:[e.jsx("img",{src:"portfolio-4.webp",alt:"portfolio-4",loading:"lazy"}),e.jsx("p",{children:t.portfolio4Title}),e.jsx("p",{children:t.portfolio4Paragraph})]})]}),e.jsx(s,{children:e.jsx(c,{href:h.OURSOLUTIONS,children:t.explore})}),e.jsx(s,{children:e.jsx(y,{children:t.news})}),e.jsx(E,{children:e.jsx("iframe",{src:"https://widgets.sociablekit.com/linkedin-page-posts/iframe/25523041",frameBorder:"0",width:"100%",height:"100%",title:"LinkedIn Posts"})}),e.jsx(s,{children:e.jsx(c,{href:h.CODE_LINKEDIN,target:"_blank",children:t.morePosts})}),e.jsx(j,{})]});export{B as default};
