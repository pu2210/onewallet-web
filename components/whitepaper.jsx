const Whitepaper = () => {
  const { t } = useI18n();
  const PDF_URL = "assets/ONEWALLET-Whitepaper-v1.0.pdf";
  const PDF_NAME = "ONEWALLET-Whitepaper-v1.0.pdf";

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
            <a
              className="btn-dark"
              href={PDF_URL}
              download={PDF_NAME}
            >
              <Icon name="arrowUp" size={14} stroke={2.2} style={{transform: "rotate(180deg)"}}/> {t("wp.download")}
            </a>
            <a
              className="btn-secondary"
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="arrowRight" size={14} stroke={2.2}/> {t("wp.viewOnline")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
window.Whitepaper = Whitepaper;
