const Team = () => {
  const { t } = useI18n();
  const people = [
    { role: "CEO", name: "James Kim",        icon: "user", descKey: "team.ceo.desc" },
    { role: "CTO", name: "David Nguyen",     icon: "code", descKey: "team.cto.desc" },
    { role: "CMO", name: "Michael Anderson", icon: "bar",  descKey: "team.cmo.desc" },
    { role: "CFO", name: "Daniel Patel",     icon: "bar",  descKey: "team.cfo.desc" },
  ];
  return (
    <section id="team">
      <div className="sec-bg team-bg"></div>
      <div className="container sec-inner">
        <div className="sec-head">
          <span className="sec-eyebrow">{t("team.eyebrow")}</span>
          <h2 className="sec-title">{t("team.title")}</h2>
          <p className="sec-sub">{t("team.sub")}</p>
        </div>
        <div className="team-grid">
          {people.map((p) => (
            <div className="team-card" key={p.name}>
              <div className="icon-tile"><Icon name={p.icon} size={18}/></div>
              <div className="role">{p.role}</div>
              <h3>{p.name}</h3>
              <p>{t(p.descKey)}</p>
            </div>
          ))}
        </div>
        <div className="partner-card">
          <div className="icon-tile"><Icon name="chat" size={18}/></div>
          <div className="role">{t("team.partner.role")}</div>
          <h3>Ton Corporation</h3>
          <p>{t("team.partner.desc")}</p>
        </div>
      </div>
    </section>
  );
};
window.Team = Team;
