import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  jobdesk,
  tripguide,
  wordpress,
  php,
  cpp,
  bootstrap,
  instalite,
  jobportal,
} from "../assets";
//  nodejs,
// mongodb,
//  threejs,

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Wordpress Developer",
    icon: mobile,
  },
  {
    title: "Software Quality Assurance",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "WordPress",
    icon: wordpress,
  },
  {
    name: "php",
    icon: php,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "C++",
    icon: cpp,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "jobdesk Ltd.",
    icon: jobdesk,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Ongoing",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Wordpress Developer",
    company_name: "jobdesk Ltd.",
    icon: jobdesk,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Jan 2023",
    points: [
      "Developed and maintained WordPress websites for clients, including custom themes and plugins.",
      "Collaborated with designers and project managers to ensure websites meet client’s requirements and are delivered on time.",
      "Optimized website speed and performance using various tools and techniques.",
      "Designed front‐end according to the given UI design.",
    ],
  },
  {
    title: "SQA",
    company_name: "jobdesk Ltd.",
    icon: jobdesk,
    iconBg: "#E6DEDD",
    // date: "Jan 2022 - Jan 2023",
    points: [
      "Conducted end-to-end testing of software applications and mobile apps to identify defects, ensure functionality, and verify user experience.",
      "Developed and execute comprehensive test plans, test cases, and test scripts for new features and enhancements.",
      "Collaborated closely with developers, product managers, & designers to understand requirements and ensure alignment with testing efforts.",
      "Utilized manual testing techniques to assess user interfaces,functionality, compatibility, and performance across multiple devices and platforms.",
    ],
  },

  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Insta-lite",
    description:
      "This is a social media app featuring a visually striking UI with a seamless native mobile experience. Elevating its capabilities, the app is powered by a unique tech stack, incorporating elements such as infinite scroll functionality and exceptional performance through technologies like React JS, Appwrite, TypeScript, and more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: instalite,
    source_code_link: "https://insta-lite.vercel.app/",
  },
  {
    name: "Job Portal Website",
    description:
      "This job portal website is made for our clients created with WordPress and using custom plugin. Seamlessly integrated a user-friendly interface with advanced search filters, allowing job seekers to find relevant opportunities efficiently.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobportal,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
