import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mohamed Riyas",
  initials: "YS",
  url: "https://itsriyas.qzz.io/",
  location: "Thrissur, Kerala, India",
  locationLink: "https://www.google.com/maps/place/Thrissur",
  description:
    "Software Developer, Entrepreneur, and Maker. I build products that help people.",
  summary:
    "I'm Riyas, a passionate Software Developer at Thea IT Solutions with a Bachelor's degree in Computer Applications. I pursued a [MEARN Full-Stack Developer course](/#education), and specialize in building scalable, high-performance web applications using MongoDB, Express.js, Angular, React, and Node.js. With a strong foundation in modern web technologies, I thrive on solving complex problems and delivering impactful digital solutions.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Angular",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mohamedriyas.dev@gmail.com",
    tel: "+919946198983",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/itsriyaas",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/itsriyas/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/itsmozaco",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:mohamedriyas.dev@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Thea IT Solutions",
      href: "https://theaitsolutions.net/",
      badges: [],
      location: "Irinjalakkuda, Thrissur",
      title: "Software Developer",
      logoUrl: "/thea_it_solutions_logo.jpeg",
      start: "Apr 2025",
      end: "Present",
      description:
        "Building scalable and efficient web applications using modern JavaScript technologies, primarily the MEARN stack (MongoDB, Express.js, Angular/React, and Node.js).My role involves end-to-end development from requirement analysis and database modeling to frontend integration and backend API development.I actively contribute to the development of client projects, internal tools, and enterprise-level solutions with a strong focus on clean architecture, security, and performance optimization.",
    },
    {
      company: "Luminar Technolab",
      badges: [],
      href: "https://www.luminartechnolab.com/",
      location: "Kakkanad, Kochi",
      title: "Full Stack Developer",
      logoUrl: "/luminartechnolab_logo.jpeg",
      start: "Jun 2024",
      end: "Jan 2025",
      description:
        "During my internship at Luminar Technolab, I worked as a Full-Stack Developer, gaining hands-on experience in building modern web applications using the MEARN stack (MongoDB, Express.js, Angular/React, Node.js).My responsibilities included creating responsive interfaces, integrating RESTful APIs, managing databases with MongoDB, and deploying full-stack applications.",
    },
    {
      company: "Aabasoft",
      href: "https://www.aabasoft.com/",
      badges: [],
      location: "Kakkanad, Kochi",
      title: "BPO Executive",
      logoUrl: "/aabasoft_logo.jpeg",
      start: "Sep 2024",
      end: "Nov 2024",
      description:
        "Handled customer queries and Provided product/service information and resolved customer complaints.Maintained records and ensured accuracy in documentation.Helped customers troubleshoot technical issues with software or devices Explained product features and benefits to customers.Participated in team meetings and training sessions.",
    },
    {
      company: "Riss Technologies",
      href: "https://www.risstechnologies.com/",
      badges: [],
      location: " Anchery, Thrissur",
      title: "Full Stack Developer",
      logoUrl: "/riss_logo.jpeg",
      start: "Jul 2023",
      end: "Feb 2024",
      description:
        "As a self-employed Full-Stack Developer at Riss Technologies, I lead the design and development of complete web applications.",
    }
  ],
  education: [
    {
      school: "Calicut University",
      href: "https://uoc.ac.in/",
      degree: "Bachelor of Computer Applications",
      logoUrl: "/calicut_university.png",
      start: "2021",
      end: "2024",
    },
    {
      school: "Nalanda Higher secondary school ",
      href: "",
      degree: "Secondary education, Science",
      logoUrl: "",
      start: "2019",
      end: "2021",
    }
  ],
  projects: [
    {
      title: "Adorn Builders",
      href: "https://adornbuilders.com/",
      dates: "Jun 2025 - Jun 2025",
      active: true,
      description:
        "I had the pleasure of working with Adorn Builders to develop a compelling website that captures their innovative essence and positions them effectively in the market.",
      technologies: [
        "Html",
        "Css",
        "Scss",
        "Javascript",
        "BootstrapCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://adornbuilders.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/adorn.mp4",
    },
    {
      title: "Homeopathy",
      href: "https://homeopathy-ten.vercel.app/",
      dates: "Jul 2025 - Jul 2025",
      active: true,
      description:
        "Designed, developed a homeopathy website that provides information about homeopathy, its benefits, and how it works. The website features a user-freindly interface, easy navigation and a responsive design that works seamlessly on all devices",
      technologies: [
        "React",
        "Javascript",
        "Html",
        "Css"
      ],
      links: [
        {
          type: "Website",
          href: "https://homeopathy-ten.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video: "homeopathhy.mp4",
    },
    {
      title: "Tour Planners",
      href: "https://sahayathritourplanners.com/",
      dates: "Jun 2025 - Jul 2025",
      active: true,
      description:
        "Crafted a website for Sahayathri tour planners, highlighting their travel packages and details with an intuitive design.",
      technologies: [
        "Html",
        "Javascript",
        "Css",
      ],
      links: [
        {
          type: "Website",
          href: "https://sahayathritourplanners.com/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video: "https://itsriyas-web.vercel.app/assets/Sahayathri%20Tour%20Planners.webm",
    },
    {
      title: "VouxoSports",
      href: "",
      dates: "Sep 2024 - Feb 2025",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "React",
        "Express.js",
        "Node.js",
        "Javascript",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
         {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Gloud Games",
      dates: "November 2023 - Present",
      location: "Remote",
      description:
        "A Cloud Gaming application for Android developed with using Sketchware IDE.",
      image:
        "https://play-lh.googleusercontent.com/kGeX3dJ2-cBzHJe-X4WUs00kCPg4XggSU0qQajBV_8UX-2DUiQn2CdwT6-WyS7SQhz8",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Watchnow Android",
      dates: "Feb 2025 - Present",
      location: "Remote",
      description:
        "Developed a Movie Streaming android application with using Sketchware IDE",
      image:
        "https://watchnowapp.vercel.app/images/watchnow-logo.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/itsriyaas",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://watchnowapp.vercel.app/",
        },
      ],
    },
    {
      title: "Watchnow",
      dates: "December, 2024",
      location: "Remote",
      description:
        "Developed a Movie streaming website with using Next.js, Tailwind CSS and MongoDB",
      image:
        "https://watchnowapp.vercel.app/images/watchnow-logo.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/itsriyaas",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://watchnowin.vercel.app/",
        },
      ],
    },
  ],
} as const;
