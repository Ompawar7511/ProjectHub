import { Link } from "react-router-dom";
import "../styles/ExploreProject.css";
import Navbar from "./NavBar";
const projectCategories = [
  {
    title: "Blockchain Projects",
    description:
      "Explore projects using blockchain technology, smart contracts, and cryptocurrencies.",
    image:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220314001728/7-Project-Ideas-on-Blockchain-For-Professionals.png",
  },
  {
    title: "AR & VR Projects",
    description:
      "Dive into augmented and virtual reality projects for immersive experiences.",
    image:
      "https://caddcentre.com/blog/wp-content/uploads/2025/01/AR-VR-1-1.jpg",
  },
  {
    title: "Data Science",
    description:
      "Analyze, visualize, and extract insights from data with these projects.",
    image:
      "https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg",
  },
  {
    title: "Machine Learning",
    description:
      "Build predictive models and AI solutions using machine learning techniques.",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20230808130011/Machine-Learning-Algorithms1-(1).webp",
  },
  {
    title: "Angular/Node React JS",
    description:
      "Web development projects using modern JS frameworks and Node.js backend.",
    image:
      "https://www.krishangtechnolab.com/wp-content/uploads/2021/12/React-Js-Node-JS-Anguler-JS.png",
  },
  {
    title: "Php Projects",
    description: "Dynamic web applications developed with PHP and MySQL.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    title: "Data Mining",
    description: "Discover patterns and insights from large datasets.",
    image:
      "https://www.elephantintheboardroom.com.au/sites/default/files/2025-09/Data%20Mining%20for%20Business%20How%20Data%20Mining%20Can%20Contribute%20to%20your%20Business%20Growth%20Blog%20Banner.jpg",
  },
  {
    title: "Android Projects",
    description: "Mobile app development projects for Android devices.",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240708164955/Android-Java-Projects.webp",
  },
  {
    title: "Smart Card / Biometrics",
    description:
      "Security and identification projects using smart cards and biometric systems.",
    image:
      "https://www.uscybersecurity.net/wp-content/uploads/2019/09/Smart-Card-Cyber-Daily-Header.png",
  },
  {
    title: "Dotnet Projects",
    description: "Build desktop and web applications using the .NET framework.",
    image:
      "https://www.placementpreparation.io/blog/cdn-cgi/image/metadata=keep,quality=60/wp-content/uploads/2024/04/dot-net-project-ideas-for-beginners.webp",
  },
  {
    title: "Web Based",
    description: "Responsive web applications and online platforms.",
    image:
      "https://www.voipbusiness.com/wp-content/uploads/2023/03/Web-Based-Application.webp",
  },
  {
    title: "Matlab Projects",
    description: "Scientific computing and simulation projects using MATLAB.",
    image:
      "https://www.pantechsolutions.net/wp-content/uploads/2018/07/Matlab-Projects.png",
  },
  {
    title: "Information Security",
    description:
      "Projects focusing on cybersecurity and protecting digital assets.",
    image:
      "https://onlinedegrees.sandiego.edu/wp-content/uploads/2020/01/USD-Cyber-Cybersecurity-vs-Information-Security-vs-Network-Security-_2.jpeg",
  },
  {
    title: "iOS Projects",
    description: "iPhone and iPad app development projects.",
    image:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220428235932/6-Best-iOS-Project-Ideas-For-Beginners.jpg",
  },
  {
    title: "Artificial Intelligence",
    description: "AI-powered projects using neural networks and deep learning.",
    image:
      "https://static.investindia.gov.in/s3fs-public/2020-02/shutterstock_701349271.jpg",
  },
];

export default function ExploreProjects() {
  return (
    <div className="explore-page">
      <section className="explore-hero">
        <div className="container">
          <h1>Explore Project Categories</h1>
          <p>
            Browse through a wide range of CS and IT project categories to find
            inspiration or contribute your work.
          </p>
        </div>
      </section>

      <section className="categories">
        <div className="container categories-grid">
          {projectCategories.map((category, index) => (
            <div key={index} className="category-card">
              <img
                src={category.image}
                alt={category.title}
                className="category-img"
              />
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <Link to={"/AccessDenied"} className="btn btn-sm">
                View Projects
              </Link>
            </div>
          ))}
        </div>
      </section>

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
