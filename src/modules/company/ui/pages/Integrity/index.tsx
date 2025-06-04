import Footer from "modules/shared/ui/layout/components/Footer";
import WrapperContainer, { StyledContainer } from "../styles/WrapperContainer";
import { Routes } from "infrastructure/routes/routes";
import LinkIcon from "assets/img/icons/link.svg?react";

const Integrity = () => {
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
              <h1>Integrity and Compliance.</h1>
              <p>
                For SEAT:CODE, sustainable success of the Company depends on the
                commitment with complying with the law and the internal
                regulations of SEAT:CODE and the Volkswagen Group, together with
                integrity and transparency in company culture and business
                relationships.
              </p>
              <p>
                This is how we ensure the Good reputation of our company, the
                trust of our customers and business partners and the well-being
                of our employees.
              </p>
              <h4>Integrity </h4>
              <p>
                Business and values go hand in hand, that is why integrity is a
                fundamental pillar of our corporate strategy.
              </p>
              <h4>Compliance </h4>
              <p>
                We advocate for a respectful and honest behavior that helps to
                comply with the norms, principles and values set forth in its
                Code of Conduct.
              </p>
              <h4>Whistleblower Channel </h4>
              <p>
                We have tools and processes to prevent and combat irregularities
                and conduct contrary to the principles, values, legislation and
                internal regulations. For this reason, we make the following
                contact points available to our employees, business partners,
                suppliers and third parties to report Reasonable Suspicions of
                Regulatory Violations committed by SEAT employees.
              </p>
              <h3>Autonomous and independent control body</h3>
              <p>
                In 2016, SEAT’s Board of Directors reinforced the risk
                management and regulatory compliance model by creating an
                autonomous and independent control body called the Audit,
                Compliance and Good Governance Committee (CACBG). Delegated
                Commission of the Board of Directors of SEAT SA, in charge of
                the functions of compliance with the Law on Auditing of
                Accounts, the Law on Capital Companies, the national and
                international standards that regulate the ethics and compliance
                models, also taking into account the criteria described in
                Spanish criminal law (art. 31 bis Penal Code), the Good
                Governance Code, the CACBG’s own Regulations and the internal
                regulations on matters related to the Compliance and Integrity
                and Risk Management system.
              </p>
              <p>
                CACBG is currently is currently made up of the following members
                of the SEAT Board of Directors: Luis Comas Martínez de Tejada,
                currently appointed as president; Dr. Stefan Piëch, and Mr. Mark
                Philipp Porsche.
              </p>
              <h2>Integrity</h2>
              <p>
                For SEAT: CODE, business and values go hand in hand, which is
                why integrity is a fundamental pillar of our strategy. Sustained
                success cannot be achieved just by adhering to rules and
                processes, but it is our inner attitude that causes us to act
                correctly, even in the absence of written rules. We are
                committed to integrity and regulatory compliance as key elements
                to strengthen the trust of our employees, customers, business
                partners and the general public. Our conduct, attitude and
                commitment contribute to the success of SEAT:CODE by forging the
                reputation of our brand, which is our greatest asset. Integrity
                is a key element for the entire Volkswagen Group. Find more
                information{" "}
                <a
                  href="https://www.volkswagenag.com/en/sustainability/integrity.html"
                  target="_blank"
                >
                  here
                </a>.
              </p>
              <h2>Conduct</h2>
              <h4>Code of Conduct for Employees</h4>
              <p>
                OUR CODE embodies the principles and values that identify us as
                a brand and offers our employees guidance in everyday situations
                and in the decision-making process.
              </p>
              <p>
                We are one when we all live the values and principles of OUR
                CODE and this implies being: Committed individuals, Reliable
                colleagues, Responsible partners and Good corporate citizens.
              </p>
              <p>
                <a
                  href="/seatcode/src/assets/docs/Codigo_Conducta_MAY25.pdf"
                  target="_blank"
                >
                  Descargar versión en español
                </a>
              </p>
              <p>
                <a
                  href="/seatcode/src/assets/docs/Code_of_Conduct_MAY25.pdf"
                  target="_blank"
                >
                  Download English version
                </a>
              </p>
              <h4>Code of Conduct for Business Partners</h4>
              <p>
                SEAT:CODE makes a specific Code of Conduct available to its
                business partners. This Code specifies the expectations of the
                Volkswagen Group regarding the attitude and behavior of its
                suppliers and business partners in business activities. The
                requirements contained in the Code of Conduct for business
                Partners form the basis for a successful business relationship
                between the Volkswagen Group and its partners.
              </p>
              <p>
                <a
                  href="/seatcode/src/assets/docs/CdC_Socios_Comerciales_2023_ESP-ENG.pdf"
                  target="_blank"
                >
                  Download English & Spanish version
                </a>
              </p>
              <h2>Anti-corruption</h2>
              <p>
                We advocate for the development of a competitive, transparent,
                sustainable and successful business activity, in the total
                absence of corruption. Therefore, we reject and combat any
                corrupt conduct that is detrimental to the company and its
                reputation. To help employees maintain transparent relationships
                and guide in relations with the Public Sector, we have the
                following Guides:
              </p>
              <p>
                <a
                  href="/seatcode/src/assets/docs/Guia_anticorrupcion_ES_10_2023.pdf"
                  target="_blank"
                >
                  Descargar versión en español
                </a>
              </p>
              <p>
                <a
                  href="/seatcode/src/assets/docs/Anticorruption_Guide_EN_10_2023.pdf"
                  target="_blank"
                >
                  Download English version
                </a>
              </p>
              <h2>Business & Human Rights</h2>
              <p>
                Respect for human rights is a priority for SEAT: CODE. We are
                convinced that the sustainability of the business depends on our
                ethical and integrity performance. For this reason, we are fully
                committed to our human rights responsibility in the context of
                our business operations. We respect, protect and promote the
                current provisions on the protection of human and childhood
                rights as fundamental and universal premises. We reject any use
                of child exploitation, forced or compulsory labor, as well as
                any form of modern slavery and human trafficking. Our commitment
                to human rights is manifested through the Code of Conduct and
                the Code of Conduct for business Partners.
              </p>
            </StyledContainer>
          </section>
        </main>
      </WrapperContainer>
      <Footer />
    </>
  );
};

export default Integrity;
