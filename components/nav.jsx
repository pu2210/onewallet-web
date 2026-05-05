const Nav = ({ onBuy }) => {
  const { t, lang, setLang, langs } = useI18n();
  const { showToast } = useToast();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  const comingSoonMsg = {
    en: "Coming soon",
    ko: "곧 제공 예정",
    ja: "近日公開",
    zh: "即将推出",
  };

  const linkKeys = [
    { id: "about",       key: "nav.about" },
    { id: "technology",  key: "nav.technology" },
    { id: "features",    key: "nav.features" },
    { id: "ecosystem",   key: "nav.ecosystem" },
    { id: "tokenomics",  key: "nav.tokenomics" },
    { id: "roadmap",     key: "nav.roadmap" },
    { id: "team",        key: "nav.team" },
    { id: "whitepaper",  key: "nav.whitepaper" },
    { id: "press",       key: "nav.press",     comingSoon: true },
    { id: "resources",   key: "nav.resources", comingSoon: true },
  ];
  const handleClick = (l) => {
    if (l.comingSoon) {
      showToast(comingSoonMsg[lang] || comingSoonMsg.en, { icon: "clock" });
      return;
    }
    const el = document.getElementById(l.id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  React.useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const current = langs.find((l) => l.code === lang) || langs[0];

  return (
    <div className="nav-wrap">
      <div className="nav">
        <div className="nav-logo">
          <span className="logo-mark"></span>
          <span>ONE WALLET</span>
        </div>
        <div className="nav-links">
          {linkKeys.map((l) => (
            <button key={l.id} onClick={() => handleClick(l)}>
              {t(l.key)}
            </button>
          ))}
        </div>
        <div className="nav-cta">
          <div className="lang-wrap" ref={ref}>
            <button
              className={`lang-pill ${open ? "open" : ""}`}
              onClick={() => setOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={open}
            >
              <Icon name="globe" size={13} stroke={2}/>
              <span className="lang-label">{current.label}</span>
              <Icon name="chevronDown" size={11} stroke={2}/>
            </button>
            {open && (
              <div className="lang-menu" role="listbox">
                {langs.map((l) => (
                  <button
                    key={l.code}
                    role="option"
                    aria-selected={l.code === lang}
                    className={`lang-item ${l.code === lang ? "active" : ""}`}
                    onClick={() => { setLang(l.code); setOpen(false); }}
                  >
                    <span className="lang-short">{l.short}</span>
                    <span className="lang-name">{l.label}</span>
                    {l.code === lang && <Icon name="check" size={12} stroke={2.4}/>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
window.Nav = Nav;
