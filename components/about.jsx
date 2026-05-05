const Partners = () => {
  const { t } = useI18n();
  const list = ["TonX","TRC-20","ERC-20","TonKeeper","TonPass","MonkeyTree","TON"];
  return (
    <div className="partners">
      <div className="container">
        <div className="partners-eyebrow">{t("partners.eyebrow")}</div>
        <div className="partners-row">
          {list.map((p) => <span key={p}>{p}</span>)}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const { t } = useI18n();
  return (
    <section id="about">
      <div className="sec-bg about-bg"></div>
      <div className="container sec-inner">
        <div className="sec-head">
          <span className="sec-eyebrow">{t("about.eyebrow")}</span>
          <h2 className="sec-title">{t("about.title")}</h2>
          <p className="sec-sub">{t("about.sub")}</p>
        </div>
        <div className="two-col">
          <div className="about-card">
            <div className="about-card-head">
              <div className="about-icon"><Icon name="shield" size={18}/></div>
              <h3>{t("about.problems.title")}</h3>
            </div>
            <ul className="about-list">
              <li><span className="num">1</span>{t("about.problems.1")}</li>
              <li><span className="num">2</span>{t("about.problems.2")}</li>
              <li><span className="num">3</span>{t("about.problems.3")}</li>
            </ul>
          </div>
          <div className="about-card">
            <div className="about-card-head">
              <div className="about-icon"><Icon name="check" size={18}/></div>
              <h3>{t("about.solution.title")}</h3>
            </div>
            <p className="solution-text">{t("about.solution.text")}</p>
            <ul className="about-list" style={{marginTop: 14}}>
              <li><span className="num">✓</span>{t("about.solution.1")}</li>
              <li><span className="num">✓</span>{t("about.solution.2")}</li>
              <li><span className="num">✓</span>{t("about.solution.3")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
window.About = About;
window.Partners = Partners;
