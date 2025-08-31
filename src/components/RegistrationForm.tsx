import { Button } from "@/components/ui/button";

const RegistrationForm = () => {
  const whatsappLink = "https://wa.me/972522880109?text=שלום%20אני%20רוצה%20להירשם%20לסדנה%20לתקשורת%20מיטיבה%20עם%20הורים";

  const handleWhatsAppClick = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="registration-form" className="py-20 px-6 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title mb-6">✍️ הרשמי כאן – נשמור לך מקום</h2>
          <p className="text-lg text-muted-foreground">
            מספר המקומות מוגבל – הרשמי עכשיו!
          </p>
        </div>
        
        <div className="workshop-card p-8 md:p-12 rounded-3xl text-center">
          <div className="max-w-md mx-auto">
            <div className="mb-8">
              <div className="text-6xl mb-4">📲</div>
              <h3 className="text-xl font-semibold mb-3 text-primary">איך זה יעבוד?</h3>
              <div className="text-right space-y-2 text-muted-foreground">
                <p>• לוחצת על הכפתור</p>
                <p>• וואטסאפ נפתח עם מספר הטלפון שלי</p>
                <p>• בשדה ההודעה כבר מחכה הטקסט המוכן</p>
                <p>• את רק לוחצת שליחה ✅</p>
              </div>
            </div>
            
            <Button 
              onClick={handleWhatsAppClick}
              variant="cta"
              size="lg"
              className="w-full text-lg py-6"
              aria-label="פתח וואטסאפ להרשמה לסדנת תקשורת מיטיבה עם הורים"
            >
              שמרי לי מקום בסדנה &gt;&gt;
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;