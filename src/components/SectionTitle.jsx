export default function SectionTitle({ pill, title, subtitle }) {
    return (
      <div className="sectionHead">
        <div className="sectionPill">{pill}</div>
        <h2 className="sectionBig">{title}</h2>
      </div>
    );
  }
  