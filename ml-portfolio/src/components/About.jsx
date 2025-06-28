function About() {
  return (
    <section id="about"  style={styles.about}>
      <p style={styles.text}>
        I’m a recent graduate in Computer Science from George Mason University, 
        with a deep interest in machine learning, AI safety, and educational technology.<br /><br />

        Currently working on research around LLM fairness and student impact 
        as part of my assistantship under Dr. Johri.<br /><br />

        I love coding, reading about the ocean, and exploring ethical AI design.
      </p>
    </section>
     
  );
}

const styles = {
  about: {
    padding: '4rem 2rem',
    backgroundColor: '#ffffff',
    color: '#333',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  text: {
    maxWidth: '600px',
    margin: '0 auto',
    fontSize: '1.1rem',
    lineHeight: '1.6',
  },
};

export default About;


