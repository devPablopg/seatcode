import{L as t}from"./LocaleService-C19YxyPP.js";import{d as o}from"./index-CxsWXQkA.js";const n=o.section`
  main {
    box-sizing: border-box;
    min-height: 100vh;
    color: ${e=>e.theme.colors.white.hexa};
    padding: 8vw 0;
    background-color: ${e=>e.theme.colors.darkGray.hexa};
  }
`,a=o.div`
  max-width: 90vw;
  margin: auto;

  @media screen and (min-width: ${t}px) {
    max-width: 58vw;
  }

  h1 {
    font-family: SEATBCN-CondensedBold, sans-serif;
    color: ${e=>e.theme.colors.primaryGreen.hexa};
    font-weight: 900;
    font-size: clamp(31px, 3vw, 6rem);
    margin-bottom: 5vw;
  }

  h2 {
    font-family: SEATBCN-CondensedBold, sans-serif;
    color: ${e=>e.theme.colors.primaryGreen.hexa};
    font-weight: 700;
    font-size: clamp(26px, 2.4vw, 6rem);
  }

  h3 {
    font-family: SEATBCN-CondensedBold, sans-serif;
    font-weight: 900;
    font-size: clamp(23px, 2.2vw, 5.5rem);
    margin-bottom: 1rem;
  }

  h4 {
    font-family: SEATBCN-CondensedBlack, sans-serif;
    font-weight: 900;
    font-size: clamp(20px, 2vw, 5rem);
    margin-bottom: 1rem;
  }

  p,
  li,
  a,
  td,
  th {
    font-family: SEATBCN-Condensed, sans-serif;
    font-weight: 400;
    font-size: clamp(1rem, 1.2vw, 3rem);
    line-height: clamp(23px, 1.7vw, 4.1rem);
  }

  ul {
    list-style-position: inside;
    padding-left: 0;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${e=>e.theme.colors.primaryGreen.hexa};

    &.back {
      display: block;

      font-weight: 700;
      font-size: clamp(21px, 1.7vw, 4.2rem);
      margin-bottom: 8rem;

      span {
        display: flex;
        font-family: SEATBCN-CondensedBold, sans-serif;
        color: ${e=>e.theme.colors.white.hexa};
      }

      svg {
        margin-right: 1vw;
        fill: white;
        width: clamp(21px, 1.7vw, 4.2rem);
        height: clamp(21px, 1.7vw, 4.2rem);
        transform: rotate(180deg);
      }
    }
  }

  &.table-responsive {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin-top: 1rem;
  }

  table {
    margin-bottom: 1rem;
    color: ${e=>e.theme.colors.white.hexa};
    background-color: transparent;
    border: 1px solid white;
    caption-side: bottom;
    border-collapse: collapse;
    width: 100%;
    vertical-align: top;
  }

  table > :not(caption) > * > * {
    padding: 0.75rem;
    background-color: transparent;
    border: 1px solid white;
    -webkit-box-shadow: inset 0 0 0 9999px var(--sparrow-table-accent-bg);
    box-shadow: inset 0 0 0 9999px var(--sparrow-table-accent-bg);
  }

  thead {
    font-weight: 700;
    vertical-align: bottom;
    border: 0 solid;
    border-color: inherit;
    border: 1px solid white;
  }

  tbody {
    font-weight: 400;
    vertical-align: inherit;
    border: 0 solid;
    border-color: inherit;
    border: 1px solid white;
  }

  th {
    font-family: "SEATBCN-CondensedBold", sans-serif;
  }

  th,
  td {
    text-align: inherit;
    text-align: -webkit-match-parent;
    border: 1px solid white;
  }

  tr {
    border: 0 solid;
    border-color: inherit;
  }

  .qr {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    gap: 20px;

    div {
      text-align: center;

      img {
        width: 45%; 
        height: auto;
      }
    }

    .qr-p {
      font-size: clamp(8px, 0.8vw, 1.8rem);
    }
  }
`;export{a as S,n as W};
