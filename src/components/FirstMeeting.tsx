const FirstMeeting = () => {
  const prompts = [
    "קחו כמה דקות ותיזכרו בהורה שאתם – זיכרון של אמון במעון (או להפך).",
    "איך נראיתם מול הצוות החינוכי כשהרגשתם בטוחות? ומה קרה כשהרגשתם אחרת?"
  ];

  const questions = [
    "מה ההורה מביא איתו למעון? עם איזו תחושה בבטן או מחשבה הוא מגיע?",
    "מה מנהלת מביאה איתה? אילו מחשבות ורגשות היא מביאה?",
    "מה חשוב שיהיה בין השניים – גשר של אמון או חומה?"
  ];

  const simulations = [
    "עובדות בזוגות: אחת מנהלת ואחת הורה, עם משפטי פתיחה לדוגמה.",
    "סבב ראשון: תגובה אמפתית שמחברת ומרככת.",
    "סבב שני: תגובה קצרה וחותכת – בודקות מה זה עושה לתחושה.",
    "שיח מסכם: מה בונה גשר, מה בונה חומה, ואילו מילים נשארות איתנו."
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-accent/10 via-background to-muted/40">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="inline-block px-4 py-2 bg-white shadow-sm rounded-full text-sm font-semibold text-cta mb-4">
            מפגש ראשון
          </p>
          <h2 className="section-title mb-4">בין הבית למעון – גשר ראשון של אמון</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            פתיחה חווייתית שמייצרת שפה משותפת, מקום בטוח לשיתוף ותרגול חי של חיבור אמפתי.
          </p>
        </div>

        <div className="workshop-card p-8 md:p-10 rounded-3xl space-y-10">
          <div className="bg-white/70 rounded-2xl p-6 shadow-sm border border-border">
            <p className="text-sm text-muted-foreground mb-3">ציטוט השראה</p>
            <blockquote className="text-xl font-semibold leading-relaxed text-primary">
              “צריך כפר שלם לגדל ילד והורה ומחנך הם לב הכפר”
            </blockquote>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-muted/40 border border-border shadow-sm">
              <h3 className="text-lg font-semibold text-card-foreground mb-3">תרגיל היכרות</h3>
              <p className="text-muted-foreground mb-3">
                חימום עדין שמביא את כל המשתתפות לזיכרון אישי ומגדיר את הטון האמפתי לסדנה.
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pr-4">
                {prompts.map((prompt, idx) => (
                  <li key={idx}>{prompt}</li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-accent/20 border border-border shadow-sm">
              <h3 className="text-lg font-semibold text-card-foreground mb-3">שאלות פתיחה</h3>
              <p className="text-muted-foreground mb-3">
                שיח מודרך שמייצר ראייה דו־צדדית והבנה של הרגש שמגיע מצד ההורים ומצד ההנהלה.
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pr-4">
                {questions.map((question, idx) => (
                  <li key={idx}>{question}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-white to-secondary border border-border shadow-sm">
            <h3 className="text-lg font-semibold text-card-foreground mb-3">תרגיל סימולציות – גשר או חומה</h3>
            <p className="text-muted-foreground mb-4">
              משחק תפקידים קצר שממחיש איך מילה אחת יכולה לבנות אמון או לסגור דלת.
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc pr-4">
              {simulations.map((simulation, idx) => (
                <li key={idx}>{simulation}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 border border-border shadow-sm">
            <h3 className="text-lg font-semibold text-card-foreground mb-3">סיום ולקחת הביתה</h3>
            <p className="text-muted-foreground">
              כל משתתפת משתפת מה דבר אחד היא לוקחת מהיום, ומשאירה לעצמה משימת המשך:
              לחשוב עד המפגש הבא על מה מאתגר אותה ביחסים מול ההורים כדי שנעבוד על זה יחד.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstMeeting;
