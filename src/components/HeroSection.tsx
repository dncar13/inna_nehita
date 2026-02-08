import { Button } from "@/components/ui/button";
import heroImage from "@/assets/workshop-hero-new.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="צוות חינוכי של גננות ומנהלות מקצועיות עם ילדים סביב שולחן בסביבה חמה וטבעית בגן ילדים, אווירה מזמינה ומקצועית המדגימה תקשורת איכותית בחינוך הגיל הרך"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/70" aria-hidden="true"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6 backdrop-blur-sm text-white">
            ✨ סדנה חדשה ומיוחדת
          </span>
          <h1 className="hero-title mb-6 text-white">
            בין הבית למעון – לבנות גשר של אמון וביטחון
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white">
            סדנה למנהלות, גננות ומובילות כיתה שרוצות להפוך את ההורים לשותפים רגועים ובטוחים
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-lg md:text-xl leading-relaxed text-white">
            5 מפגשים בני עד 90 דק׳, בקבוצה אינטימית של עד 10 משתתפות, עם כלים מעשיים לבניית אמון, 
            להפחתת התנגדויות ולהפיכת הקשר לשותפות שמורגשת לילדים.
          </p>
        </div>
        
        <Button 
          variant="hero"
          size="lg"
          onClick={scrollToForm}
          className="text-xl px-10 py-6 bg-cta hover:bg-cta-hover transform hover:scale-105 transition-all duration-300 shadow-2xl text-white"
          aria-label="עבור לטופס הרשמה לסדנת בין הבית למעון"
        >
          אני רוצה להירשם &lt;&lt;
        </Button>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
    </section>
  );
};

export default HeroSection;
