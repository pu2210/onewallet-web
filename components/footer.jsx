const Footer = () => {
  const { t, lang } = useI18n();
  const { showToast } = useToast();
  const [copied, setCopied] = React.useState(false);
  const addr = "EQCV2rGE-rCcHaiOgrFuqBt98pcFCZEGm47Zs_3mILO-2hxe";
  const copiedMsg = {
    en: "Address copied",
    ko: "주소가 복사되었습니다",
    ja: "アドレスをコピーしました",
    zh: "地址已复制",
  };
  const copy = async () => {
    let ok = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(addr);
        ok = true;
      }
    } catch (e) {}
    if (!ok) {
      // Fallback for non-secure context (file://, http://)
      try {
        const ta = document.createElement("textarea");
        ta.value = addr;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        ok = document.execCommand("copy");
        document.body.removeChild(ta);
      } catch (e) {}
    }
    if (ok) {
      setCopied(true);
      showToast(copiedMsg[lang] || copiedMsg.en, { icon: "check" });
      setTimeout(() => setCopied(false), 1500);
    }
  };
  const comingSoonMsg = {
    en: "Coming soon",
    ko: "곧 제공 예정",
    ja: "近日公開",
    zh: "即将推出",
  };
  const showSoon = (e) => {
    e.preventDefault();
    showToast(comingSoonMsg[lang] || comingSoonMsg.en, { icon: "clock" });
  };
  const scrollToRoadmap = (e) => {
    e.preventDefault();
    const el = document.getElementById("roadmap");
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };
  const tagLines = t("foot.tag").split("\n");
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div>
            <div className="foot-brand">
              <span className="logo-mark"></span>
              <span>ONE Wallet</span>
            </div>
            <div className="foot-tag">
              {tagLines.map((line, i) => (
                <React.Fragment key={i}>
                  {line}{i < tagLines.length - 1 && <br/>}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="foot-col">
            <h5>{t("foot.product")}</h5>
            <a href="https://t.me/onedollar_wallet_bot/app" target="_blank" rel="noopener noreferrer">{t("foot.openWallet")}</a>
            <a href="#roadmap" onClick={scrollToRoadmap}>{t("foot.roadmap")}</a>
          </div>
          <div className="foot-col">
            <h5>{t("foot.resources")}</h5>
            <a href="#" onClick={showSoon}>{t("foot.whitepaper")}</a>
            <a href="#" onClick={showSoon}>{t("foot.press")}</a>
            <a href="#" onClick={showSoon}>{t("foot.library")}</a>
          </div>
          <div className="foot-col">
            <h5>{t("foot.community")}</h5>
            <a href="https://t.me/onedollar_wallet_bot/app" target="_blank" rel="noopener noreferrer"><span className="ico"><Icon name="send" size={13}/></span>Telegram</a>
            <a href="https://x.com/one_wallet_" target="_blank" rel="noopener noreferrer"><span className="ico"><Icon name="twitter" size={13}/></span>X (Twitter)</a>
            <a href="https://www.youtube.com/@One_Wallet_Official" target="_blank" rel="noopener noreferrer"><span className="ico"><Icon name="youtube" size={13}/></span>YouTube</a>
            <a href="mailto:support@onewallet.store"><span className="ico"><Icon name="mail" size={13}/></span>{t("foot.email")}</a>
          </div>
          <div className="foot-col">
            <h5>{t("foot.legal")}</h5>
            <a href="#privacy">{t("foot.privacy")}</a>
            <a href="#terms">{t("foot.terms")}</a>
          </div>
        </div>
        <div className="foot-contract">
          <div>
            <div className="lab">{t("foot.contract")}</div>
            <div className="addr">{addr}</div>
          </div>
          <div className="cp">
            <button className="btn-copy" onClick={copy}>
              <Icon name="copy" size={13}/> {copied ? t("foot.copied") : t("foot.copy")}
            </button>
          </div>
        </div>
        <div className="foot-bot">
          <div>{t("foot.copyright")}</div>
          <div className="links">
            <a href="#privacy">{t("foot.privacy")}</a>
            <a href="#terms">{t("foot.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
window.Footer = Footer;
