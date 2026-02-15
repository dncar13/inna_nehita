import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TargetAudience from "@/components/TargetAudience";
import RegistrationForm from "@/components/RegistrationForm";
import TechnicalInfo from "@/components/TechnicalInfo";
import Footer from "@/components/Footer";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import MarketingShowcase from "@/components/MarketingShowcase";

const Index = () => {
  return (
    <>
      {/* Skip to content link for screen readers */}
      <a 
        href="#main-content" 
        className="skip-link"
        aria-label="דלג לתוכן הראשי"
      >
        דלג לתוכן הראשי
      </a>
      
      {/* Accessibility Menu */}
      <AccessibilityMenu />
      
      <div className="min-h-screen">
        <main id="main-content" role="main">
          <HeroSection />
          <MarketingShowcase />
          <BenefitsSection />
          <TargetAudience />
          <RegistrationForm />
          <TechnicalInfo />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
