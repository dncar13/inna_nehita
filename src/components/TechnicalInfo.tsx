const TechnicalInfo = () => {
  const details = [
    {
      icon: "📅",
      title: "תאריכים",
      info: "טרם נקבע מועד – ההרשמה פתוחה והמועד ייקבע לפי הנרשמות"
    },
    {
      icon: "🎯",
      title: "פורמט",
      info: "פרונטלי"
    },
    {
      icon: "⏰",
      title: "משך",
      info: "4 מפגשים × 90 דק׳"
    },
    {
      icon: "💰",
      title: "מחיר",
      info: "200 ש\"ח לסדנה (מחיר סמלי) לכל משתתף"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title mb-6">📅 פרטים טכניים</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {details.map((detail, index) => (
            <div 
              key={index}
              className="workshop-card p-6 rounded-2xl text-center"
            >
              <div className="text-3xl mb-4">{detail.icon}</div>
              <h3 className="text-lg font-semibold mb-3 text-card-foreground">
                {detail.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {detail.info}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-block p-6 bg-gradient-to-r from-cta/10 to-cta/20 rounded-2xl border border-cta/30">
            <p className="text-lg font-semibold text-cta mb-2">
              ⚠️ מספר המקומות מוגבל
            </p>
            <p className="text-muted-foreground">
              הרשמי עכשיו ושמרי מקום!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalInfo;