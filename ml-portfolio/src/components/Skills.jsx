function Skills() {
  return (
    <section id="skills" style={styles.skills}>
      <h2 style={styles.heading}>Professional <span style={{ color: '#a855f7' }}>Skillset</span></h2>
      <div style={styles.grid}>
        <div className="skill-card">over thinking!!<i className="devicon-python-plain colored"></i></div>
        <div className="skill-card">Anxiety<i className="devicon-react-original colored"></i></div>
        <div className="skill-card"><i className="devicon-amazonwebservices-original colored"></i></div>
        <div className="skill-card"><i className="devicon-git-plain colored"></i></div>
        <div className="skill-card"><i className="devicon-javascript-plain colored"></i></div>
        <div className="skill-card"><i className="devicon-tensorflow-original colored"></i></div>
      </div>
    </section>
  );
}


const styles = {
  skills: {
    padding: '4rem 2rem',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '1rem',
    maxWidth: '600px',
    margin: '0 auto',
  },
  card: {
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    fontWeight: 'bold',
    color: 'white',
  },
};

export default Skills;
