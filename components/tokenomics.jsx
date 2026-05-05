const Donut = ({ data, size = 240, thickness = 36 }) => {
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  const total = data.reduce((s, d) => s + d.pct, 0);
  let acc = 0;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <g transform={`translate(${size/2},${size/2}) rotate(-90)`}>
        {data.map((d, i) => {
          const len = (d.pct / total) * c;
          const seg = (
            <circle key={i}
              r={r} cx={0} cy={0}
              fill="none"
              stroke={d.color}
              strokeWidth={thickness}
              strokeDasharray={`${len} ${c - len}`}
              strokeDashoffset={-acc}
              style={{transition: "stroke-dasharray .8s"}}
            />
          );
          acc += len;
          return seg;
        })}
      </g>
    </svg>
  );
};

const Tokenomics = () => {
  const { t } = useI18n();
  const data = [
    { nameKey: "tok.mining",    pct: 25, qty: "2,500,000", color: "#16A34A" },
    { nameKey: "tok.ecoFund",   pct: 23, qty: "2,300,000", color: "#F5B547" },
    { nameKey: "tok.team",      pct: 17, qty: "1,700,000", color: "#22C2C0" },
    { nameKey: "tok.liquidity", pct: 15, qty: "1,500,000", color: "#22D38B" },
    { nameKey: "tok.marketing", pct: 10, qty: "1,000,000", color: "#A87CF5" },
    { nameKey: "tok.presale",   pct: 10, qty: "1,000,000", color: "#FF6B5B" },
  ];
  const utility = [
    { icon: "dollar",  titleKey: "tok.util.mining.title",   descKey: "tok.util.mining.desc" },
    { icon: "card",    titleKey: "tok.util.payment.title",  descKey: "tok.util.payment.desc" },
    { icon: "calendar",titleKey: "tok.util.platform.title", descKey: "tok.util.platform.desc" },
    { icon: "coins",   titleKey: "tok.util.eco.title",      descKey: "tok.util.eco.desc" },
  ];
  return (
    <section id="tokenomics">
      <div className="sec-bg tokens-bg"></div>
      <div className="container sec-inner">
        <div className="sec-head">
          <span className="sec-eyebrow">{t("tok.eyebrow")}</span>
          <h2 className="sec-title">{t("tok.title")}</h2>
        </div>
        <div className="token-supply">
          <div className="label">{t("tok.totalSupply")}</div>
          <div className="val">10,000,000 <span style={{color: "var(--accent)"}}>$1</span></div>
          <div className="note"><Icon name="shield" size={11}/> {t("tok.noIssuance")}</div>
        </div>
        <div className="token-pair">
          <div className="token-pill">
            <div className="label">{t("tok.tokenName")}</div>
            <div className="val">1DOLLAR ($1)</div>
          </div>
          <div className="token-pill">
            <div className="label">{t("tok.network")}</div>
            <div className="val">TON Blockchain</div>
          </div>
        </div>
        <div className="distribution">
          <h3>{t("tok.distribution")}</h3>
          <div className="sub">{t("tok.distSub")}</div>
          <div className="dist-grid">
            <div className="donut-wrap" style={{width: 240, height: 240}}>
              <Donut data={data.map((d) => ({...d, name: t(d.nameKey)}))} />
              <div className="donut-center">
                <div>
                  <div className="l">{t("tok.totalSupply")}</div>
                  <div className="v">10,000,000</div>
                  <div className="c">$1</div>
                </div>
              </div>
            </div>
            <div className="dist-list">
              {data.map((d) => (
                <div className="dist-row" key={d.nameKey}>
                  <span className="swatch" style={{background: d.color}}></span>
                  <span className="name">{t(d.nameKey)}</span>
                  <span className="pct">{d.pct}%</span>
                  <span className="qty">{d.qty}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="utility-grid">
          {utility.map((u) => (
            <div className="pillar-card" key={u.titleKey}>
              <div className="icon-tile"><Icon name={u.icon} size={18}/></div>
              <h3>{t(u.titleKey)}</h3>
              <p>{t(u.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
window.Tokenomics = Tokenomics;
