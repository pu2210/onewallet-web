// Detect Latin vs CJK runs and wrap each in a span so we can apply
// the right font family + spacing per script. CJK = Hangul, Hiragana,
// Katakana, CJK Unified Ideographs (covers KO/JA/ZH).
const CJK_RE = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af\uff00-\uffef]/;
const splitScripts = (text) => {
  if (!text) return [];
  const parts = [];
  let buf = "";
  let mode = null; // 'cjk' | 'latin'
  for (const ch of text) {
    const isCJK = CJK_RE.test(ch);
    const next = isCJK ? "cjk" : "latin";
    if (mode === null) mode = next;
    if (next !== mode) {
      if (buf) parts.push({ script: mode, text: buf });
      buf = ch;
      mode = next;
    } else {
      buf += ch;
    }
  }
  if (buf) parts.push({ script: mode, text: buf });
  return parts;
};

const ScriptText = ({ text, langHint }) => {
  const parts = splitScripts(text);
  return (
    <React.Fragment>
      {parts.map((p, i) => (
        <span
          key={i}
          className={p.script === "cjk" ? "cjk" : "latin"}
          lang={p.script === "cjk" ? langHint : "en"}
        >
          {p.text}
        </span>
      ))}
    </React.Fragment>
  );
};

const Team = () => {
  const { t, lang } = useI18n();
  const cjkLang = (lang === "en" || lang === "vi") ? "ko" : lang;

  const people = [
    { key: "ceo",  photo: "assets/team/james-kim.webp",       nameKo: "김종성", nameEn: "James Kim" },
    { key: "cmo",  photo: "assets/team/kim-jae-mo.webp",      nameKo: "김재모", nameEn: "Kim Jae Mo" },
    { key: "cfo",  photo: "assets/team/khoo-yih-shian.webp",  nameKo: "",       nameEn: "Khoo Yih Shian" },
    { key: "dir1", photo: "assets/team/park-ju-jin.webp",     nameKo: "박주진", nameEn: "Park Ju-Jin" },
    { key: "dir2", photo: "assets/team/lee-jun-bong.webp",    nameKo: "이준봉", nameEn: "Lee Jun Bong" },
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
        <div className="team-grid team-grid-photo">
          {people.map((p) => {
            const fullName = p.nameKo && p.nameKo !== p.nameEn ? `${p.nameKo} ${p.nameEn}` : p.nameEn;
            const role = t(`team.${p.key}.role`);
            const bullets = (t(`team.${p.key}.bullets`) || "").split("|").filter(Boolean);
            return (
              <article className="team-card team-card-photo" key={p.key}>
                <div className="team-photo-wrap">
                  <img
                    className="team-photo"
                    src={p.photo}
                    alt={`${fullName} — ${role}, ONEWALLET`}
                    width="320"
                    height="320"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="team-info">
                  <div className="team-role"><ScriptText text={role} langHint={cjkLang} /></div>
                  <h3 className="team-name"><ScriptText text={fullName} langHint={cjkLang} /></h3>
                  <ul className="team-bullets">
                    {bullets.map((b, i) => (
                      <li key={i}><ScriptText text={b.trim()} langHint={cjkLang} /></li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
window.Team = Team;
