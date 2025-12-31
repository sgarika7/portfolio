export const DATA = {
    name: "Sharanya Garika",
    location: "Fairfax, VA",
    email: "sharanyagarika714@gmail.com",
    linkedin: "https://www.linkedin.com/in/sharanyagarika/",
    github: "https://github.com/sgarika7",
    roles: ["Software Engineer", "Data Engineer", "ML Engineer"],
    intro:
      "I build practical data and software systems, with a focus on clean engineering and measurable outcomes.",
    about:
      "I recently completed my MS in Computer Science at George Mason University. I have experience across data engineering, research workflows, and full stack development. I enjoy building reliable pipelines, readable APIs, and simple interfaces that help people make decisions.",
  
      skillTiles: [
        "Java",
        "Python",
        "JavaScript",
        "SQL",
        "React",
        "Angular",
        "Spring Boot",
        "PostgreSQL",
        "MySQL",
        "Docker",
        "Jenkins",
        "Git",
        "AWS",
        "pandas",
        "Tensorflow",
        "HTML5",
        "CSS3",
      ],
      
  
    projects: [
      {
        title: "Credit Card Classification",
        stack: ["Python", "Flask", "PostgreSQL", "XGBoost"],
        image: image: `${import.meta.env.BASE_URL}image.png`,
        description:
          "Built and deployed credit score classifiers, selecting the best model and exposing real time inference through a Flask API.",
        bullets: [
          "Trained Random Forest, KNN, Gaussian Naive Bayes, and XGBoost models for credit score classification.",
          "Deployed the best performing XGBoost model via Flask API, improving F1 score by 15 percent over baseline.",
        ],
        links: { code: "", demo: "" },
      },
      {
        title: "Full Stack Student Survey Application",
        stack: ["Angular", "Spring Boot", "REST API", "MySQL"],
        image: image: `${import.meta.env.BASE_URL}image2.png`,
        description:
          "CRUD web app for collecting and managing prospective student survey submissions with a structured backend and dynamic UI.",
        bullets: [
          "Built Angular frontend with Spring Boot backend and RESTful APIs for create, read, update, delete flows.",
          "Used JPA and Hibernate for persistence and implemented survey listing, update, and delete features with MySQL.",
        ],
        links: { code: "", demo: "" },
      },
    ],
  
    experience: [
      {
        role: "Research Assistant",
        org: "George Mason University",
        place: "Fairfax, VA",
        dates: "Jul 2025 to Present",
        stack: ["Python", "Pandas", "NLP", "Reddit Data", "Matplotlib"],
        bullets: [
          "Developing Python scripts to analyze student and faculty discussions on Generative AI, uncovering usage patterns, adoption trends, and ethical themes in higher education.",
          "Collecting and preprocessing unstructured data from platforms like Reddit and academic sources to generate insights supporting policy and curriculum design.",
        ],
      },
      {
        role: "Research Assistant",
        org: "Univ Life Project and Process Management, GMU",
        place: "Fairfax, VA",
        dates: "Oct 2024 to May 2025",
        stack: ["Figma", "Tableau", "Matplotlib", "User Research"],
        bullets: [
          "Conducted user interviews and data analysis for the Health and Immunization wing to understand student challenges submitting vaccination and medical forms through the university portal.",
          "Built dashboards using Tableau and Matplotlib to visualize response patterns, bottlenecks, and feedback from interview sessions.",
        ],
      },
      {
        role: "Associate Data Engineer and Analytics",
        org: "Optum",
        place: "Remote",
        dates: "Aug 2022 to Jul 2023",
        stack: ["AWS", "S3", "Glue", "DMS", "Redshift", "SQL"],
        bullets: [
          "Used AWS DMS pipelines to ingest raw data from DB2, Oracle, and SQL Server into S3 for downstream ETL workflows.",
          "Used AWS Glue Crawlers and scripts to catalog, cleanse, and transform datasets into Parquet for efficient querying in S3.",
          "Managed a centralized S3 data lake at terabyte scale with a focus on data quality and scalability.",
          "Integrated cleansed data into Amazon Redshift using dimensional models, improving query performance by 20 percent.",
          "Automated schema creation, data validation, and transformations in Glue, reducing manual work and improving processing time by 25 percent.",
        ],
      },
      {
        role: "Associate Software Developer",
        org: "Cognizant",
        place: "Remote",
        dates: "Jan 2022 to Jul 2022",
        stack: ["Python", "SQL", "Git", "Agile", "Debugging"],
        bullets: [
          "Worked with database management, Python scripting, and Git based workflows.",
          "Practiced Agile principles and contributed to documentation, testing, and debugging of internal tools.",
        ],
      },
    ],
  
    certifications: [
      {
        title: "AWS Certified AI Practitioner",
        issuer: "Amazon Web Services",
        issued: "Nov 2025",
        expires: "Nov 2028",
        description:
          "Validates foundational knowledge of AI and ML on AWS including generative AI concepts, responsible AI practices, and core AWS AI services.",
        link: "https://www.credly.com/badges/e1e4c368-0bf3-4459-83af-6808ae0f80e0/public_url",
        status: "earned",
        type: "aws",
      },
      {
        title: "Deep Learning.ai Specialization",
        issuer: "Coursera",
        started: "2025",
        description:
          "Coursework covering CNNs, RNNs, LSTMs, and Transformers with hands-on implementation in Python and TensorFlow. Focused on optimization techniques, model evaluation, and real-world applications in computer vision, NLP, and sequence modeling.",
        link: "",
        status: "in_progress",
        type: "coursera",
      },
    ],
    
  };
  
