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
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Measures",
    },
    {
      id: "contact",
      title: "Goals",
    },
  ];
  
  const services = [
    {
      title: "16 Years Old",
      icon: web,
    },
    
    {
      title: "Barcelona",
      icon: figma,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
    
  
  const projects = [
    {
      name: "Week 1",
      description:
        "From the 20th to the 26th of November.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "responsive",
          color: "green-text-gradient",
        },
        {
          name: "landing-page",
          color: "pink-text-gradient",
        },
      ],
      image: "/week1-img.jpg",
      source_code_link: "link",
    },
  ];
  
  export { services, technologies, projects };