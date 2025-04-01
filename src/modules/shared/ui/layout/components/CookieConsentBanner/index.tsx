import React from "react";

declare global {
  interface Window {
    Optanon: any;
  }
}

const CookieConsentBanner = () => {
  return (
    <div>
      <div id="onetrust-banner-sdk"></div>
    </div>
  );
};

export default CookieConsentBanner;
