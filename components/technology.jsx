const Technology = () => {
  const { t } = useI18n();
  const cards = [
    { icon: "shield", titleKey: "tech.mpc.title", tagKey: "tech.mpc.tag", descKey: "tech.mpc.desc" },
    { icon: "users", titleKey: "tech.social.title", tagKey: "tech.social.tag", descKey: "tech.social.desc" },
    { icon: "fingerprint", titleKey: "tech.bio.title", tagKey: "tech.bio.tag", descKey: "tech.bio.desc" },
  ];
  return (
    <section id="technology">
      <div className="sec-bg tech-bg"></div>
      <div className="container sec-inner">
        <div className="sec-head">
          <span className="sec-eyebrow">{t("tech.eyebrow")}</span>
          <h2 className="sec-title">{t("tech.title")}</h2>
          <p className="sec-sub">{t("tech.sub")}</p>
        </div>
        <div className="tech-grid">
          {cards.map((c) => (
            <div className="tech-card" key={c.titleKey}>
              <div className="icon-tile"><Icon name={c.icon} size={20}/></div>
              <h3>{t(c.titleKey)}</h3>
              <span className="tech-tag">{t(c.tagKey)}</span>
              <p>{t(c.descKey)}</p>
            </div>
          ))}
        </div>
        <div className="tech-card tech-card-wide">
          <div className="icon-tile"><Icon name="key" size={20}/></div>
          <h3>{t("tech.recovery.title")}</h3>
          <p>{t("tech.recovery.desc")}</p>
        </div>
      </div>
    </section>
  );
};
window.Technology = Technology;
