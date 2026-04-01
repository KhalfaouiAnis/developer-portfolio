import type { Project } from "@/types";

const data: Project[] = [
  {
    id: 1,
    title: "Wheel Men — Car auctions app built with .Net 9 & Next.js 15",
    shortTitle: "Wheel Men",
    image: "/projects/car-bids.png",
    description:
      "A car auctions platform where users can list cars for sale, place real-time bids, and get notified when an auction ends. Built with a microservices architecture using .NET 9, Next.js 15, RabbitMQ for event streaming, and deployed with Docker & Kubernetes.",
    category: ["fullstack", "backend"],
    skills: [
      { id: 1, name: ".NET", image: "/skills/dotnetcore.webp" },
      { id: 2, name: "React", image: "/skills/react.png" },
      { id: 3, name: "Next.js", image: "/skills/next-js.png" },
      { id: 4, name: "TypeScript", image: "/skills/typescript.png" },
      { id: 5, name: "Tailwind CSS", image: "/skills/tailwind.png" },
      { id: 6, name: "PostgreSQL", image: "/skills/postgresql.png" },
      { id: 7, name: "MongoDB", image: "/skills/mongodb.png" },
      { id: 8, name: "Docker", image: "/skills/docker.png" },
      { id: 9, name: "Kubernetes", image: "/skills/kubernetes.webp" },
      { id: 10, name: "RabbitMQ", image: "/skills/rabbitmq.webp" },
    ],
    source_code: "https://github.com/KhalfaouiAnis/cars-bid",
  },
  {
    id: 2,
    title: "Jobify — Multi-role job portal to track applications",
    shortTitle: "Jobify",
    image: "/projects/jobify.png",
    description:
      "A multi-role job portal built with the MERN stack where recruiters can post jobs and candidates can apply and track their applications. Features role-based access control, a rich dashboard, and email notifications.",
    category: ["fullstack"],
    skills: [
      { id: 1, name: "React", image: "/skills/react.png" },
      { id: 2, name: "Node.js", image: "/skills/node.png" },
      { id: 3, name: "Tailwind CSS", image: "/skills/tailwind.png" },
      { id: 4, name: "TypeScript", image: "/skills/typescript.png" },
      { id: 5, name: "MongoDB", image: "/skills/mongodb.png" },
    ],
    source_code: "https://github.com/KhalfaouiAnis/jobify",
  },
  {
    id: 3,
    title: "Prostore — E-commerce platform with Stripe checkout",
    shortTitle: "Prostore",
    image: "/projects/prostore.png",
    description:
      "A full-featured e-commerce platform built with Next.js 15. Includes product catalogue, shopping cart, Stripe payment integration, order management, and an admin dashboard for inventory control.",
    category: ["fullstack", "frontend"],
    skills: [
      { id: 1, name: "React", image: "/skills/react.png" },
      { id: 2, name: "Next.js", image: "/skills/next-js.png" },
      { id: 3, name: "Tailwind CSS", image: "/skills/tailwind.png" },
      { id: 4, name: "TypeScript", image: "/skills/typescript.png" },
      { id: 5, name: "Node.js", image: "/skills/node.png" },
      { id: 6, name: "MongoDB", image: "/skills/mongodb.png" },
    ],
    source_code: "https://github.com/KhalfaouiAnis/prostore",
  },
  {
    id: 4,
    title: "NextMatch — Real-time dating app with live messaging",
    shortTitle: "NextMatch",
    image: "/projects/next-match.png",
    description:
      "A dating app with real-time messaging powered by Pusher, user authentication via NextAuth, and a seamless UI built with Hero UI. Users can match, chat, and manage their profiles with full privacy controls.",
    category: ["fullstack", "frontend"],
    skills: [
      { id: 1, name: "React", image: "/skills/react.png" },
      { id: 2, name: "Next.js", image: "/skills/next-js.png" },
      { id: 3, name: "Tailwind CSS", image: "/skills/tailwind.png" },
      { id: 4, name: "TypeScript", image: "/skills/typescript.png" },
      { id: 5, name: "Node.js", image: "/skills/node.png" },
      { id: 6, name: "PostgreSQL", image: "/skills/postgresql.png" },
    ],
    source_code: "https://github.com/KhalfaouiAnis/next-match",
  },
  {
    id: 5,
    title: "Musify — Music streaming platform built with Vue & Firebase",
    shortTitle: "Musify",
    image: "/projects/vue-music.png",
    description:
      "A music streaming SPA where users can upload, organise, and stream their favourite tracks. Built with Vue 3, TypeScript, and Firebase for real-time storage and authentication.",
    category: ["frontend"],
    skills: [
      { id: 1, name: "Vue", image: "/skills/vuejs.png" },
      { id: 2, name: "JavaScript", image: "/skills/javascript.png" },
      { id: 3, name: "Tailwind CSS", image: "/skills/tailwind.png" },
      { id: 4, name: "TypeScript", image: "/skills/typescript.png" },
      { id: 5, name: "Firebase", image: "/skills/firebase.png" },
    ],
    source_code: "https://github.com/KhalfaouiAnis/vue-music",
  },
];

export default data;
