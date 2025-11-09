import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./project.css";
import Navbar from "../NavBar";

const projectsData = [
  {
    id: 1,
    name: "Chatbot UI",
    description:
      "Chatbot UI is an open-source interface for creating and hosting chatbot applications. It recently released version 2.0, featuring simpler deployment, better backend support, and improved mobile layouts. The project now integrates with Supabase (an open-source Postgres backend) for secure data storage, replacing local browser storage. Developers can run it locally using Docker, Supabase CLI, and Node.js (v18), or host it in the cloud using their own Supabase project. To stay updated, users can view the official hosted version, join Discussions for help and feature ideas, and contribute via GitHub using npm run update and npm run db-push for updates and migrations.",
    source: "https://github.com/mckaywrigley/chatbot-ui",
    image:
      "https://github.com/mckaywrigley/chatbot-ui/raw/main/public/readme/screenshot.png",
  },
  {
    id: 2,
    name: "Rasa Chatbot",
    description:
      "Rasa is an open-source machine learning framework for building text and voice-based conversational assistants. It enables developers to create context-aware chatbots and voice agents that integrate with platforms like Slack, Telegram, Twilio, and Alexa. The project uses Poetry for dependency management and Docusaurus for documentation. Contributors can build, test, and format code using tools like black, mypy, and make. Rasa follows a structured release cycle—major, minor, and patch—with clear maintenance and end-of-life policies to ensure long-term support and stability..",
    source: "https://github.com/RasaHQ/rasa",
    image:
      "https://forum.guvi.in/files/3598/0ld7n5TtRt6r0H7juEP3Pg/Dy4lIfAzyMqFsNDcEMJ7tdtdgLQEPXLwTsMNnkelIz22oSzEPW93Y1Yi6B4l/IntrotoRASA.webp",
  },
  {
    id: 3,
    name: "LangChain",
    description:
      "LangChain is a framework for building agents and LLM-powered applications. It helps you chain together interoperable components and third-party integrations to simplify AI application development – all while future-proofing decisions as the underlying technology evolves..",
    source: "https://github.com/langchain-ai/langchain",
    image:
      "https://github.com/langchain-ai/langchain/raw/master/.github/images/logo-dark.svg",
  },
  {
    id: 4,
    name: "HuggingFace Transformers",
    description:
      "It centralizes the model definition so that this definition is agreed upon across the ecosystem. transformers is the pivot across frameworks: if a model definition is supported, it will be compatible with the majority of training frameworks (Axolotl, Unsloth, DeepSpeed, FSDP, PyTorch-Lightning, ...), inference engines (vLLM, SGLang, TGI, ...), and adjacent modeling libraries (llama.cpp, mlx, ...) which leverage the model definition from transformers.",
    source: "https://github.com/huggingface/transformers",
    image:
      "https://camo.githubusercontent.com/26569a27b8a30a488dd345024b71dbc05da7ff1b2ba97bb6080c9f1ee0f26cc7/68747470733a2f2f68756767696e67666163652e636f2f64617461736574732f68756767696e67666163652f646f63756d656e746174696f6e2d696d616765732f7265736f6c76652f6d61696e2f7472616e73666f726d6572732f7472616e73666f726d6572735f61735f615f6d6f64656c5f646566696e6974696f6e2e706e67",
  },
  {
    id: 5,
    name: "AutoGPT",
    description:
      "**AutoGPT** is a powerful open-source platform for creating, deploying, and managing continuous AI agents that automate complex workflows. It supports **self-hosting** (free) or a **cloud-hosted version** (beta coming soon). Users can set it up locally using Docker, Git, and Node.js, with a one-line installation script for quick deployment.The platform has two main components:* **AutoGPT Frontend** – a low-code interface for building, testing, and managing agents, with tools for workflow management, deployment, and analytics* **AutoGPT Server** – the backend engine that runs and orchestrates agents, featuring scalable infrastructure and a built-in marketplace of pre-built agents.AutoGPT provides examples like automatically generating viral videos or extracting quotes from YouTube uploads. It uses a **Polyform Shield License** for its new platform code and **MIT License** for its open modules, emphasizing innovation, collaboration, and accessible AI automation.",
    source: "https://github.com/Significant-Gravitas/AutoGPT",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJk_N7Xl3VhvWcL7ie9rQcgNpYd3RUfz0Snw&s",
  },
  {
    id: 6,
    name: "ComfyUI",
    description:
      "ComfyUI is a powerful, node-based visual interface for designing and running Stable Diffusion and other AI generation workflows—no coding required. It supports Windows, Linux, and macOS, with desktop and portable versions available.Users can build complex image, video, audio, and 3D generation pipelines using a flexible graph/flowchart system. It supports major models like SDXL, Flux, Stable Video Diffusion, and Hunyuan3D, along with advanced features such as ControlNet, inpainting, Loras, model merging, and smart GPU memory management.ComfyUI releases updates roughly every week, with separate repositories for its Core, Desktop, and Frontend components. It runs fully offline, provides workflow saving/loading, and includes example templates to help users experiment and create professional-grade generative AI workflows.",
    source: "https://github.com/comfyanonymous/ComfyUI",
    image: "https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2024/12/comfyui-nodes-and-workflows-hero.jpg?w=1600&h=1200&fit=crop",
  },
  {
    id: 7,
    name: "Milvus",
    description:
      "Milvus is a high-performance vector database built for scale. It powers AI applications by efficiently organizing and searching vast amounts of unstructured data, such as text, images, and multi-modal information.🧑‍💻 Written in Go and C++, Milvus implements hardware acceleration for CPU/GPU to achieve best-in-class vector search performance. Thanks to its fully-distributed and K8s-native architecture, Milvus can scale horizontally, handle tens of thousands of search queries on billions of vectors, and keep data fresh with real-time streaming updates. Milvus also supports Standalone mode for single machine deployment. Milvus Lite is a lightweight version good for quickstart in python with pip install.Want to use Milvus with zero setup? Try out Zilliz Cloud ☁️ for free. Milvus is available as a fully managed service on Zilliz Cloud, with Serverless, Dedicated and BYOC options available.For questions about how to use Milvus, join the community on Discord to get help. For reporting problems, file bugs and feature requests in GitHub Issues or ask in Discussions.The Milvus open-source project is under LF AI & Data Foundation, distributed with Apache 2.0 License, with Zilliz as its major contributor.",
    source: "https://github.com/milvus-io/milvus",
    image: "https://private-user-images.githubusercontent.com/7064054/382414205-51e33300-7f85-43ff-a05a-3a0317a961f3.jpeg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjI1NzE1MjMsIm5iZiI6MTc2MjU3MTIyMywicGF0aCI6Ii83MDY0MDU0LzM4MjQxNDIwNS01MWUzMzMwMC03Zjg1LTQzZmYtYTA1YS0zYTAzMTdhOTYxZjMuanBlZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTExMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMTA4VDAzMDcwM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJhNjEwOTg4NjVkZmMyYjg1OThlNDAwMzlmZTFiMDIxOGFhN2JhZmFhZmZiNjdmODgwYmMwZGRhMDE4NTVkNTMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.AJ2lfcoPun-brXGK9BEJp56X7vnKpfVkWKqWq2RxaDY",
  },
  {
    id: 8,
    name: "DeepPavlov",
    description:
      "DeepPavlov 1.0 is an open-source NLP framework built on PyTorch and Transformers, designed for easy, modular, and configuration-based development of state-of-the-art natural language processing models. It supports various NLP tasks such as text classification, named entity recognition, question answering, and more — even for users with minimal ML experience.The framework provides ready-to-use pretrained models, simple CLI and Python APIs for training, evaluation, and inference, and supports GPU acceleration for faster performance. It runs on Linux, macOS, and Windows (via WSL), and can be installed easily with pip install deeppavlov.DeepPavlov’s modular configuration system allows flexible model customization and deployment, including REST API serving. It’s licensed under Apache 2.0, encouraging open collaboration and enterprise use.",
    source: "https://github.com/deepmipt/DeepPavlov",
    image: "https://storage.yandexcloud.net/datasouls-ods/files/b26fe75b/image%20%286%29.png",
  },
  {
    id: 9,
    name: "Fairlearn",
    description:
      "An AI system can behave unfairly for a variety of reasons. In Fairlearn, we define whether an AI system is behaving unfairly in terms of its impact on people – i.e., in terms of harms. We focus on two kinds of harms:Allocation harms. These harms can occur when AI systems extend or withhold opportunities, resources, or information. Some of the key applications are in hiring, school admissions, and lending.Quality-of-service harms. Quality of service refers to whether a system works as well for one person as it does for another, even if no opportunities, resources, or information are extended or withheld.We follow the approach known as group fairness, which asks: Which groups of individuals are at risk for experiencing harms? The relevant groups need to be specified by the data scientist and are application specific..",
    source: "https://github.com/fairlearn/fairlearn",
    image: "https://fairlearn.org/images/fairlearn-meta-image.jpg",
  },
  {
    id: 10,
    name: "Stable Diffusion WebUI",
    description:
      "**Stable Diffusion WebUI (Automatic1111)** is a feature-rich, open-source interface for **Stable Diffusion**, enabling users to generate, edit, and upscale images with an intuitive graphical interface. It supports both **txt2img** and **img2img** modes and offers one-click setup on Windows, Linux, and macOS.Key capabilities include: **Advanced editing tools:** Inpainting, outpainting, color sketching, and prompt matrix. **Custom generation features:** Attention control, negative prompts, prompt editing, seed variations, and high-res fixes.**Model management:** Load, merge, or switch checkpoints (including `.safetensors`), Loras, and hypernetworks directly from the UI.**Integrated upscalers:** RealESRGAN, GFPGAN, SwinIR, LDSR, and more.**Performance optimizations:** xformers support, smart VRAM handling (works on 4GB GPUs), live previews, and API access.**Extensive customization:** Community extensions, Python scripting, reorderable UI elements, and style presets.It supports **Stable Diffusion 1.x, 2.x, and Alt-Diffusion**, and offers deep configurability, making it the most popular toolkit for creating and experimenting with AI-generated art.",
    source: "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
    image: "https://weam.ai/app/uploads/2023/08/stable-diffusion-webui-automatic1111.jpeg",
  },
  // 👇 Duplicate or extend this up to 100 projects
];

// ✅ Single component combining all pages
export default function Project() {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        background: "linear-gradient(120deg, #e0f7fa, #f1f8e9)",
      }}
    >
      <Container className="py-5">
        <h1 className="text-center mb-5 fw-bold">
          🤖 AI & Deep Learning Projects (10+)
        </h1>
        <Row xs={2} sm={2} md={3} lg={4} className="g-4">
          {projectsData.map((project) => (
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
