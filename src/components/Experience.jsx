import SectionTitle from "./SectionTitle";

export default function Experience({ data }) {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <SectionTitle
          pill="Career"
          title="Work Experience"
          subtitle="Where I worked and what I focused on"
        />

        <div className="xpWrap">
          <div className="xpLine" />
          <div className="xpList">
            {data.experience.map((e) => (
              <div key={e.role + e.org} className="xpItem">
                <div className="xpDot" />
                <div className="card xpCard">
                  <div className="xpTop">
                    <div>
                      <div className="xpRole">{e.role}</div>
                      <div className="xpOrg">
                        {e.org} · {e.place}
                      </div>
                    </div>
                    <div className="xpDates">{e.dates}</div>
                  </div>
                  <ul className="bullets">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  {e.stack?.length ? (
                    <div className="xpTags">
                      {e.stack.map((t) => (
                        <span key={t} className="xpTag">
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
