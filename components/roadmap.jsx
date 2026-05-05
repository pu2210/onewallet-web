const Roadmap = () => {
  const { t } = useI18n();
  const phaseDefs = [
    { idx: 1, q: "2025 Q4",    start: "2025-10-01", end: "2025-12-31", icon: "send",     titleKey: "rm.p1.title", descKey: "rm.p1.desc" },
    { idx: 2, q: "2026 Q1",    start: "2026-01-01", end: "2026-03-31", icon: "phone",    titleKey: "rm.p2.title", descKey: "rm.p2.desc" },
    { idx: 3, q: "2026 Q2",    start: "2026-04-01", end: "2026-06-30", icon: "suitcase", titleKey: "rm.p3.title", descKey: "rm.p3.desc" },
    { idx: 4, q: "2026 Q3",    start: "2026-07-01", end: "2026-09-30", icon: "store",    titleKey: "rm.p4.title", descKey: "rm.p4.desc" },
    { idx: 5, q: "2026 Q3-Q4", start: "2026-09-01", end: "2026-10-31", icon: "bar",      titleKey: "rm.p5.title", descKey: "rm.p5.desc" },
    { idx: 6, q: "2026 Q4",    start: "2026-10-01", end: "2026-12-31", icon: "calendar", titleKey: "rm.p6.title", descKey: "rm.p6.desc" },
  ];
  const now = new Date();
  const phases = phaseDefs.map((p) => {
    const s = new Date(p.start), e = new Date(p.end);
    let status;
    if (now > e) status = "done";
    else if (now >= s) status = "progress";
    else status = "upcoming";
    return { ...p, status };
  });
  const progressIdxs = phases.map((p, i) => p.status === "progress" ? i : -1).filter((i) => i >= 0);
  if (progressIdxs.length > 1) {
    const keep = progressIdxs[progressIdxs.length - 1];
    progressIdxs.forEach((i) => { if (i !== keep) phases[i].status = "done"; });
  }
  if (!phases.some((p) => p.status === "progress")) {
    const next = phases.find((p) => p.status === "upcoming");
    if (next) next.status = "progress";
  }
  const allStart = new Date(phaseDefs[0].start).getTime();
  const allEnd = new Date(phaseDefs[phaseDefs.length - 1].end).getTime();
  const overall = Math.max(0, Math.min(100, Math.round(((now.getTime() - allStart) / (allEnd - allStart)) * 100)));
  const statusLabel = {
    done: t("rm.status.done"),
    progress: t("rm.status.progress"),
    upcoming: t("rm.status.upcoming"),
  };

  return (
    <section id="roadmap">
      <div className="sec-bg roadmap-bg"></div>
      <div className="container sec-inner">
        <div className="sec-head">
          <span className="sec-eyebrow">{t("rm.eyebrow")}</span>
          <h2 className="sec-title">{t("rm.title")}</h2>
        </div>
        <div className="rm-tracker">
          <div className="rm-track-line">
            {phases.map((p) => (
              <div key={p.idx} style={{position: "relative"}}>
                <div className={`rm-node ${p.status === "done" ? "done" : ""} ${p.status === "progress" ? "active" : ""}`}>
                  {p.status === "done" ? <Icon name="check" size={14} stroke={3}/> : p.idx}
                  <small>{p.q}</small>
                </div>
              </div>
            ))}
          </div>
          <div className="right">
            {t("rm.overall")}
            <div className="progress"><div style={{width: overall + "%"}}></div></div>
            <span style={{color: "var(--accent)", fontWeight: 700}}>{overall}%</span>
          </div>
        </div>
        <div className="rm-cards">
          {phases.map((p, i) => {
            const left = i % 2 === 0;
            const card = (
              <div className="rm-card" key={p.idx}>
                <div className="rm-card-head">
                  <div className="ico"><Icon name={p.icon} size={14}/></div>
                  <span className="phase">{t("rm.phase")} {p.idx}</span>
                  <span className="quarter">{p.q}</span>
                  <span className={`status ${p.status}`}>
                    {p.status === "done" && <Icon name="check" size={11} stroke={3}/>}
                    {p.status === "progress" && <Icon name="clock" size={11}/>}
                    {p.status === "upcoming" && <Icon name="clock" size={11}/>}
                    {statusLabel[p.status]}
                  </span>
                </div>
                <h4>{t(p.titleKey)}</h4>
                <p>{t(p.descKey)}</p>
              </div>
            );
            return (
              <div className="rm-card-row" key={p.idx}>
                {left ? card : <div className="rm-card-empty"></div>}
                <div className="rm-dot" style={{
                  background: p.status === "done" ? "#10B981" : p.status === "progress" ? "var(--accent)" : "var(--muted-2)"
                }}></div>
                {!left ? card : <div className="rm-card-empty"></div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
window.Roadmap = Roadmap;
