import type { Project } from "@/types";

const data: Project[] = [
  {
    id: 6,
    title:
      "Solar TN — Customer inventory website for Solar system products and services management.",
    shortTitle: "Solar TN",
    image: "/projects/solar_system.png",
    description:
      "Inventory website for a Tunisian local company in the solar system field. Showcase their products and services and also allowing them to sell on the internet.",
    category: ["frontend", "fullstack"],
    skills: [
      { id: 1, name: "React", image: "/skills/react.png" },
      { id: 2, name: "Next.js", image: "/skills/next-js.png" },
      { id: 3, name: "Node.js", image: "/skills/node.png" },
      { id: 4, name: "TypeScript", image: "/skills/typescript.png" },
      { id: 5, name: "Tailwind CSS", image: "/skills/tailwind.png" },
      { id: 6, name: "PostgreSQL", image: "/skills/postgresql.png" },
    ],
    source_code: "https://github.com/KhalfaouiAnis/cars-bid",
  },
  {
    id: 1,
    title: "Cars bids — Car auctions app built with .Net 9 & Next.js 15",
    shortTitle: "Cars bids",
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
    title: "X-Car — Automotive Marketplace Mobile App",
    shortTitle: "X-Car",
    image: "/projects/x_car.png",
    description:
      "a full-featured car marketplace app supporting listings for new, used, classic, and damaged vehicles across sales and rental agencies",
    category: ["mobile"],
    skills: [
      { id: 1, name: "React Native", image: "/skills/react-native.png" },
      { id: 2, name: "NativeWind", image: "/skills/tailwind.png" },
      { id: 3, name: "TypeScript", image: "/skills/typescript.png" },
      { id: 4, name: "Node.js", image: "/skills/node.png" },
      { id: 5, name: "PostgreSQL", image: "/skills/postgresql.png" },
    ],
    source_code: "https://github.com/KhalfaouiAnis/kuwait-cars-mobile",
  },
  {
    id: 5,
    title: "The Challenge — Multiplayer Quiz Game",
    shortTitle: "The Challenge",
    image: "/projects/the_challenge.png",
    description:
      "Cross-platform multiplayer mobile quiz game with live session management using Socket.io. TV casting support, allowing players to mirror and control the game from their phone to a TV screen",
    category: ["mobile"],
    skills: [
      { id: 1, name: "React Native", image: "/skills/react-native.png" },
      { id: 2, name: "NativeWind", image: "/skills/tailwind.png" },
      { id: 3, name: "TypeScript", image: "/skills/typescript.png" },
      { id: 4, name: "Node.js", image: "/skills/node.png" },
      { id: 5, name: "Socket.io", image: "/skills/socket.png" },
      { id: 6, name: "PostgreSQL", image: "/skills/postgresql.png" },
    ],
    source_code: "https://github.com/KhalfaouiAnis/vue-music",
  },
];

export default data;
