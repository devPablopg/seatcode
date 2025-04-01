import { lazy, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import GlobalAppStyles from "./AppStyles";
import CookieConsentBanner from "modules/shared/ui/layout/components/CookieConsentBanner";

const Home = lazy(() => import("./modules/home/ui/layout/pages/Home"));
const About = lazy(() => import("./modules/about/ui/layout/pages/AboutUs"));
const WorkWithUs = lazy(
  () => import("./modules/workwithus/ui/layout/pages/WorkWithUs")
);
const Oursolutions = lazy(
  () => import("./modules/solutions/ui/layout/pages/OurSolutions")
);
const Partnership = lazy(
  () => import("./modules/partnership/ui/layout/pages/Partnership")
);
const NotFoundPage = lazy(
  () => import("./modules/notFound/ui/layout/pages/NotFoundPage")
);
const TermsOfUse = lazy(() => import("./modules/company/ui/pages/TermsOfUse"));
const PrivacyPolicy = lazy(
  () => import("./modules/company/ui/pages/PrivacyPolicy")
);
const Integrity = lazy(() => import("./modules/company/ui/pages/Integrity"));
const Whistleblower = lazy(
  () => import("./modules/company/ui/pages/Whistleblower")
);

const App = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.Optanon && typeof window.Optanon === "function") {
        window.Optanon();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <GlobalAppStyles />
      {window.Optanon && typeof window.Optanon === "function" && (
        <CookieConsentBanner />
      )}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/oursolutions" element={<Oursolutions />} />
          <Route path="/workwithus" element={<WorkWithUs />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/integrity-and-compliance" element={<Integrity />} />
          <Route path="/whistleblower-channel" element={<Whistleblower />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
