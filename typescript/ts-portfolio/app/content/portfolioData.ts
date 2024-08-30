// hosting
import vercelImg from "@/public/images/vercel.png";
import renderImg from "@/public/images/render.jpg";
// techstack
import tailwindImg from "@/public/images/tailwind-css.png";
import reactImg from "@/public/images/react-.png";
import nextImg from "@/public/images/next-js.png";
import expressImg from "@/public/images/expressjs.png";
import mongoImg from "@/public/images/database-mongo-db.png";
import nodeImg from "@/public/images/nodejs.png";

export const portfolioData = [
  {
    id: 1,
    title: "Listify",
    description:
      "Listify is a full-stack todo list application that allows users to manage their tasks efficiently. It features user authentication to ensure that each user's data is private and secure.",
    techstack: [
      {
        id: 1,
        name: "React",
        icon: reactImg,
        url: "https://reactjs.org/",
      },
      {
        id: 2,
        name: "Next.js",
        icon: nextImg,
        url: "https://nextjs.org/",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        icon: tailwindImg,
        url: "https://tailwindcss.com/",
      },
      {
        id: 4,
        name: "MongoDB",
        icon: mongoImg,
        url: "https://www.mongodb.com/",
      },
      {
        id: 5,
        name: "Express",
        icon: expressImg,
        url: "https://expressjs.com/",
      },
      {
        id: 6,
        name: "NodeJS",
        icon: nodeImg,
        url: "https://nodejs.org/",
      },
      {
        id: 7,
        name: "Render",
        icon: renderImg,
        url: "https://render.com/",
      },
      {
        id: 8,
        name: "Vercel",
        icon: vercelImg,
        url: "https://vercel.com/",
      },
    ],
    demo: "https://production-omega-rust.vercel.app/",
    source: "https://github.com/Franciss-prog/web-app-projects/tree/main/Listify",
  },
  {
    id: 2,
    title: "Login Authentication",
    description:
      "This project uses serverless architecture with Next.js to provide secure login and registration features. It offers scalable and ensuring a smooth user experience without managing server infrastructure.",
    techstack: [
      {
        id: 1,
        name: "React",
        icon: reactImg,
        url: "https://reactjs.org/",
      },
      {
        id: 2,
        name: "Next.js",
        icon: nextImg,
        url: "https://nextjs.org/",
      },
      {
        id: 3,
        name: "NodeJS",
        icon: nodeImg,
        url: "https://nodejs.org/",
      },
      {
        id: 4,
        name: "MongoDB",
        icon: mongoImg,
        url: "https://www.mongodb.com/",
      },
      {
        id: 5,
        name: "Tailwind CSS",
        icon: tailwindImg,
        url: "https://tailwindcss.com/",
      },
      {
        id: 6,
        name: "Vercel",
        icon: vercelImg,
        url: "https://vercel.com/",
      },
    ],
    demo: "https://next-login-authentication.vercel.app/",
    source: "https://github.com/example/slide3",
  },
  {
    id: 3,
    title: "Minimalist Portfolio",
    description:
      "This minimalist portfolio highlights my work and skills with a clean, distraction-free design, featuring a built-in email contact form for easy communication. Explore my projects and feel free to get in touch!",
    techstack: [
      {
        id: 1,
        name: "React",
        icon: reactImg,
        url: "https://reactjs.org/",
      },
      {
        id: 2,
        name: "Next.js",
        icon: nextImg,
        url: "https://nextjs.org/",
      },
      {
        id: 3,
        name: "NodeJS",
        icon: nodeImg,
        url: "https://nodejs.org/",
      },
      {
        id: 4,
        name: "Tailwind CSS",
        icon: tailwindImg,
        url: "https://tailwindcss.com/",
      },
      {
        id: 5,
        name: "Vercel",
        icon: vercelImg,
        url: "https://vercel.com/",
      },
    ],
    demo: "https://franciss-prog.vercel.app/",
    source:
      "https://github.com/Franciss-prog/web-app-projects/tree/main/main-portfolio",
  },
];
