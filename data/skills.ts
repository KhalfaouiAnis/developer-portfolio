import type { SkillCategory } from "@/types";

const data: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { id: 1, name: "React", image: "/skills/react.png" },
      { id: 2, name: "Next.js", image: "/skills/next-js.png" },
      { id: 3, name: "TypeScript", image: "/skills/typescript.png" },
      { id: 4, name: "JavaScript", image: "/skills/javascript.png" },
      { id: 5, name: "Tailwind CSS", image: "/skills/tailwind.png" },
      { id: 6, name: "Vue", image: "/skills/vuejs.png" },
      { id: 7, name: "Angular", image: "/skills/angularjs.png" },
      { id: 8, name: "React Native", image: "/skills/react-native.png" },
      { id: 9, name: "Redux", image: "/skills/redux.png" },
      { id: 10, name: "Material UI", image: "/skills/mui.png" },
      { id: 11, name: "Bootstrap", image: "/skills/bootstrap.png" },
      { id: 12, name: "HTML 5", image: "/skills/html-5.png" },
      { id: 13, name: "CSS 3", image: "/skills/css3.png" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { id: 1, name: "Java", image: "/skills/java.png" },
      { id: 2, name: "Spring Boot", image: "/skills/boot.png" },
      { id: 3, name: "Spring", image: "/skills/spring.png" },
      { id: 4, name: ".NET Core", image: "/skills/dotnetcore.webp" },
      { id: 5, name: "Node.js", image: "/skills/node.png" },
      { id: 6, name: "NestJS", image: "/skills/nestjs.svg" },
      { id: 7, name: "Express", image: "/skills/express.png" },
      { id: 8, name: "Laravel", image: "/skills/laravel.webp" },
      { id: 9, name: "RabbitMQ", image: "/skills/rabbitmq.webp" },
    ],
  },
  {
    id: "database",
    label: "Databases",
    skills: [
      { id: 1, name: "PostgreSQL", image: "/skills/postgresql.png" },
      { id: 2, name: "MySQL", image: "/skills/mysql.png" },
      { id: 3, name: "MongoDB", image: "/skills/mongodb.png" },
      { id: 4, name: "Firebase", image: "/skills/firebase.png" },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Tools",
    skills: [
      { id: 1, name: "Docker", image: "/skills/docker.png" },
      { id: 2, name: "Kubernetes", image: "/skills/kubernetes.webp" },
      { id: 3, name: "Jenkins", image: "/skills/jenkins.png" },
      { id: 4, name: "Git", image: "/skills/git.png" },
      { id: 5, name: "Vercel", image: "/skills/vercel.webp" },
      { id: 6, name: "Figma", image: "/skills/figma.png" },
      { id: 7, name: "Jest", image: "/skills/jest.png" },
    ],
  },
];

export default data;
