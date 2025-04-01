import { LAPTOP, MOBILE } from "modules/shared/domain/Breakpoints";
import styled from "styled-components";

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  z-index: 10000;
  width: 100vw;
  font-family: ${(props) => props.theme.fontFamily.regular}, "Courier New",
    Courier, monospace, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  background-color: black;
`;

export const TogglerBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  height: 3rem;
  @media screen and (width >= ${LAPTOP}px) {
    height: 7vh;
    align-items: unset;
  }
`;

export const Brand = styled.a`
  color: ${(props) => props.theme.colors.white.hexa};
  padding: 0.5rem 1rem;
`;

export const BrandImage = styled.img`
  opacity: 1 !important;
  @media screen and (min-width: 1921px) {
    margin: 1rem;
    width: 6rem;
    height: 6rem;
  }
`;

export const Toggler = styled.div`
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  opacity: 1 !important;
  transform: translateY(4%);
  @media screen and (width >= ${LAPTOP}px) {
    width: 4%;
    height: 4%;
  }
`;

export const TogglerIcon = styled.svg`
  path {
    fill: none;
    stroke: white;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2px;
  }
`;

export const Collapse = styled.div<{ $isOpen: boolean }>`
  height: calc(100vh - 3rem);
  align-items: center;
  display: flex;
  overflow: auto;
  position: absolute;
  text-align: left;
  width: 100vw;
  right: 0;
  transform: ${(props: { $isOpen: boolean }) =>
    props.$isOpen ? "translateX(0)" : "translateX(100%)"};
  top: 3rem;
  padding: 0;
  z-index: -1;
  backdrop-filter: blur(20px);
  opacity: 0.92;
  transition: transform 1s ease-in-out;
  @media screen and (width >= ${LAPTOP}px) {
    transform: ${(props: { $isOpen: boolean }) =>
      props.$isOpen ? "translateX(65%)" : "translateX(100%)"};
  }
`;

export const NavList = styled.ul`
  height: auto;
  width: 100%;
  list-style-type: none;
  list-style-image: none;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: auto 0;
`;

export const NavItem = styled.li`
  overflow: hidden;
  transition: height 0.4s cubic-bezier(0.77, 0, 0.18, 1);
  height: 6vh;
  font-family: ${(props) => props.theme.fontFamily.medium}, sans-serif;
  font-weight: 500;

  @media screen and (min-width: ${MOBILE}px) and (max-width: ${LAPTOP - 1}px) and (orientation: landscape) {
    height: 8vh;
  }
`;

export const NavLink = styled.a`
  position: relative;
  display: block;
  font-size: 1.777rem;
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
  @media screen and (width >= ${LAPTOP}px) {
    font-size: 2vw;
    line-height: calc(2vw * 1.2);
  }

  span:hover {
    color: ${(props) => props.theme.colors.primaryGreen.hexa};
  }

  ::after {
    content: "";
    position: absolute;
    transform: scaleX(0);
    height: 4%;
    top: 1.2em;
    left: 1rem;
    right: 15px;
    background-color: ${(props) => props.theme.colors.primaryGreen.hexa};
    transform-origin: bottom center;
    transition: transform 0.25s ease-out;
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom center;
  }
`;

export const LinkContent = styled.span`
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  z-index: 1;
`;
