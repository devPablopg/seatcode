import React from "react";
import Footer from "modules/shared/ui/layout/components/Footer";
import WrapperContainer, { StyledContainer } from "../styles/WrapperContainer";
import LinkIcon from "assets/img/icons/link.svg?react";
import { Routes } from "infrastructure/routes/routes";

const PrivacyPolicy = () => {
  return (
    <>
      <WrapperContainer>
        <main>
          <section>
            <StyledContainer>
              <a className="back" href={Routes.HOME}>
                <span>
                  <LinkIcon />
                  Back to Home
                </span>
              </a>
              <h1>Privacy Policy.</h1>
              <h2>Introduction</h2>
              <p>
                By using this Website and when communicating electronically with
                SEAT:CODE, each User’s personal data is collected and processed
                subject to this privacy policy (“Privacy Policy”). All the
                capitalized terms in this Privacy Policy will have the meaning
                established in the Terms of Use (which can be viewed at this
                link) unless otherwise defined in this Privacy Policy.
              </p>
              <h2>Who is the data controller?</h2>
              <p>
                Name of data controller: SEAT METROPOLIS LAB BARCELONA S.A.,
                with VAT number A66928367
              </p>
              <p>Address: Autovía A-2, Km. 585, Martorell (Barcelona)</p>
              <p>
                Data Protection Officer’s contact details (DPO):
                data.protection@code.seat.
              </p>
              <h2>
                What’s the purpose of the processing of your personal data?
              </h2>
              <p>
                SEAT METROPOLIS LAB BARCELONA S.A., (hereinafter “SEAT:CODE”)
                will process your personal data for the following purposes:
              </p>
              <ul>
                <li>
                  Contact form: manage the data of users who contact SEAT:CODE
                  through the contact form, which SEAT:CODE makes available to
                  the User. Likewise, your data will be processed in order to
                  manage the queries that you send us through the channels set
                  up for this purpose on our Website; we may also contact the
                  user by telephone and/or electronically.
                </li>
                <li>
                  Jobs: Evaluate your candidacy in the event that your profile
                  fits any vacancy within the entity. If necessary, we will
                  contact you to arrange an interview.
                </li>
              </ul>
              <h2>What type of personal data are processed?</h2>
              <p>SEAT: CODE will process the following personal data:</p>
              <ul>
                <li>
                  Identifying data: Name and surname; national Identity Number;
                  telephone number; e-mail; postal address; telephone.
                </li>
                <li>
                  Professional data: Academic studies and any data that can be
                  found in your CV
                </li>
              </ul>
              <h2>
                What is the legal basis for the processing of your personal
                data?
              </h2>
              <p>
                The legal basis for the processing of your personal data is your
                consent.
              </p>
              <h2>Who are the recipients of my personal data?</h2>
              <p>
                SEAT:CODE may communicate your personal data to third parties in
                compliance with the legal obligations that apply in each case.
                Your personal data will not be internationally transferred and
                subject to automated decisions.
              </p>
              <p>
                On the other hand, your data may be communicated to SEAT S.A.
                with address Autovía A-2, Km. 585, Martorell (Barcelona) and VAT
                number A28049161, in order to be able to execute your job
                application.
              </p>
              <h2>Third Party Processors</h2>
              <p>
                Our carefully selected partners and service providers may
                process personal information about you on our behalf as
                described below:
              </p>
              <p>
                “Digital Marketing Service Providers We periodically appoint
                digital marketing agents to conduct marketing activity on our
                behalf, such activity may result in the compliant processing of
                personal information. Our appointed data processors include:
                (i)Prospect Global Ltd (trading as Sopro) Reg. UK Co. 09648733.
                You can contact Sopro and view their privacy policy here:
                http://sopro.io Sopro are registered with the ICO Reg: ZA346877
                their Data Protection Officer can be emailed at: dpo@sopro.io”
              </p>
              <h2>How long will we keep your data?</h2>
              <p>
                SEAT:CODE will keep your personal data for as long as necessary
                to fulfil the purpose for which it was collected:
              </p>
              <ul>
                <li>
                  For the purpose of manage the queries that you send us, is (3)
                  three years since you contact with us, according to the
                  section 72 of the Ley Orgánica 3/2018.
                </li>
                <li>
                  For evaluate your candidacy is (2) two years from the date on
                  which the job application is received.
                </li>
              </ul>
              <h2>What are your rights as data subject?</h2>
              <p>You can exercise the following rights:</p>
              <ul>
                <li>
                  Access: you can obtain from SEAT:CODE confirmation as to
                  whether your personal data are being processed and access to
                  your personal data.
                </li>
                <li>
                  Rectification: you can obtain the rectification of inaccurate
                  personal data concerning you. You also have the right to have
                  incomplete personal data completed.
                </li>
                <li>
                  Erasure: you can request the deletion of your personal data
                  when, among others, the personal data are no longer necessary
                  for the purposes for which they were collected or otherwise
                  processed.
                </li>
                <li>
                  Object: you can object to the processing of your personal
                  data. SEAT:CODE will no longer process your personal data
                  unless it has compelling legitimate grounds for the processing
                  or for the establishment, exercise or defence of legal claims.
                </li>
                <li>
                  Restriction: you can request the restriction of the processing
                  of your personal data where one of the following grounds
                  applies:
                </li>
                <li>
                  The accuracy of the personal data is contested by you, for a
                  period enabling SEAT:CODE to verify the accuracy of such data.
                </li>
                <li>
                  The processing is unlawful, and you oppose the erasure of your
                  personal data and request the restriction of their use
                  instead.
                </li>
                <li>
                  SEAT no longer needs your personal data for the purposes of
                  the processing, but they are required by the data subject for
                  the establishment, exercise or defence of legal claims.
                </li>
                <li>
                  You have objected to the processing, pending the verification
                  whether SEAT:CODE legitimate grounds override yours.
                </li>
                <li>
                  Portability: you can receive the personal data that you
                  provided to SEAT:CODE in a structured, commonly used and
                  machine-readable format. You can also have these data
                  transmitted to another controller.
                </li>
                <li>
                  Consent withdrawal: you can withdraw your consent at any time.
                  Your consent withdrawal will not affect the lawfulness of
                  processing based on consent before its withdrawal.
                </li>
              </ul>
              <p>
                You can exercise these rights by sending an email to
                data.protection@code.seat. You must certify your identity and
                specify the right you wish to exercise. The exercise of these
                rights is free of charge.
              </p>
              <p>
                Should you consider that SEAT:CODE has not processed your
                personal data in accordance with applicable law, you can lodge a
                complaint with the relevant supervisory authority.
              </p>
            </StyledContainer>
          </section>
        </main>
      </WrapperContainer>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
