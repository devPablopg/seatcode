import GoogleMapComponent from "modules/shared/ui/layout/components/Map";
import React from "react";
import WrapperContact from "./styles/WrapperContact";
import ContactInfo from "modules/shared/ui/layout/components/ContactInfo";

const Contact = () => {
  return (
    <WrapperContact>
      <ContactInfo />
      <GoogleMapComponent />
    </WrapperContact>
  );
};

export default Contact;
