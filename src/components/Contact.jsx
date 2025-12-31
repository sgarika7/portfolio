// src/components/Contact.jsx
import SectionTitle from "./SectionTitle";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact({ data }) {
  const githubHref = data.github || "#";

  return (
    <section id="contact" className="section">
      <SectionTitle pill="Contact" title="Find me on" />

      <div className="contactWrap">
        <div className="socialRow">
          <a
            className="socialTile"
            href={data.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            className="socialTile"
            href={`mailto:${data.email}`}
            aria-label="Email"
          >
            <HiOutlineMail />
          </a>

          <a
            className="socialTile"
            href={githubHref}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        <div className="footerNote">
          {data.name} <span className="dot">•</span> {new Date().getFullYear()}
        </div>
      </div>
    </section>
  );
}
