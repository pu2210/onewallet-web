const BuyModal = ({ open, onClose }) => {
  const { t } = useI18n();
  const [amount, setAmount] = React.useState("100");
  const presets = ["10","50","100","500"];
  if (!open) return null;
  const amt = parseFloat(amount) || 0;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <h3>{t("buy.title")}</h3>
            <p>{t("buy.poweredBy")}</p>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-amount">
          <input type="text" inputMode="decimal" value={amount}
            onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g,""))}/>
          <span className="currency">
            <span className="logo-mark">$1</span>
            1DOLLAR
          </span>
        </div>
        <div className="modal-quick">
          {presets.map((p) => (
            <button key={p} className={amount === p ? "active" : ""} onClick={() => setAmount(p)}>
              {p} $1
            </button>
          ))}
        </div>
        <div className="modal-info">
          <span>{t("buy.pricePer")}</span>
          <span>1.00 USDT</span>
        </div>
        <div className="modal-info">
          <span>{t("buy.networkFee")}</span>
          <span>~0.05 TON</span>
        </div>
        <div className="modal-info">
          <span>{t("buy.youReceive")}</span>
          <span>{amt.toLocaleString()} $1</span>
        </div>
        <div className="modal-info" style={{borderTop: "1px solid var(--line)", marginTop: 6, paddingTop: 12}}>
          <span style={{fontWeight: 600, color: "var(--ink)"}}>{t("buy.total")}</span>
          <span style={{fontSize: 18, fontWeight: 800}}>{(amt * 1).toLocaleString()} USDT</span>
        </div>
        <button className="btn-buy">
          <Icon name="sendFill" size={14} stroke={2}/> {t("buy.connect")}
        </button>
        <div className="modal-foot">{t("buy.terms")}</div>
      </div>
    </div>
  );
};
window.BuyModal = BuyModal;
