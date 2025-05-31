import { Icons } from "@/components/icons";
import { BriefcaseBusinessIcon, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vaibhav Tanwar",
  initials: "VT", 
  url: "https://www.linkedin.com/in/vaibtan11/",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/New+Delhi,+Delhi/@28.5272527,77.0441739,11z/data=!3m1!4b1!4m15!1m8!3m7!1s0x30635ff06b92b791:0xd78c4fa1854213a6!2sIndia!3b1!8m2!3d20.593684!4d78.96288!16zL20vMDNyazA!3m5!1s0x390cfd5b347eb62d:0x52c2b7494e204dce!8m2!3d28.6139298!4d77.2088282!16zL20vMGRsdjA?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D",
  description:
    "Contemplative coder and analyst with a passionate knack for marrying theory and silicon.",
  summary:
    "I’m an aspiring machine learning engineer and researcher [currently working in the realm of Computer Vision.](/work) I am interested in compute-efficient distributed training, building efficient and robust multi modal systems and inference at scale. Currently a senior undergraduate [studying Computer Science](/work#education), I specialize in optimizing machine learning workflows—from designing GPU-accelerated Triton kernels to implementing distributed training pipelines. I have also extensively worked on interdisciplinary projects spanning from [time series forecasting to low level system simulation](/work#projects). I'm an avid learner who like to solve algorithmic problems [from P-complexity-class](https://leetcode.com/u/tupac_x11/).Actively Seeking ML Engineering / Data Engineering roles where I can leverage my skills to contribute to impactful projects and continue growing alongside talented teams.",
  avatarUrl:
    "/techie_emoji.png",
  skills: [ 
    "Python",
    "C++",
    "TypeScript",
    "PyTorch",
    "Hugging Face",
    "FAISS",
    "FastAPI",
    "Django",
    "PostgresQL",
    "MySQL",
    "LangChain",
    "SpaCy",
    "Triton",
    "CUDA",
    "OpenCV",
    "Open3D",
    "Github",
    "NGINX",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/work", icon: BriefcaseBusinessIcon, label: "Work" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "vaibhav21296@iiitd.ac.in",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Vaibtan",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/vaibtan11",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Sillychap101",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:vaibhav21296@iiitd.ac.in",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Infosys Centre for Artificial Intelligence",
      href: "https://cai.iiitd.ac.in/",
      badges: [],
      location: "New Delhi, India",
      title: "Computer Vision Researcher",
      logoUrl: "/icai-removebg-preview.png",
      start: "September 2024",
      end: "Present",
      description:
        "Developed advanced wildlife monitoring capabilities by fine-tuning YOLO and custom Transformer based architectures along with (CUDA, TensorRT) inference optimization. Built a robust backend infrastructure (FastAPI, PostgreSQL, Docker) featuring optimized queries and an end-to-end MLOps pipeline for continual learning from camera trap data. Mitigated annotation bottlenecks using Active Learning algorithms and ensured system health via custom API monitoring tools.",
    },
    {
      company: "Outlier (Scale AI)",
      href: "#",
      badges: [],
      location: "San Francisco - Remote",
      title: "LLM Post Training Contributor",
      logoUrl: "/outlier-wobg.png",
      start: "Dec 2024",
      end: "February 2025",
      description:
        "Enhanced zero shot inference capability of LLMs through supervised fine-tuning (SFT) and Reinforcement Learning from Human Feedback (RLHF). Curated and refined domain-specific datasets for complex reasoning tasks. Optimized reward models using human preference data to better align outputs with user expectations (truthfulness, harmlessness, instruction-following). Collaborated with ML engineers on refining annotation guidelines and feedback mechanisms.",
    },
    {
      company: "Networked Systems and Security Research Lab",
      href: "https://iiitd.ac.in/IHERN/joinus.php",
      badges: [],
      location: "New Delhi, India",
      title: "Undergraduate Researcher",
      logoUrl: "/nsl-wobg.png",
      start: "May 2024",
      end: "July 2024",
      description:
        "Improved latency and throughput for live media transfer from semi-autonomous vehicles to edge servers under Dr. Arani Bhattacharya, utilizing state-of-the-art multipath QUIC protocols. Critically analyzed and tested Alibaba's XQUIC and Tencent's TQUIC frameworks to identify solutions for latency bottlenecks. Reported detailed findings on performance and build library inconsistencies.",
    },
  ],
  education: [
    {
      school: "IIIT Delhi",
      href: "https://iiitd.ac.in/",
      degree: "B.Tech in Computer Science and Applied Mathematics",
      logoUrl:
        "/clg-logo-wobg.png",
      start: "2022",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Multi Agent Tutoring System (Work In Progress)",
      href: "https://github.com/Vaibtan/Multi-Agent-Tutoring-Bot",
      dates: "May 2025",
      active: true,
      description:
        "Developed a sophisticated tutoring chatbot leveraging Google's Agent Development Kit (ADK) principles with intelligent orchestration between specialized Math and Physics agents powered by Gemini API, integrating context-aware conversation management, autonomous query classification pipeline routing student queries to domain-specific agents and provide personalized responses through prompt engineering and tool integration.",
      technologies: [
        "Python",
        "FastAPI",
        "Gemini",
        "Agent Development Kit",
        "Javascript"
      ],
      links: [
        {
          type: "Live Deployment",
          href: "https://multi-agent-tutoring-bot-production-ac02.up.railway.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/agentchatbot.png",
      video: "",
    },
    {
      title: "Distributed KV Store with Modified Raft Consensus",
      href: "https://github.com/Vaibtan/Distributed-Database-with-Raft-Consensus-Algorithm",
      dates: "July 2024",
      active: true,
      description:
        "Implemented a database storing string key-value pairs using Raft Consensus Algorithm, ensuring consistent data replication and fault recovery across the distributed network of nodes and utilized the leader lease mechanism, similar to those used by geo distributed databases such as Cockroach DB and YugaByte DB.",
      technologies: [
        "Python",
        "ZeroMQ",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Vaibtan/Distributed-Database-with-Raft-Consensus-Algorithm",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/raft_consensus.png",
      video: "",
    },
    {
      title: "Vision-Language Assistant for Navigation Aid in Urban Metro Systems",
      href: "https://github.com/Vaibtan/Distributed-Database-with-Raft-Consensus-Algorithm",
      dates: "March 2025",
      active: true,
      description:
        "Developed MetroSense, a novel web-based platform to empower visually impaired individuals navigate the Delhi Metro system, achieving 65.1% mAP@50 for identifying environmental elements from real-time image captures. Integrated LLAMA Vision 3.2 90B for sophisticated VQA, engineered with context-rich, few-shot prompting and optimized decoding parameters to achieve a BERT F1 score of 0.85, delivering semantically accurate, context-aware voice-synthesized responses to user queries for improved safety and autonomy.",
      technologies: [
        "Python",
        "PyTorch",
        "Transformers",
        "HuggingFace",
        "LLMs",
        "OnRender"
      ],
      links: [
        {
          type: "Demo",
          href: "https://docs.google.com/file/d/1qW3ZT4TmsPIdr7BmXiZ7-H4E-PQkiN-B/preview",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/metrosense.png",
      video: "",
    },
    {
      title: "Multi Model Analysis for Stock Market Trend Prediction",
      href: "https://github.com/Vaibtan/Machine-Learning-Project",
      dates: "July 2024",
      active: true,
      description:
        "Developed and benchmarked novel models (GAN, Neural ODE VAE, Neural ODE Classifier) for stock market analysis, achieving a 15% F1 improvement and 85% faster training via Neural ODEs.Implemented a CNN-LSTM architecture delivering high-accuracy regression (R² 0.99, MAE 143.58 on S&P 500) across five major indices on the CNNPred dataset.",
      technologies: ["Pytorch", "Transformers", "Scikit-Learn", "Pandas"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Vaibtan/Machine-Learning-Project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/neuralODE.png",
      video: "",
    },
    {
      title: "Cloud Native Online Commodity Trading Platform",
      href: "https://github.com/Vaibtan/CSE-530-Distributed-Systems/tree/main/Assignment%201/gRPC",
      dates: "June 2024",
      active: true,
      description:
        "Created a distributed online marketplace system, architected to facilitate direct transactions between buyers and sellers through a central platform hosted on Google Cloud VM instances, leveraging gRPC for communication and Protocol Buffers for efficient data serialization.",
      technologies: [
        "Python",
        "gRPC",
        "Protobuf",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Vaibtan/CSE-530-Distributed-Systems/tree/main/Assignment%201/gRPC",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/marketplace.png",
      video: "",
    },
    {
      title: "K Means using Map Reduce Framework",
      href: "https://github.com/Vaibtan/CSE-530-Distributed-Systems/tree/main/Assignment%202",
      dates: "April 2024",
      active: true,
      description:
        "Implemented a distributed Map-Reduce framework comprising of Master, Mapper and Reducer components to perform K Means Clustering on a given dataset ensuring fault tolerance for both components and utlized gRPC for communication among the three processes for each iteration.",
      technologies: [
        "Python",
        "gRPC",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Vaibtan/CSE-530-Distributed-Systems/tree/main/Assignment%202",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/kmeans.png",
      video: "",
    },
    {
      title: "Cycle Accurate Simulator for a 5 stage RISC CPU",
      href: "https://github.com/Vaibtan/CSE511_CA_project",
      dates: "",
      active: true,
      description:
        "Implemented a simulator for a processor based on RV32I variant of RISC-V ISA where the microarchitecture included a 5 stage pipeline allowing forwarding/bypassing and separate execution unit for Network on Chip operations,along with a 2-way set associative cache following Least Recently Used replacement policy.",
      technologies: [
        "C++",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Vaibtan/CSE511_CA_project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cpu.webp",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
  ],
  gqlConfig: {
    domain: "https://gql.hashnode.com/",

    // the hashnode blog you want to fetch data from
    host: "vaibtan.hashnode.dev",

    // the main timeline series-slug you want to fetch data from
    series: "timeline",
  },
} as const;
