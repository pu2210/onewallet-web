const App = () => {
  const [activeSection, setActiveSection] = React.useState("home");
  const [showTop, setShowTop] = React.useState(false);
  const [route, setRoute] = React.useState(() => (window.location.hash || "").replace("#",""));

  const sections = ["home","about","technology","features","ecosystem","tokenomics","roadmap","testimonials","team","whitepaper"];

  React.useEffect(() => {
    const onHash = () => setRoute((window.location.hash || "").replace("#",""));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.4;
      setShowTop(window.scrollY > 400);
      let cur = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActiveSection(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  if (route === "terms" || route === "privacy") {
    return <LegalPage which={route} onClose={() => { window.location.hash = ""; }} />;
  }

  return (
    <>
      <Nav />
      <Hero />
      <Partners />
      <About />
      <Technology />
      <Features />
      <Ecosystem />
      <Tokenomics />
      <Roadmap />
      <Testimonials />
      <Team />
      <Whitepaper />
      <Footer />

      <div className="section-dots">
        {sections.map((s) => (
          <span key={s}
            className={`dot ${activeSection === s ? "active" : ""}`}
            onClick={() => scrollToSection(s)}
            title={s}/>
        ))}
      </div>

      {showTop && (
        <button className="scroll-top" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
          <Icon name="arrowUp" size={18} stroke={2.4}/>
        </button>
      )}
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nProvider><ToastProvider><App/></ToastProvider></I18nProvider>
);
