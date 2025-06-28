function Projects() {
  return (
    <section id="projects" style={styles.projects}>
      <h2 style={styles.heading}>
        Featured <span style={styles.purple}>Projects</span>
      </h2>

      <div style={styles.grid}>

        <ProjectCard
          title="Cosine Similarity Adjustment for High-Frequency Words"
          subtitle="Reproducibility Study Project | Jan 2024 – May 2024"
          tools="Python, Hugging Face, Bayesian Optimization"
          bullets={[
            "Reproduced findings on bias in contextual embeddings using BERT.",
            "Implemented L2 norm discounting to improve similarity accuracy by 7.17%.",
            "Achieved 82% robustness across 4 perturbation types."
          ]}
        />

        <ProjectCard
          title="Intersectional Bias Detection in Large Language Models"
          subtitle="Final NLP Project | Jan 2024 – May 2024"
          tools="Python, LLaMA 3.2, VADER Sentiment, Pandas"
          bullets={[
            "Analyzed 9,800+ LLaMA outputs across Indo-Aryan identities.",
            "Built custom metrics for exclusive vs. overall bias detection.",
            "Found bias rates up to 1.3x global averages."
          ]}
        />

        <ProjectCard
          title="Tool-Augmented LLM Agent Implementation"
          subtitle="Advanced NLP Assignment"
          tools="Python, Gentopia, Google Scholar API, PyPDF2"
          bullets={[
            "Built a 'scholar agent' using Gentopia for academic retrieval.",
            "Integrated document summarization and cross-tool workflows."
          ]}
        />

        <ProjectCard
          title="Prompt-Based Exploits in Modern LLMs"
          subtitle="AI Ethics Final Project | Jan 2024 – May 2024"
          tools="Python, ChatGPT, Claude, Gemini, AdvBench"
          bullets={[
            "Tested prompt exploits across 3 models using creative techniques.",
            "Found creative framing bypassed safety filters in >86% cases.",
            "Proposed multi-tiered safeguards using identity and mental-state checks."
          ]}
        />

        <ProjectCard
          title="Credit Score Classification"
          subtitle="Data Mining Class Project"
          tools="Python, Scikit-learn, Pandas, XGBoost"
          bullets={[
            "Classified credit scores using financial data from 100,000 users.",
            "Used SMOTE + feature engineering for balancing.",
            "Achieved 86% accuracy with XGBoost."
          ]}
        />

        <ProjectCard
          title="Movie Review Sentiment Classifier"
          subtitle="NLP Class Project"
          tools="Python, Scikit-learn, Google Colab"
          bullets={[
            "Built a KNN-based sentiment model with TF-IDF and cosine distance.",
            "Improved classification accuracy to 81%."
          ]}
        />

      </div>
    </section>
  );
}

function ProjectCard({ title, subtitle, tools, bullets }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.subtitle}>{subtitle}</p>
      <p style={styles.tools}><strong>Tools:</strong> {tools}</p>
      <ul>
        {bullets.map((point, index) => (
          <li key={index} style={styles.bullet}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  projects: {
    padding: '4rem 2rem',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    fontWeight: 'bold',
  },
  purple: {
    color: '#a855f7',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  card: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '1rem',
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    textAlign: 'left',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '0.25rem',
  },
  subtitle: {
    fontSize: '0.95rem',
    color: '#666',
    marginBottom: '0.5rem',
  },
  tools: {
    fontSize: '0.9rem',
    color: '#444',
    marginBottom: '0.75rem',
  },
  bullet: {
    fontSize: '0.9rem',
    marginBottom: '0.5rem',
    color: '#333',
    lineHeight: '1.4',
  },
};

export default Projects;
