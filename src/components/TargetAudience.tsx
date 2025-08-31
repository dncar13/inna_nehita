const TargetAudience = () => {
  const audiences = [
    {
      icon: "👩‍💼",
      title: "מנהלות מעון/גן",
      description: "לניהול יעיל יותר של הקשר עם הורים ברמה המוסדית"
    },
    {
      icon: "👩‍🏫", 
      title: "גננות ומובילות כיתה",
      description: "לשיפור התקשורת היומיומית עם הורי הילדים"
    },
    {
      icon: "👥",
      title: "צוותים שרוצים שינוי",
      description: "להפוך את ההורים לשותפים אמיתיים בחינוך הילדים"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">👩‍🏫 למי זה מתאים?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            הסדנה מיועדת לכל מי שעובדת עם הורים במסגרת חינוכית
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="workshop-card p-8 rounded-2xl text-center group"
            >
              <div className="feature-icon w-20 h-20 flex items-center justify-center text-3xl mx-auto mb-6">
                {audience.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                {audience.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block p-6 bg-gradient-to-r from-accent-light to-secondary rounded-2xl">
            <p className="text-lg font-medium text-black">
              💡 מתאים גם לצוותים שרוצים להעביר הדרכה פנימית
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;