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
  wordpress,
  php,
  cpp,
  bootstrap,
  instalite,
  jobportal,
  freepixel,
  ecommerceWebsite,
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
    title: "Team Lead",
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
  {
    title: "Intern Software Engineer",
    company_name: "Free Pixel Games Ltd.",
    icon: freepixel,
    iconBg: "#E6DEDD",
    date: "Feb - 2022",
    points: [
      "Develop game using cocos2dx Js",
      "Collaborating with cross-functional teams including designers, product managers, and other developers.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Created Some Instant games.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/.jpg",
  },
];

const projects = [
  {
    name: "Insta-lite",
    description:
      "A visually striking social media app with a seamless native mobile experience. Powered by a unique tech stack, including React JS, Appwrite, TypeScript, and more, it boasts features like infinite scroll and exceptional performance.",

    // "This is a social media app featuring a visually striking UI with a seamless native mobile experience. Elevating its capabilities, the app is powered by a unique tech stack, incorporating elements such as infinite scroll functionality and exceptional performance through technologies like React JS, Appwrite, TypeScript, and more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
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
    source_code_link: "#",
  },
  {
    name: "E-commerce Website",
    description:
      "Developed a dynamic and responsive e-commerce website using React, demonstrating my proficiency in modern web development. The website features a sleek and intuitive user interface, providing a seamless shopping experience for users.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerceWebsite,
    source_code_link: "https://react-e-commerce-website-zeta.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
