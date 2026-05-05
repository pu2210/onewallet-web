const Ecosystem = () => {
  const { t } = useI18n();
  const row1 = [
    { icon: "coin",  titleKey: "eco.mining.title",   descKey: "eco.mining.desc" },
    { icon: "users", titleKey: "eco.referral.title", descKey: "eco.referral.desc" },
    { icon: "pie",   titleKey: "eco.revenue.title",  descKey: "eco.revenue.desc" },
  ];
  const row2 = [
    { icon: "store", titleKey: "eco.merchant.title", descKey: "eco.merchant.desc" },
    { icon: "db",    titleKey: "eco.supply.title",   descKey: "eco.supply.desc" },
  ];
  return (
    <section id="ecosystem">
      <div className="sec-bg eco-bg"></div>
      <div className="container sec-inner">
        <div className="sec-head">
          <span className="sec-eyebrow">{t("eco.eyebrow")}</span>
          <h2 className="sec-title">{t("eco.title")}</h2>
          <p className="sec-sub">{t("eco.sub")}</p>
        </div>
        <div className="eco-row1">
          {row1.map((c) => (
            <div className="eco-card" key={c.titleKey}>
              <div className="icon-tile"><Icon name={c.icon} size={18}/></div>
              <h3>{t(c.titleKey)}</h3>
              <p>{t(c.descKey)}</p>
            </div>
          ))}
        </div>
        <div className="eco-row2">
          {row2.map((c) => (
            <div className="eco-card" key={c.titleKey}>
              <div className="icon-tile"><Icon name={c.icon} size={18}/></div>
              <h3>{t(c.titleKey)}</h3>
              <p>{t(c.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
window.Ecosystem = Ecosystem;
