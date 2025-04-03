import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Footer from "./components/Footer";
import "./css/App.css";
import i18n from "./i18n";

// Product Pricing Pages
import PricingWebsite from "./pages/ProductPricing/PricingWebsite";
import PricingAI from "./pages/ProductPricing/PricingAI";
import PricingSocialMedia from "./pages/ProductPricing/PricingSocialMedia";
import PricingChatbots from "./pages/ProductPricing/PricingChatbots";
import PricingCRM from "./pages/ProductPricing/PricingCRM";
import PricingWebApp from "./pages/ProductPricing/PricingWebApp";
import PricingDesign from "./pages/ProductPricing/PricingDesign"; // ✅ NEW import
import Contact from "./pages/Contact";
// Add this at the top of your file
import { init } from '@emailjs/browser';

// Add this before your component definition
init("Mpzq5Vd4F3OzDwnXw");

// Auto language switcher using URL prefix (e.g. /en or /al)
function LangRouterWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    const lang = location.pathname.split("/")[1];
    if (["en", "al"].includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [location.pathname]);

  return children;
}

function App() {
  return (
    <Router>
      <LangRouterWrapper>
        <Header style={{ zIndex: 1000 }} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/en" replace />} />

            {/* English */}
            <Route path="/en" element={<Home />} />
            <Route path="/en/services" element={<Services />} />
            <Route path="/en/contact" element={<Contact />} />
            <Route path="/en/about" element={<About />} />
            <Route path="/en/pricing/website" element={<PricingWebsite />} />
            <Route path="/en/pricing/ai" element={<PricingAI />} />
            <Route path="/en/pricing/social-media" element={<PricingSocialMedia />} />
            <Route path="/en/pricing/chatbots" element={<PricingChatbots />} />
            <Route path="/en/pricing/crm" element={<PricingCRM />} />
            <Route path="/en/pricing/webapp" element={<PricingWebApp />} />
            <Route path="/en/pricing/design" element={<PricingDesign />} /> {/* ✅ NEW */}

            {/* Albanian */}
            <Route path="/al" element={<Home />} />
            <Route path="/al/services" element={<Services />} />
            <Route path="/al/contact" element={<Contact />} />
            <Route path="/al/about" element={<About />} />
            <Route path="/al/pricing/website" element={<PricingWebsite />} />
            <Route path="/al/pricing/ai" element={<PricingAI />} />
            <Route path="/al/pricing/social-media" element={<PricingSocialMedia />} />
            <Route path="/al/pricing/chatbots" element={<PricingChatbots />} />
            <Route path="/al/pricing/crm" element={<PricingCRM />} />
            <Route path="/al/pricing/webapp" element={<PricingWebApp />} />
            <Route path="/al/pricing/design" element={<PricingDesign />} /> {/* ✅ NEW */}
          </Routes>
        </div>
        <Footer style={{ zIndex: 1000 }} />
      </LangRouterWrapper>
    </Router>
  );
}

export default App;
