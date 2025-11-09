import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./project.css";

const webDevProjectsData = [
  {
    id: 1,
    name: "Incident Response Projects",
    description:
      "This repository contains practical cybersecurity projects aimed at building skills in incident investigation, malware analysis, network intrusion detection, and DDoS attack response. Projects include analyzing phishing emails, detecting malware, monitoring network traffic using IDS/IPS tools, and simulating DDoS attacks to implement mitigation strategies. Each project provides clear goals, step-by-step instructions, and a curated set of tools such as Wireshark, Snort, REMnux, and Python. The repository is designed for beginners and intermediate learners to gain hands-on experience in real-world cybersecurity scenarios. Users can clone the repository, follow guided exercises, and practice defensive and investigative techniques. These projects help develop practical skills for incident response and threat mitigation in modern network environments.",
    source:
      "https://github.com/0xrajneesh/Incident-Response-Projects-for-Beginners",
    image:
      "https://media.licdn.com/dms/image/v2/D4E12AQGzL6KoSu3zAg/article-cover_image-shrink_720_1280/B4EZhjdcVDHIAM-/0/1754015328700?e=2147483647&v=beta&t=JEpR-oDvD8LaVGwS5qLe5y-S13AIwHTv6S4qparM_mc",
  },
  {
    id: 2,
    name: "Cybersecurity Threat AI Detection",
    description:
      "This project develops an AI-powered cybersecurity threat detection system that classifies intrusions such as DoS, Probe, R2L, U2R, and Normal traffic in real time. It leverages security logs and machine learning, using a Random Forest classifier trained on the KDD dataset. The system includes data preprocessing, model training, and real-time deployment via a Flask API, providing predictions with confidence scores. The project structure separates raw data, processed datasets, trained models, and source code for modularity and ease of maintenance. Users can preprocess data, train models, test locally, and deploy the API for live predictions. The solution enhances real-time threat detection and helps secure network infrastructures efficiently. Python, Scikit-learn, and Flask are the core technologies used",
    source: "https://github.com/mahaswetaroy1/cybersecurity-threat-ai",
    image:
      "https://logicstechnology.com/cdn/shop/articles/DALL_E_2024-04-04_13.54.52_-_Design_a_title_image_for_a_blog_post_titled_AI_in_Cybersecurity__Enhancing_Threat_Detection_and_Prevention_._The_image_should_visually_represent_the.webp?v=1712253318&width=1600",
  },
  {
    id: 3,
    name: "Anomaly-Based Network Intrusion Detection",
    description:
      "This project develops an anomaly-based network intrusion detection system using LSTM to identify malicious network activity. It leverages the CSE-CIC-IDS 2024 dataset, containing labeled normal and anomalous traffic, for model training and evaluation. Data preprocessing involved cleaning, normalization, sequence generation, and balancing to handle class imbalance. The LSTM model, built with Keras and TensorFlow, includes two LSTM layers, dropout, and a dense output layer with softmax activation. Model performance was evaluated using loss and accuracy metrics, showing steady improvement over epochs with minor fluctuations. The system provides real-time detection and visualization of network anomalies, helping secure critical infrastructures against cyber attacks. Python, Pandas, NumPy, Matplotlib, Seaborn, and Jupyter Notebook were used for implementation.",
    source: "https://github.com/DuseTrive/Anomaly-Based-NID-using-LSTM",
    image:
      "https://time24tech.com/wp-content/uploads/2021/09/intrusion-detection.jpeg",
  },
  {
    id: 4,
    name: "CyberShield: Incident Classification",
    description:
      "This project focuses on classifying cybersecurity incidents using machine learning to improve SOC efficiency. The dataset includes features like source and destination IPs, protocols, timestamps, and other network-related data, with the target variable being incident_category (e.g., malware, phishing, network attacks). Data preprocessing involved handling missing values, correcting inconsistencies, and standardizing features. Exploratory Data Analysis (EDA) revealed incident frequencies, attack patterns, and correlations among features. To address class imbalance, techniques like SMOTE were applied. The final model is deployed via a Streamlit app for real-time predictions and automated reporting. This approach supports faster incident response, threat intelligence, and actionable insights for SOC teams.",
    source:
      "https://github.com/kadarmeeran465/CyberShield-Cybersecurity-Incident-Classification",
    image:
      "https://www.cy5.io/wp-content/uploads/2024/09/sebi-blog-cover-915x549-1.jpg?",
  },
  {
    id: 5,
    name: "Port Scanner Tool",
    description:
      "This Python-based Port Scanner allows users to detect open ports on single or multiple target IP addresses using the built-in socket library. Users can specify the targets and the number of ports to scan, with results displayed in real-time. The script is designed as an educational tool for network analysis and cybersecurity assessments, helping beginners understand basic network scanning techniques. This project emphasizes ethical usage and should only be run on authorized systems.",
    source: "https://github.com/itaynir1/port-scanner",
    image: "https://i.ytimg.com/vi/4uS_cP_tX8s/sddefault.jpg",
  },
  {
    id: 6,
    name: "Cybersecurity Mini-Projects Collection",
    description:
      "As an absolute beginner in cybersecurity, I created this repository to gain hands-on experience through easy Capture-The-Flag (CTF) challenges, TryHackMe labs, and mini-projects. Each directory contains a standalone project focused on a specific task, covering fundamental concepts like networking, cryptography, exploits, and security testing. Projects range from defensive to offensive cybersecurity and are sometimes implemented in multiple programming languages for practice. Highlights include RSA encryption, keyloggers, network sniffers, phishing simulations, steganography, and server-side template injection (SSTI) demonstrations, showcasing practical skills in both attack and defense techniques..",
    source: "https://github.com/kienmarkdo/Cybersecurity-Mini-Projects",
    image: "https://www.hackthebox.com/storage/blog/whatisactf.jpg",
  },
  {
    id: 7,
    name: "Intrusion Detection on UNSW-NB15 Dataset",
    description:
      "This project focuses on detecting network intrusions using the UNSW-NB15 dataset, which includes various attack types such as DoS, worms, backdoors, and fuzzers, with binary labels (attack = 1, normal = 0). The methodology covers data preprocessing, feature engineering, and exploratory data analysis (EDA). Multiple machine learning models were trained and evaluated, including Decision Tree, Random Forest, Logistic Regression, XGBoost, and ensemble methods. Hyperparameter tuning was performed to optimize model performance. Evaluation metrics include Accuracy, Precision, Recall, F1-Score, and AUC-ROC, providing a comprehensive assessment of detection effectiveness.",
    source: "https://github.com/pdrapi/intrusion-detection-UNSW-NB15",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*RAb4AIgtdvo4zUJ86HzWjg.png",
  },
  {
    id: 8,
    name: "WormGPT / Prompt Hacking Toolkit",
    description:
      "ChillHack was born from a passion for digital technology and a deep understanding of cybersecurity. Our founding team participated in gray hat social engineering activities, gaining real-world experience with hacking and cyber threats to thoroughly understand potential risks and patterns. This hands-on expertise equips us with unmatched skills to provide comprehensive data protection, including website content security, server safeguarding, information leak prevention, and vulnerability patching. Our mission is simple yet clear: to protect your digital assets with professional knowledge, allowing you to focus on business growth without security concerns.",
    source: "https://github.com/ChillHackLab/wormgpt",
    image:
      "https://private-user-images.githubusercontent.com/200447083/482375649-b3c24c10-8cdd-41f8-9d56-a953bd51f5f7.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjI1NzU4NTcsIm5iZiI6MTc2MjU3NTU1NywicGF0aCI6Ii8yMDA0NDcwODMvNDgyMzc1NjQ5LWIzYzI0YzEwLThjZGQtNDFmOC05ZDU2LWE5NTNiZDUxZjVmNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTEwOFQwNDE5MTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kOWU0OWFmYTMyNDZjYjE4NjQ2ZGRkOThkZWE5NDVlZTI0NWVjZTkxMmE3NGIwODBiNWQ2N2Q3MDU0YjgyMjUwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.PRjUkSQeAnr1MCO-SxlG0FPda2HNBXIe3KGbLzhxnAI",
  },
  {
    id: 9,
    name: "Cybersecurity Portfolio Tools",
    description:
      "Cybersecurity Analyst Portfolio, showcasing hands-on projects and labs from certifications and self-directed learning. It highlights practical skills in network defense, incident response, cloud security, and governance, risk, and compliance (GRC). Projects demonstrate expertise with tools like Wireshark, Nmap, Kali Linux, Metasploit, Python, SQL, Microsoft Defender, and Splunk. The portfolio covers security audits, threat analysis, network monitoring, IAM with Azure AD, and automation scripting. Each project includes documentation, code samples, and case studies to illustrate methodology, decision-making, and real-world cybersecurity practices.",
    source: "https://github.com/Ecbrendan/Cybersecurity-Portfolio",
    image: "https://i.ytimg.com/vi/xWo9owjk75c/maxresdefault.jpg",
  },
  {
    id: 10,
    name: "Cybersecurity Projects Collection",
    description:
      "GitHub topic with multiple cybersecurity projects, frameworks, and tools for practice.",
    source: "https://github.com/topics/cybersecurity-projects",
    image: "https://source.unsplash.com/400x200/?cybersecurity,web",
  },
  // Add more projects as needed
];

export default function Cyberprojects() {
  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh",  background: "linear-gradient(120deg, #e0f7fa, #f1f8e9)", }}>
      <Container className="py-5">
        <h1 className="text-center mb-5 fw-bold">
          🔒CyberSecurity Projects (10+)
        </h1>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {webDevProjectsData.map((project) => (
            <Col key={project.id}>
              <Card className="shadow-sm project-card h-100">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.name}
                  className="project-img"
                />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text className="text-muted">
                    {project.description}
                  </Card.Text>
                  <Button
                    variant="primary"
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 View Source
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <footer className="footer">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} CS & IT ProjectHub. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
