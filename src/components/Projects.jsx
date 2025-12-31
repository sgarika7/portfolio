import SectionTitle from "./SectionTitle";

function Chip({ children }) {
  return <span className="chip">{children}</span>;
}

export default function Projects({ data }) {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <SectionTitle
          pill="Projects"
          title="Featured Projects"
          subtitle="A small selection of what I have built"
        />

        <div className="projectGrid">
          {data.projects.map((p) => (
            <div key={p.title} className="card projectCard">
              <div className="projectBanner" style={p.image ? { backgroundImage: `url(${p.image})` } : undefined}/>
              <div className="projectBody">
                <div className="projectTitle">{p.title}</div>
                <div className="projectDesc">{p.description}</div>

                <div className="chipRow chipRowTight">
                  {p.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>

               

                <div className="projectLinks">
                  {p.links?.code ? (
                    <a className="miniBtn" href={p.links.code} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  ) : null}
                  {p.links?.demo ? (
                    <a className="miniBtn" href={p.links.demo} target="_blank" rel="noreferrer">
                      Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
