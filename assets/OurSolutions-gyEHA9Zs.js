import{d as s,m as c,j as e}from"./index-CxsWXQkA.js";import{L as n,W as l,a as p}from"./LocaleService-C19YxyPP.js";import{H as d}from"./index-BrnB60Yz.js";import{W as m,S as h}from"./index-BuNvLltS.js";import{F as a,E as g,W as f,a as u,b as y,c as x,C as i}from"./index-Cfo2F8wb.js";import{F as v}from"./index-CIPQHtaA.js";import"./link-dniQWSAT.js";const T={en:{title:"OUR SOLUTIONS",subTitle:"What are we working on?",summary:["At SEAT CODE, we’re always moving forward. As the digital hub for CUPRA and SEAT, we create solutions that transform user experiences, optimise operations and accelerate innovation. Our End-to-End approach ensures agile development of the highest-quality digital solutions and fast delivery times.","As the Volkswagen Group’s go-to coders, our digital products are fully scalable and user centric. Our goal is to keep transforming the status quo.","See how we’re shaping the future of mobility."],ourPortfolio:"explore our portfolio",cardTitle1:"MYCUPRA & MYSEAT APP",cardParagraph1:[{key:"The-My",font:a.BOLD,text:"The My CUPRA App and My SEAT App centralise all connected car services into one platform. "},{key:"They-serve",font:a.NORMAL,text:"They serve as the main communication channel between users and the brand, offering easy access to services, vehicle data and updates. Fully compatible with Android and iOS, they provide a smooth, intuitive interface."},{key:"INTRO-they-serve"},{key:"Hight-performance",font:a.BOLD,text:"High performance · Charging Management · Car Connectivity"}],cardTitle2:"SEAT & CUPRA WEBSITES",cardParagraph2:[{key:"This-project",font:a.BOLD,text:"This project enhances the car buying journey by providing personalized, easy access to brand and vehicle information."},{key:"Users-can",font:a.NORMAL,text:"Users can explore offers, book services, and access financing details seamlessly. With clear pricing and intuitive tools, it empowers informed decisions and smooth engagement with the brand."},{key:"INTRO-this-project"},{key:"information-personalization",font:a.BOLD,text:"Information · Personalization · Engagement"}],cardTitle3:"CAR SALES",cardParagraph3:[{key:"These-projects",font:a.NORMAL,text:"These projects optimize the car buying experience by offering an engaging configurator, real-time stock alternatives, and flexible financing options. A centralized back office streamlines access to commercial data, enabling dealers to maximize lead conversion and ensure fast, efficient vehicle delivery."},{key:"INTRO-these-projects"},{key:"configuration",font:a.BOLD,text:"Configuration · Financing · Conversion"}],cardTitle4:"GIRAVOLTA",cardParagraph4:[{key:"Giravolta",font:a.BOLD,text:"Giravolta is a SaaS solution for mobility operators, "},{key:"enabling",font:a.NORMAL,text:"enabling seamless management of shared, rental and corporate fleets across multiple vehicle types. With real-time data, digital keys and a white-label app, it optimises fleet operations. Its intuitive backoffice streamlines bookings, payments, and analytics. Trusted by 500,000+ users in 7 countries, Giravolta is shaping the future of smart mobility."},{key:"INTRO-gira"},{key:"Smart-mobility",font:a.BOLD,text:"Smart Mobility · Booking Management · Carsharing Optimization"}],cardTitle5:"AI & DATA ",cardParagraph5:[{key:"We-specialise",font:a.NORMAL,text:"We specialise in data-driven innovation, using AI, analytics and machine learning to transform decision-making. Our solutions predict trends, optimise processes and enhance efficiency in areas like customer loyalty, pricing and after-sales services. With self-service tools, users can explore data and monitor KPIs effortlessly. "},{key:"By-leveraging",font:a.BOLD,text:"By leveraging data, we help businesses unlock growth and drive smarter operations."},{key:"INTRO-specialise"},{key:"Optimization",font:a.BOLD,text:"Optimization · Data-driven decisions · Tracking"}]}},b=c`
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
`,O=s.div`
  ${m} {
    &:last-of-type {
      font-family: SEATBCN-CondensedMedium, sans-serif;
      font-weight: 500;
    }
  }

  ${g} {
    margin-bottom: 1vw;
  }
`,r=s.div`
  @media screen and (width >= ${n}px) {
    margin: 5rem auto 14%;
  }

  ${f} {
    span:last-of-type {
      color: ${o=>o.theme.colors.primaryGreen.hexa};
    }
    @media screen and (width >= ${n}px) {
      width: 32.3vw;
    }
  }

  ${u} {
    clip-path: unset;
  }

  ${y} {
    clip-path: unset;

    @media screen and (min-width: ${n}px) {
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
`,k=s.div`
  text-align: center;
  text-align: -webkit-center;
  animation: 2s ${b} ease-in-out;
  margin: 5vw;
  text-transform: uppercase;
`,t={...T[p.getLanguage()]},E=()=>e.jsxs(O,{children:[e.jsx(d,{title:t.title,subTitle:t.subTitle}),e.jsx(h,{summary:t.summary}),e.jsx(k,{children:e.jsx(x,{children:t.ourPortfolio})}),e.jsx(r,{children:e.jsx(i,{title:t.cardTitle1,paragraph:t.cardParagraph1,image:[{src:"connectivity.webp",alt:"connected-car"}]})}),e.jsx(r,{children:e.jsx(i,{isRight:!0,title:t.cardTitle2,paragraph:t.cardParagraph2,image:[{src:"tavascan.webp",alt:"new-tavascan"}]})}),e.jsx(r,{children:e.jsx(i,{title:t.cardTitle3,paragraph:t.cardParagraph3,image:[{src:"sales.webp",alt:"car-sales"}]})}),e.jsx(r,{children:e.jsx(i,{isRight:!0,title:t.cardTitle4,paragraph:t.cardParagraph4,image:[{src:"giravolta.webp",alt:"giravolta-car-sharing"}]})}),e.jsx(r,{children:e.jsx(i,{title:t.cardTitle5,paragraph:t.cardParagraph5,image:[{src:"data.webp",alt:"data-dashboards"}]})}),e.jsx(v,{})]});export{E as default};
