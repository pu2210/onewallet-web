const Testimonials = () => {
  const { t } = useI18n();
  const items = [
    { quoteKey: "test.q1", name: "Hana K.",   roleKey: "test.r1" },
    { quoteKey: "test.q2", name: "Trung N.",  roleKey: "test.r2" },
    { quoteKey: "test.q3", name: "Daichi S.", roleKey: "test.r3" },
  ];
  return (
    <section id="testimonials">
      <div className="sec-bg test-bg"></div>
      <div className="container sec-inner">
        <div className="sec-head">
          <span className="sec-eyebrow">{t("test.eyebrow")}</span>
          <h2 className="sec-title">{t("test.title")}</h2>
          <p className="sec-sub">{t("test.sub")}</p>
        </div>
        <div className="testimonials-grid">
          {items.map((it, i) => {
            const initials = it.name.split(" ").map((s) => s[0]).join("").slice(0, 2).toUpperCase();
            return (
              <div className="testimonial-card" key={i}>
                <span className="testimonial-quote-mark">”</span>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-quote">"{t(it.quoteKey)}"</p>
                <div className="testimonial-author">
                  <span className="testimonial-avatar">{initials}</span>
                  <span className="testimonial-meta">
                    <span className="testimonial-name">{it.name}</span>
                    <span className="testimonial-role">{t(it.roleKey)}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
window.Testimonials = Testimonials;
