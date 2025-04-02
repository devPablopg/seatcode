import{d as o,j as n}from"./index-DO-VPuGT.js";import{T as a,a as s}from"./LocaleService-C19YxyPP.js";var r=(e=>(e.HOME="#/",e.ABOUT="#/about",e.OURSOLUTIONS="#/oursolutions",e.WORKWITHUS="#/workwithus",e.PARTNERSHIP="#/partnership",e.TERMS_OF_USE="#/terms-of-use",e.PRIVACY_POLICY="#/privacy-policy",e.INTEGRITY="#/integrity-and-compliance",e.ENVIRONMENTAL_POLICY="https://www.seat.com/company/environmental-policy.html",e.WHISTLEBLOWER="#/whistleblower-channel",e.CODE_LINKEDIN="https://www.linkedin.com/company/seatcode/posts/?feedView=all",e))(r||{});const l=o.div`
  display: block;
  margin-bottom: 2rem;
  text-align: center;
  justify-content: space-evenly;

  @media screen and (min-width: ${a}px) {
    display: flex;
  }

  @media screen and (min-height: 320px) and (max-height: 430px) and (orientation: landscape) {
    display: flex;
  }
`,t=o.a`
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
`,c={en:{terms:"terms of use",privacy:"privacy policy",integrity:"integrity & compliance",environment:"environmental policy",whistleblower:"whistleblower channels"}},i={...c[s.getLanguage()]},h=()=>n.jsxs(l,{children:[n.jsx(t,{href:r.TERMS_OF_USE,children:i.terms}),n.jsx(t,{href:r.PRIVACY_POLICY,children:i.privacy}),n.jsx(t,{href:r.INTEGRITY,children:i.integrity}),n.jsx(t,{href:r.ENVIRONMENTAL_POLICY,target:"_blank",children:i.environment}),n.jsx(t,{href:r.WHISTLEBLOWER,children:i.whistleblower})]});export{h as F,r as R};
