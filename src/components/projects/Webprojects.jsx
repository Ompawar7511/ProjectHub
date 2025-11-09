import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./project.css";
import Navbar from "../NavBar";

const webDevProjectsData = [
  {
    id: 1,
    name: "Portfolio Website",
    description:
      "This is a personal portfolio website showcasing GitHub projects, resume, and technical skills. Built using React.js, Node.js, Express.js, and CSS3, it offers a modern and fully responsive design. The portfolio is also a Progressive Web App (PWA), allowing installation on both mobile and desktop devices. Developed in VS Code and deployed on Vercel, it provides a smooth and interactive user experience for exploring my work and background.",
    source: "https://github.com/MohitSojitra/portfolio",
    image:
      "https://designnotes.blog.gov.uk/wp-content/uploads/sites/53/2020/06/Portfolio-Desk-1536x1017.jpg",
  },
  {
    id: 2,
    name: "E-Commerce Store",
    description:
      "A responsive E-commerce website built with HTML, CSS, and JavaScript, featuring a user-friendly interface and seamless adaptability across devices. This project showcases front-end development skills and provides a visually appealing online shopping experience.",
    source: "https://github.com/sahadcmd/Ecommerce-Website",
    image: "https://neilpatel.com/wp-content/uploads/2023/02/create-ecommerce-website-006.webp",
  },
  {
    id: 3,
    name: "Blog Platform",
    description:
      " This is a web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to create and manage their blogs, post projects, follow other users, comment on blogs, save content, bookmark blogs, like blogs and a lot more. The application also includes features such as email verification for user registration and Redux for state management.",
    source: "https://github.com/Prashant0664/Blog-website",
    image: "https://wpforms.com/wp-content/uploads/2019/07/start-a-blog-with-blogger.jpg",
  },
  {
    id: 4,
    name: "Task Manager App",
    description:
      "Task management system is a demonstration web application developed for team project works where users can manage various tasks within a team easily.Developed on Spring Boot(backend) with Angular v7 (front-end) frameworks and MySql database.Project is focused primarily on handling document-based projects.“User” can be a member of more than Programs. And one program can have any number of User members associated with it.This web application is made secure and robust. I have implemented JWT-based Authentication on every APIs.The project is in an early stage of development and needs lots of work and bug fixing to make it usable in real life. Still, learners can use this as template and make it functinal application.I would be happy to see people contribute and enhance this project.",
    source: "https://github.com/ayushman1024/TASK-Management-System",
    image: "https://flutterdragon.com/wp-content/uploads/2025/09/590x300-6.png",
  },
  {
    id: 5,
    name: "Social Media Clone",
    description:
      "Facebook Messenger Clone A real-time chat application built with Flutter, replicating core features of Facebook Messenger. The app supports sending and receiving messages, with a clean and responsive UI. It demonstrates cross-platform mobile development skills, with Android and iOS release setup instructions included, showcasing proficiency in Flutter, Dart, and mobile app deployment..",
    source: "https://github.com/Kalpesh209/flutter_facebook_messenger_clone_app",
    image: "https://screenshots.codesandbox.io/8kc197/7.png",
  },
  {
    id: 6,
    name: "Weather Dashboard",
    description: "This web application provides real-time weather updates for any location using the OpenWeatherMap API. Built with HTML, CSS, and JavaScript, it features current weather data, a 5-day forecast, an Explore section for random cities, and the ability to add multiple cities. The app displays temperature, humidity, wind speed, and more in a user-friendly interface. It demonstrates practical skills in frontend development, API integration, and dynamic data handling..",
    source: "https://github.com/kaushalsahu07/weather",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQew2YNshLooO7zLOkEwUSQy9uY3U6GSKIRhw&s",
  },
  {
    id: 7,
    name: "Restaurant Website",
    description:
      "A web-based project (or specify type if known) designed for [purpose—e.g., managing tasks, ordering food, etc.]. It provides a simple and user-friendly interface and can be run locally via Git. Built with modern web technologies, it demonstrates practical skills in version control, project setup, and deployment..",
    source: "https://github.com/codewithsadee/grilli",
    image: "https://themewagon.com/wp-content/uploads/2021/12/restoran.png",
  },
  {
    id: 8,
    name: "Chat App",
    description:
      "Real-Time Chat ApplicationThis project is a full-stack real-time chat app built with React and TailwindCSS for the frontend, Node/Express for the backend, Firebase for authentication, MongoDB for storing users and messages, and Socket.io for real-time communication. Features include user registration/login, profile management with avatar updates, random avatars via DiceBear, chat room creation, online status, search, real-time messaging, emoji support, and dark mode. It demonstrates practical skills in frontend, backend, and real-time application development.",
    source: "https://github.com/earthcomfy/lets-chat",
    image: "https://files.ably.io/ghost/prod/2023/06/the-ultimate-guide-to-chat-app-architecture.png",
  },
  {
    id: 9,
    name: "Online Code Editor",
    description: "Web-based code editor built with React and Ace Editor.",
    source: "https://github.com/songquanpeng/online-code-editor",
    image: "https://source.unsplash.com/400x200/?code,web",
  },
  {
    id: 10,
    name: "Quiz App",
    description: "This project implements a fully-featured quiz platform with JSON-based input, supporting multiple choice questions with single or multiple correct answers. It allows text and image-based questions, markdown formatting, and instant feedback, including explanations for correct and incorrect answers. The system supports retries until the correct answer is selected, tracks scores, and shuffles questions and answers for variability. A timer with pause/resume functionality is included, along with a quiz landing page, result page with filtering options, and a custom summary page. Users can view unanswered questions, and the platform provides a flexible scoring system and interactive experience for learning or assessment purposes.",
    source: "https://github.com/wingkwong/react-quiz-component",
    image: "https://static.vecteezy.com/system/resources/previews/032/184/743/non_2x/quiz-logo-icon-symbol-flat-cartoon-bubble-speeches-with-question-and-check-mark-signs-as-competition-game-or-interview-logotype-poll-or-questionnaire-modern-creative-horizontal-vector.jpg",
  },
  // Add more projects as needed
];

export default function Webprojects() {
  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh",  background: "linear-gradient(120deg, #e0f7fa, #f1f8e9)", }}>
      <Container className="py-5">
        <h1 className="text-center mb-5 fw-bold">
          🌐 Web Development Projects (10+)
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
