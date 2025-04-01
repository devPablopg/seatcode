import{d as a,j as t}from"./index-BXnVKfS_.js";import{T as i,a as s}from"./LocaleService-C19YxyPP.js";var n=(e=>(e.HOME="seatcode/",e.ABOUT="seatcode/#/about",e.OURSOLUTIONS="seatcode/#/oursolutions",e.WORKWITHUS="seatcode/#/workwithus",e.PARTNERSHIP="seatcode/#/partnership",e.TERMS_OF_USE="seatcode/#/terms-of-use",e.PRIVACY_POLICY="seatcode/#/privacy-policy",e.INTEGRITY="seatcode/#/integrity-and-compliance",e.ENVIRONMENTAL_POLICY="https://www.seat.com/company/environmental-policy.html",e.WHISTLEBLOWER="seatcode/#/whistleblower-channel",e.CODE_LINKEDIN="https://www.linkedin.com/company/seatcode/posts/?feedView=all",e))(n||{});const c=a.div`
  display: block;
  margin-bottom: 2rem;
  text-align: center;
  justify-content: space-evenly;

  @media screen and (min-width: ${i}px) {
    display: flex;
  }

  @media screen and (min-height: 320px) and (max-height: 430px) and (orientation: landscape) {
    display: flex;
  }
`,r=a.a`
  display: block;
  font-family: SEATBCN-CondensedBold, sans-serif;
  color: ${e=>e.theme.colors.white.hexa};
  font-size: 12px;
  margin-bottom: 0.5rem;
  text-decoration: none;
  font-size: clamp(14px, 1.3vw, 2rem);
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: ${e=>e.theme.colors.primaryGreen.hexa};
  }
`,l={en:{terms:"terms of use",privacy:"privacy policy",integrity:"integrity & compliance",environment:"environmental policy",whistleblower:"whistleblower channels"}},o={...l[s.getLanguage()]},p=()=>t.jsxs(c,{children:[t.jsx(r,{href:n.TERMS_OF_USE,children:o.terms}),t.jsx(r,{href:n.PRIVACY_POLICY,children:o.privacy}),t.jsx(r,{href:n.INTEGRITY,children:o.integrity}),t.jsx(r,{href:n.ENVIRONMENTAL_POLICY,target:"_blank",children:o.environment}),t.jsx(r,{href:n.WHISTLEBLOWER,children:o.whistleblower})]});export{p as F,n as R};
