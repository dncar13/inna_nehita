import { Button } from "@/components/ui/button";
import {
  Gift,
  HandHeart,
  MessageCircleHeart,
  Rocket,
  Sparkles,
} from "lucide-react";

const marketingPoints = [
  {
    title: "פתיחה שמדליקה סקרנות",
    description:
      "בואו לגלות את המשפט הקטן שיכול להפוך הורה לשגריר של הגן – או לסגור לו את הלב.",
    icon: Sparkles,
  },
  {
    title: "הבטחת תוצאה",
    description:
      "תוך שעה יוצאים עם ארגז מילים, מחוות ותסריטי שיחה שמחזקים אמון כבר מהשלום הראשון.",
    icon: Rocket,
  },
  {
    title: "חוויית התרגול",
    description:
      "משחקי תפקידים מהחיים עצמם: מנהלת מול הורה, שני סבבים שמראים איך שינוי ניסוח משנה תחושה.",
    icon: MessageCircleHeart,
  },
  {
    title: "ערך לקחת הביתה",
    description:
      "כל משתתפת בוחרת משפט מחבר אחד ומשימה אחת ליישום מיידי מול הורים כבר מחר בבוקר.",
    icon: Gift,
  },
  {
    title: "טון ושפה",
    description:
      "חם, אמפתי, בלי דרמה – ממוקד בבניית גשר ולא חומה.",
    icon: HandHeart,
  },
] as const;

const MarketingShowcase = () => {
  const scrollToForm = () => {
    document.getElementById("registration-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-secondary/40 via-white to-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="inline-block px-4 py-2 bg-white/80 border border-border rounded-full text-sm font-semibold text-cta shadow-sm">
            מה מחכה לכן בסדנה
          </p>
          <h2 className="section-title mb-4">הגשר השיווקי – בגרסה חיה</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            חלק ההיכרות שמדליק את הקבוצה מהשנייה הראשונה ומראה איך משפט אחד
            יכול לפתוח או לסגור לב.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketingPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="workshop-card h-full p-6 rounded-2xl border border-border/70 bg-white/85 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="feature-icon w-12 h-12 flex items-center justify-center text-primary shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2 text-right">
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col lg:flex-row gap-4 items-center justify-between bg-white/90 border border-border rounded-2xl p-6 shadow-sm">
          <div className="text-right space-y-2">
            <p className="text-sm font-semibold text-primary tracking-tight">
              הבטחה ברורה
            </p>
            <p className="text-card-foreground text-lg font-semibold">
              תוך שעה אתן יוצאות עם ניסוחים, תסריטים ומשפט מחבר לביצוע מיידי.
            </p>
            <p className="text-muted-foreground">
              רוצים לראות את זה קורה בלייב? נשמור לכן מקום ונעשה חיבור כבר במפגש הראשון.
            </p>
          </div>
          <Button
            variant="hero"
            size="lg"
            onClick={scrollToForm}
            className="w-full lg:w-auto"
            aria-label="מעבר לטופס ההרשמה לסדנה"
          >
            שמרו לי מקום &gt;&gt;
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketingShowcase;
