const Features = () => {
  const { t } = useI18n();
  const list = [
    { icon: "transfer", titleKey: "feat.p2p.title",      descKey: "feat.p2p.desc" },
    { icon: "qr",       titleKey: "feat.qr.title",       descKey: "feat.qr.desc" },
    { icon: "store",    titleKey: "feat.merchant.title", descKey: "feat.merchant.desc" },
    { icon: "grid",     titleKey: "feat.miniapp.title",  descKey: "feat.miniapp.desc" },
    { icon: "coin",     titleKey: "feat.mining.title",   descKey: "feat.mining.desc" },
    { icon: "code",     titleKey: "feat.dev.title",      descKey: "feat.dev.desc" },
  ];
  return (
    <section id="features">
      <div className="sec-bg features-bg"></div>
      <div className="container sec-inner">
        <div className="sec-head">
          <span className="sec-eyebrow">{t("feat.eyebrow")}</span>
          <h2 className="sec-title">{t("feat.title")}</h2>
        </div>
        <div className="features-grid">
          {list.map((f) => (
            <div className="feature-card" key={f.titleKey}>
              <div className="icon-tile"><Icon name={f.icon} size={18}/></div>
              <h3>{t(f.titleKey)}</h3>
              <p>{t(f.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
window.Features = Features;
