import React, { useRef, useState } from "react";
import {
  Navbar,
  TogglerBar,
  Brand,
  BrandImage,
  Toggler,
  TogglerIcon,
  Collapse,
  NavList,
  NavItem,
  NavLink,
  LinkContent,
} from "./styles/WrapperFancyNavbar";
import useOutsideAlerter from "modules/shared/hooks/useOutsiderAlert";
import { NavbarTranslations } from "modules/shared/infrastructure/i18n/typing";
import LocaleService from "infrastructure/i18n/LocaleService";
import { NavbarText } from "modules/shared/infrastructure/i18n/NavbarText";
import { Routes } from "infrastructure/routes/routes";

const navbarTranslations: NavbarTranslations = {
  ...NavbarText[LocaleService.getLanguage()],
};

const FancyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const refComponent = useRef(null);
  useOutsideAlerter(refComponent, () => setIsOpen(false));

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar ref={refComponent}>
      <TogglerBar>
        <Brand href={Routes.HOME} aria-label="fancy-toggle">
          <BrandImage
            src="src/assets/img/seat/SEATCODE_LogotipoV_RGB_Negativo.svg"
            alt="logo"
          />
        </Brand>
        <Toggler onClick={toggleCollapse}>
          <TogglerIcon viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <>
                <path
                  id="path-top"
                  d="M20,25c0,0,22,0,30,0c16,0,18.89,40.71-.15,21.75C38.7,35.65,19.9,16.8,19.9,16.8"
                  style={{
                    strokeDasharray: "30px, 88px",
                    strokeDashoffset: "-81px",
                  }}
                ></path>
                <path
                  id="path-bottom"
                  d="M19.9,46.98c0,0,18.8-18.85,29.95-29.95C68.89-1.92,66,38.78,50,38.78c-8,0-30,0-30,0"
                  style={{
                    strokeDasharray: "30px, 88.1px",
                    strokeDashoffset: "-6px",
                  }}
                ></path>
              </>
            ) : (
              <>
                <path id="path-top" d="M20,25h30" />
                <path id="path-middle" d="M20,35h30" />
                <path id="path-bottom" d="M20,45h30" />
              </>
            )}
          </TogglerIcon>
        </Toggler>
      </TogglerBar>
      <Collapse $isOpen={isOpen}>
        <NavList>
          <NavItem>
            <NavLink href={Routes.HOME}>
              <LinkContent>{navbarTranslations.home}</LinkContent>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={Routes.ABOUT}>
              <LinkContent>{navbarTranslations.aboutus}</LinkContent>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={Routes.OURSOLUTIONS}>
              <LinkContent>{navbarTranslations.oursolutions}</LinkContent>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={Routes.WORKWITHUS}>
              <LinkContent>{navbarTranslations.workwithus}</LinkContent>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={Routes.PARTNERSHIP}>
              <LinkContent>{navbarTranslations.partnership}</LinkContent>
            </NavLink>
          </NavItem>
        </NavList>
      </Collapse>
    </Navbar>
  );
};

export default FancyNavbar;
