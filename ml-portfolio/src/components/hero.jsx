import { Typewriter } from 'react-simple-typewriter';

function Hero() {
  return (
    <section style={styles.hero}>
      <h1 style={styles.title}>Hello! I’m Sharanya 👩‍💻<span className="sparkle">✨</span></h1>
      <h2 style={styles.subtitle}>
        <Typewriter
          words={['Machine Learning Developer', 'AI Researcher', 'Ocean nerd']}
          loop={true}
          cursor
          cursorStyle="|"
            typeSpeed={150}      
            deleteSpeed={60}     
            delaySpeed={1500}  
        />
      </h2>
    </section>
  );
}

const styles = {
  hero: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f9f9f9',
    color: '#222',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#555',
  },
};

export default Hero;
