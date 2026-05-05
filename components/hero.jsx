const Hero = ({ onBuy }) => {
  const { t } = useI18n();
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="container hero-inner">
        <span className="pill-eyebrow"><span className="dot"></span>{t("hero.eyebrow")}</span>
        <h1><span className="accent">ONE</span> Wallet</h1>
        <div className="hero-tagline">{t("hero.tagline")}</div>
        <p className="hero-desc">{t("hero.desc")}</p>
        <div className="hero-chips">
          <span className="chip"><Icon name="shield" size={14}/> {t("hero.chip.mpc")}</span>
          <span className="chip"><Icon name="users" size={14}/> {t("hero.chip.social")}</span>
          <span className="chip"><Icon name="send" size={14}/> {t("hero.chip.p2p")}</span>
        </div>
        <a className="btn-hero-primary" href="https://t.me/onedollar_wallet_bot/app" target="_blank" rel="noopener noreferrer">
          <Icon name="sendFill" size={16} stroke={2}/> {t("hero.cta.useApp")}
          <Icon name="arrowRight" size={16} stroke={2}/>
        </a>
        <div className="hero-second-row">
          <button className="btn-secondary" onClick={() => {
            const el = document.getElementById("features");
            if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
          }}><Icon name="sparkle" size={14}/> {t("hero.cta.features")}</button>
          <button className="btn-secondary" onClick={() => {
            const el = document.getElementById("tokenomics");
            if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
          }}><Icon name="clock" size={14}/> {t("hero.cta.tokenomics")}</button>
          <button className="btn-secondary" onClick={() => {
            const el = document.getElementById("whitepaper");
            if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
          }}><Icon name="file" size={14}/> {t("hero.cta.whitepaper")}</button>
        </div>
        <div className="hero-video-row">
          <a href="https://www.youtube.com/watch?v=tNUpoHjdW_Q" target="_blank" rel="noopener noreferrer" style={{cursor: "pointer"}}><Icon name="play" size={12}/> {t("hero.cta.video")}</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-label"><Icon name="users" size={11}/> {t("hero.stat.users")}</span>
            <div className="stat-val">12.5K+</div>
          </div>
          <div className="stat">
            <span className="stat-label"><Icon name="bar" size={11}/> {t("hero.stat.volume")}</span>
            <div className="stat-val">$1.9M</div>
          </div>
          <div className="stat">
            <span className="stat-label"><Icon name="globe" size={11}/> {t("hero.stat.countries")}</span>
            <div className="stat-val">38</div>
          </div>
          <div className="stat">
            <span className="stat-label"><Icon name="coins" size={11}/> {t("hero.stat.sold")}</span>
            <div className="stat-val">245K</div>
          </div>
        </div>
      </div>
    </section>
  );
};
window.Hero = Hero;
