export default function Navbar({ name, active }) {
    return (
      <header className="topBar">
        <div className="topBarInner">
          <nav className="pillNav">
            {[
              ["about", "About"],
              ["skills", "Skills"],
              ["projects", "Projects"],
              ["experience", "Experience"],
              ["certifications", "Certifications"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className={`pillLink ${active === id ? "active" : ""}`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    );
  }
  