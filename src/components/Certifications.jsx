import SectionTitle from "./SectionTitle";
import { FaAws } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

function CertIcon({ type }) {
  if (type === "aws") return <FaAws />;
  if (type === "coursera") return <SiCoursera />;
  return <FaAws />;
}

export default function Certifications({ data }) {
  return (
    <section id="certifications" className="section">
      <div className="wrap">
        <SectionTitle
          pill="Achievements"
          title="Certifications"
          subtitle="Credentials that reflect my AWS focus"
        />

        <div className="certGrid">
          {data.certifications.map((c) => {
            const showExpiry = Boolean(c.expires) && c.status === "earned";
            const isInProgress = c.status === "in_progress";

            return (
              <div key={c.title} className="card certCardV2">
                <div className="certHeader">
                  <div className="certIcon">
                    <CertIcon type={c.type} />
                  </div>

                  <div className="certHeadText">
                    <div className="certTitle">{c.title}</div>
                    <div className="certIssuer">{c.issuer}</div>
                  </div>
                </div>

                <div className="certMetaLine">
                  {c.status === "earned" ? (
                    <>
                      <span className="certMetaLabel">Issued:</span> {c.issued}
                      {c.expires ? (
                        <>
                          <span className="dot">•</span>
                          <span className="certMetaLabel">Expires:</span> {c.expires}
                        </>
                      ) : null}
                    </>
                   ) : (
                    <>
                      <span className="certMetaLabel">Started:</span> {c.started || c.issued}
                    </>
                  )}
                </div>


                <div className="certDesc">{c.description}</div>

                <div className="certActions">
                  {c.link ? (
                    <a
                      className="btnPrimarySmall certBtn"
                      href={c.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiExternalLink />
                      <span>View Certificate</span>
                    </a>
                  ) : null}

                  {c.status === "in_progress" ? <span className="certPill">In progress</span> : null}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
