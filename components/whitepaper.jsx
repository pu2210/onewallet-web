const Whitepaper = () => {
  const { t, lang } = useI18n();
  const { showToast } = useToast();
  const comingSoonMsg = {
    en: "Coming soon",
    ko: "곧 제공 예정",
    ja: "近日公開",
    zh: "即将推出",
  };
  const showSoon = () => showToast(comingSoonMsg[lang] || comingSoonMsg.en, { icon: "clock" });
  return (
    <section id="whitepaper">
      <div className="sec-bg wp-bg"></div>
      <div className="container sec-inner">
        <div className="sec-head">
          <span className="sec-eyebrow">{t("wp.eyebrow")}</span>
          <h2 className="sec-title">{t("wp.title")}</h2>
          <p className="sec-sub">{t("wp.sub")}</p>
        </div>
        <div className="wp-card">
          <div className="icon-tile"><Icon name="file" size={22}/></div>
          <h3>{t("wp.cardTitle")}</h3>
          <p>{t("wp.cardDesc")}</p>
          <div className="wp-actions">
            <button className="btn-dark" onClick={showSoon}><Icon name="arrowUp" size={14} stroke={2.2} style={{transform: "rotate(180deg)"}}/> {t("wp.download")}</button>
            <button className="btn-secondary" onClick={showSoon}><Icon name="arrowRight" size={14} stroke={2.2}/> {t("wp.viewOnline")}</button>
          </div>
        </div>
      </div>
    </section>
  );
};
window.Whitepaper = Whitepaper;
