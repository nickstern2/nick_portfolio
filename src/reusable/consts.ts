export enum RouteNames {
  BaseName = "/nick_portfolio",
  Home = "/",
  Testimonials = "/testimonials",
  Projects = "/projects",
  Resume = "/resume",
  Contact = "/contact",
}

export const SummaryContent =
  "As a seasoned Software Engineer, my journey in tech started in 2017, I've leveraged my business economics acumen alongside my expertise in React, JavaScript, GraphQL, and TypeScript. At Applied Visions, I've enhanced web application performance by 12% through strategic code refactoring and optimized GraphQL practices, while Material-UI integration has reduced development time by 7%. My drive is to create accessible, well-engineered user interfaces where aesthetics meet functionality.";
export const HobbyContent =
  "Away from the screen, my pursuits are as varied as my programming languages. Whether it's playing guitar, chess, or spending quality time with family and pets, I embrace the balance between a tech-enthusiast's drive for innovation and the rich tapestry of life's adventures.";

const youtubeCloneDescription =
  "A replica of YouTube.com, this platform offers users the capability to search for and view videos, while also presenting recommendations for additional content. It meticulously mirrors the essential functionalities and user experience of the original video-sharing website.";
const mealTrackDescription =
  "MealTrack offers a sophisticated software solution tailored for meal prep companies. It emphasizes advanced software capabilities that manage sales, customer engagement, and operational workflows, enabling businesses to focus on expansion and improving customer experiences.";
const UmbravaDescription =
  "Umbrava stands out for its sophisticated software solutions that streamline the way businesses connect with vendors and clients. Their platform simplifies the creation and management of work orders, the processing of invoices and proposals, and the handling of payments, making these processes more efficient and transparent. By optimizing these critical business functions, Umbrava empowers companies to enhance their operational efficiencies and improve their service delivery, fostering stronger relationships with both vendors and clients.";
export const jobTitle = "Frontend Engineer";
export enum TechStack {
  React = "React",
  JavaScript = "JavaScript",
  TypeScript = "TypeScript",
  GraphQL = "GraphQL",
  HTML = "HTML",
  CSS3 = "CSS3",
  MaterialUI = "Material UI",
  NETCore = ".NET Core",
  Ruby = "Ruby",
  RubyOnRails = "Ruby On Rails",
  PostgresSQL = "PostgresSQL",
  MongoDB = "MongoDB",
  CSharp = "C#",
  ReactRouterDom = "React Router Dom",
}

export const projects = [
  {
    title: "MealTrack",
    description: mealTrackDescription,
    link: "https://mealtrack.com",
    techStack: [
      TechStack.React,
      TechStack.TypeScript,
      TechStack.JavaScript,
      TechStack.MaterialUI,
      TechStack.NETCore,
      TechStack.CSharp,
      TechStack.GraphQL,
      TechStack.ReactRouterDom,
    ],
  },
  {
    title: "Umbrava",
    description: UmbravaDescription,
    link: "https://umbrava.com",
    techStack: [
      TechStack.React,
      TechStack.TypeScript,
      TechStack.JavaScript,
      TechStack.MaterialUI,
      TechStack.NETCore,
      TechStack.CSharp,
      TechStack.GraphQL,
      TechStack.ReactRouterDom,
    ],
  },
  {
    title: "Youtube Clone",
    description: youtubeCloneDescription,
    link: "https://nickstern2.github.io/youtube/",
    techStack: [
      TechStack.React,
      TechStack.JavaScript,
      TechStack.TypeScript,
      TechStack.JavaScript,
      TechStack.MaterialUI,
    ],
  },
  // Add more projects as needed
];
