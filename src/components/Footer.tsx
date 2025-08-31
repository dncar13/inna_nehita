const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">
            "כי קשר טוב עם הורים הוא המפתח לרוגע של הילדים."
          </h3>
          <p className="text-primary-foreground/80 text-lg">
            הצטרפי לסדנה שתשנה את האופן שבו את מתקשרת עם הורים
          </p>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-primary-foreground/60">
            נבנה באהבה על ידי{" "}
            <a 
              href="https://wa.me/972503977708?text=שלום%20גילה%2C%20ראיתי%20את%20האתר%20שלך%20ורציתי%20לשאול%20שאלה"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-primary-foreground/80 underline transition-colors"
              aria-label="פנה לגילה פוגודין בוואטסאפ"
            >
              גילה פוגודין
            </a>
            {" "}❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;