import {
  DESKTOP,
  LAPTOP,
  MOBILE,
  TABLET,
  WIDESCREEN_DESKTOP,
} from "modules/shared/domain/Breakpoints";
import styled from "styled-components";

export const WrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 90%;
  font-family: SEATBCN-Condensed, sans-serif;
  box-sizing: border-box;
  background-image: linear-gradient(
      to bottom,
      rgba(28, 28, 28, 1),
      rgba(167, 249, 171, 0.3)
    ),
    url("./street.webp");
  background-size: cover;
  background-position: center;

  @media (min-width: ${TABLET}px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 3rem 2rem;
  }

  @media screen and (min-width: ${MOBILE}px) and (max-width: ${LAPTOP}px) and (orientation: landscape) {
    width: 80%;
  }

  @media screen and (min-width: ${DESKTOP}px) {
    width: 85%;
  }
`;

export const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  width: 100%;
  margin-bottom: 1.5rem;

  @media (min-width: ${TABLET}px) {
    width: 48%;
    gap: 2rem;
    margin-bottom: 0;
  }

  @media screen and (min-width: ${WIDESCREEN_DESKTOP + 1}px) {
    width: 49%;
  }
`;

export const FormField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

export const FormLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  font-size: 1rem;
  font-family: SEATBCN-Condensed, sans-serif;
  color: ${(props) => props.theme.colors.darkGray.rgba(0.5)};
  pointer-events: none;
  transition: all 0.2s ease-in-out;

  &.textarea {
    top: 10%;
  }

  &.message {
    top: 15%;
  }

  &.error {
    color: ${(props) => props.theme.colors.redAlert.hexa} !important;
  }

  @media (min-width: ${TABLET}px) {
    font-size: 15px;
  }

  @media (min-width: ${WIDESCREEN_DESKTOP + 1}px) {
    font-size: 1.8rem;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 1rem 0.5rem 1rem 16px;
  font-size: 1rem;
  background-color: ${(props) => props.theme.colors.white.rgba(1)};
  border-radius: 5px;
  border: 1px solid #ddd;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: rgba(167, 249, 171, 0.8);
    box-shadow: 0 0 0 2px rgba(167, 249, 171, 0.25);
  }

  &:focus + ${FormLabel}, &:not(:placeholder-shown) + ${FormLabel} {
    top: -15px;
    left: 5px;
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.primaryGreen.hexa};
  }

  @media (min-width: ${TABLET}px) {
    padding: 1rem;
  }

  @media screen and (min-width: ${MOBILE}px) and (max-width: ${LAPTOP}px) and (orientation: landscape) {
    padding: 0.5rem;
  }

  @media (min-width: ${WIDESCREEN_DESKTOP + 1}px) {
    font-size: 2.5rem;
    padding: 1rem;
  }
`;

export const FormSelect = styled.select`
  width: 100%;
  padding: 1rem 0.5rem 1rem 16px;
  font-size: 1rem;
  background-color: ${(props) => props.theme.colors.white.rgba(1)};
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23555555' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  appearance: none;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.darkGray.rgba(0.8)};

  &:focus {
    outline: none;
    border-color: rgba(167, 249, 171, 0.8);
    box-shadow: 0 0 0 2px rgba(167, 249, 171, 0.25);
  }

  &:focus + ${FormLabel}, &:not([value=""]) + ${FormLabel} {
    top: -15px;
    left: 5px;
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.primaryGreen.hexa};
  }

  @media (min-width: ${TABLET}px) {
    padding: 1rem;
  }

  @media screen and (min-width: ${MOBILE}px) and (max-width: ${LAPTOP}px) and (orientation: landscape) {
    padding: 0.5rem;
  }

  @media (min-width: ${WIDESCREEN_DESKTOP + 1}px) {
    font-size: 2.5rem;
    padding: 1rem;
    background-size: 32px 24px;
    background-position: right 1.5rem center;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem 0.5rem 1rem 16px;
  font-size: 1rem;
  background-color: ${(props) => props.theme.colors.white.rgba(1)};
  border-radius: 5px;
  border: 1px solid #ddd;
  resize: vertical;
  min-height: 120px;
  box-sizing: border-box;
  resize: none;

  &:focus {
    outline: none;
    border-color: rgba(167, 249, 171, 0.8);
    box-shadow: 0 0 0 2px rgba(167, 249, 171, 0.25);
  }

  &:focus + ${FormLabel}, &:not(:placeholder-shown) + ${FormLabel} {
    top: -15px;
    left: 5px;
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.primaryGreen.hexa};
  }

  @media (min-width: ${TABLET}px) {
    min-height: 150px;
    height: 13.8rem;
    padding: 1rem;
  }

  @media screen and (min-width: ${MOBILE}px) and (max-width: ${LAPTOP}px) and (orientation: landscape) {
    height: 10.8rem;
    padding: 0.5rem;
  }

  @media (min-width: ${WIDESCREEN_DESKTOP + 1}px) {
    height: 19rem;
    font-size: 2.5rem;
    padding: 1rem;
  }
`;

export const FormSubmitButton = styled.button`
  width: auto;
  padding: 0.7rem 1rem;
  background-color: rgba(167, 249, 171, 0.8);
  color: #000;
  border: none;
  border-radius: 5px;
  font-family: SEATBCN-CondensedMedium, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;
  text-transform: uppercase;

  &:hover {
    background-color: rgba(167, 249, 171, 1);
  }

  @media (min-width: ${TABLET}px) {
    min-width: 120px;
    margin: 2rem auto 0;
  }

  @media (min-width: ${WIDESCREEN_DESKTOP + 1}px) {
    font-size: 2rem;
    padding: 1.5rem 3rem;
  }
`;
