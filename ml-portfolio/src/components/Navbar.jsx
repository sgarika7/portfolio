function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>My Portfolio</h2>
      <ul style={styles.links}>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: '#222',
    color: '#fff',
    padding: '1.5rem 2rem', 
  },
  logo: {
    margin: 0,
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  }
};

export default Navbar;
