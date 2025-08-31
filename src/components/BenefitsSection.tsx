const BenefitsSection = () => {
  const benefits = [
    {
      icon: "🤝",
      title: "פחות התנגדויות, יותר שיתוף פעולה עם הורים",
      description: "למדי איך להפוך קונפליקטים לשיחות בונות"
    },
    {
      icon: "💬",
      title: "שפה אחידה ומקצועית לצוות",
      description: "כלים מעשיים שכל הצוות יוכל להשתמש בהם"
    },
    {
      icon: "🎯",
      title: "כלים פשוטים לניהול שיחה רגישה",
      description: "גם במצבים מאתגרים ולחוצים"
    },
    {
      icon: "💪",
      title: "תחושת ביטחון במפגש עם הורים",
      description: "גם מול הורה 'קשה' או מאתגר"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">🎯 מה תרוויחי מהסדנה?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            כלים מעשיים שישנו את האופן שבו את מתקשרת עם הורים
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="workshop-card p-8 rounded-2xl group"
            >
              <div className="flex items-start gap-6">
                <div className="feature-icon w-16 h-16 flex items-center justify-center text-2xl flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;