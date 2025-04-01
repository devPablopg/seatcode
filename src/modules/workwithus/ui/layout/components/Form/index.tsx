import React, { useState } from "react";
import {
  FormField,
  FormInput,
  FormLabel,
  FormSelect,
  FormSubmitButton,
  FormTextarea,
  WrapperColumn,
  WrapperForm,
} from "./styles/WrapperForm";
import { WorkWithUsTranslations } from "modules/workwithus/infrastructure/i18n/typing";
import LocaleService from "infrastructure/i18n/LocaleService";
import { WorkWithUsText } from "modules/workwithus/infrastructure/i18n/WorkWithUsText";
import { validateEmail } from "modules/shared/domain/Validator";

const workWithUsTranslations: WorkWithUsTranslations = {
  ...WorkWithUsText[LocaleService.getLanguage()],
};

const WorkWithUsForm = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [mailValue, setMailValue] = useState<string>("");
  const [mailError, setMailError] = useState<boolean>(false);

  const handleFocus = (e) => {
    setFocusedInput(e.target.name);
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      setFocusedInput(null);
    }

    if (e.target.name === "email") {
      const value = e.target.value;
      setMailValue(value);

      if (value) {
        setMailError(!validateEmail(value));
      } else {
        setMailError(false);
      }
    }
  };

  const handleEmailChange = (e) => {
    setMailValue(e.target.value);
  };

  return (
    <WrapperForm method="POST" action="https://formspree.io/f/xvoeqgak">
      <WrapperColumn>
        <FormField>
          <FormInput
            id="name"
            type="text"
            name="name"
            required
            placeholder=" "
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <FormLabel htmlFor="name">
            {workWithUsTranslations.yourName}
          </FormLabel>
        </FormField>
        <FormField>
          <FormInput
            id="email"
            type="email"
            name="email"
            required
            placeholder=" "
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleEmailChange}
            value={mailValue}
          />
          <FormLabel htmlFor="email" className={mailError ? "error" : "green"}>
            {mailError
              ? workWithUsTranslations.mailError
              : workWithUsTranslations.yourEmail}
          </FormLabel>
        </FormField>
        <FormField>
          <FormInput
            id="phone"
            type="number"
            name="phone"
            required
            placeholder=" "
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <FormLabel htmlFor="phone">
            {workWithUsTranslations.yourPhone}
          </FormLabel>
        </FormField>
        <FormField>
          <FormSelect
            id="find-us"
            name="find-us"
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
            defaultValue=""
          >
            <option value="" disabled hidden>
              {workWithUsTranslations.selectOne}
            </option>
            <option value="internet">{workWithUsTranslations.internet}</option>
            <option value="social">
              {workWithUsTranslations.socialNetworks}
            </option>
            <option value="other">{workWithUsTranslations.other}</option>
          </FormSelect>
          {focusedInput === "find-us" && (
            <FormLabel htmlFor="find-us">
              {workWithUsTranslations.howDidYouFindUs}
            </FormLabel>
          )}
        </FormField>
      </WrapperColumn>
      <WrapperColumn>
        <FormField>
          <FormInput
            id="organization"
            type="text"
            name="company"
            required
            placeholder=" "
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <FormLabel htmlFor="organization">
            {workWithUsTranslations.yourOrganization}
          </FormLabel>
        </FormField>
        <FormField>
          <FormTextarea
            id="message"
            rows={11}
            name="message"
            required
            placeholder=" "
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <FormLabel htmlFor="message" className="textarea">
            {workWithUsTranslations.yourMessage}
          </FormLabel>
        </FormField>
      </WrapperColumn>
      <FormSubmitButton type="submit">
        {workWithUsTranslations.send}
      </FormSubmitButton>
    </WrapperForm>
  );
};

export default WorkWithUsForm;
