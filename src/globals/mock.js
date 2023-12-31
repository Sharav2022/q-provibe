import Slide1Image from "../assets/images/slide1.jpeg";
import Slide2Image from "../assets/images/slide2.jpeg";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import FacebookIcon from "../assets/icons/facebook.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import InstagramIcon from "../assets/icons/instagram.svg";

import AnalyticsIcon from "../assets/icons/why-us/analytics.svg";
import CMSIcon from "../assets/icons/why-us/cms.svg";
import RocketIcon from "../assets/icons/why-us/rocket.svg";
import MobileAppIcon from "../assets/icons/why-us/mobile-app.svg";
import TimerIcon from "../assets/icons/why-us/timer.svg";
import WebSearchIcon from "../assets/icons/why-us/web-search.svg";

export const COMPANY_NAME = "Qprovibe Solutions";

export const Services = [
  {
    id: "product-design",
    mediaUrl: "/images/services/service_1.png",
    title: "Product Design",
    mainDescription:
      "Product design involves the design of mobile apps, web applications, IoT devices, desktop applications, and more. The purpose of product design is to create a digital tool that supports users in accomplishing their goals.",
    description:
      "Design is the art of creating and building visually appealing and user-friendly websites/applications that help businesses establish a strong online presence. It involves the process of planning, designing, and implementing elements such as layout, colors, graphics, and content to create a website that not only looks impressive but also delivers an exceptional user experience.",
    solutions: [
      "Design services come together with a range of expert solutions geared towards crafting websites that effectively represent a company's brand, products, and services.",
      "It includes everything from designing the website's layout and navigation to choosing color schemes, fonts, and images that resonate with the target audience. ",
      "Web Design ensures that the website is not only visually appealing but also easy to use and navigate, making it a delightful experience for visitors.",
    ],
    type: "design",
    url: "services/product-design",
  },
  {
    id: "web-development",
    mediaUrl: "/images/services/service_2.png",
    title: "Web Development",
    mainDescription:
      "Refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.",
    description:
      "Creating websites with matchless quality, huge creativity and innovative ideas that assist in lead generation, high ROI and swift business growth. It encompasses many different skills and disciplines in the production and maintenance of websites. Our renowned technical team has a vast experience and perception of relevant practices, coding, markup and style languages such as Angular, React, JSP etc.",
    solutions: [
      "We are one of the leading and highly acclaimed brand in developing some of the most elaborative, yet user-friendly solutions in the industry.",
      "Our team at  ${COMPANY_NAME}  gives an immense privilege to all the clients and follows a customer-oriented approach. We develop a customer-centric experience by analyzing harmonious options for the perfect result.",
      "We provide you with a peerless and most favorable solution by using the latest and innovative technology and integrating our experience with your vision. We provide you with appropriate training and support after your project is accomplished.",
    ],
    type: "development",
    url: "services/web-development",
  },
  {
    id: "software-testing",
    mediaUrl: "/images/services/service_3.png",
    title: "Software Testing",
    mainDescription:
      "To check all aspects of the web application's functionality, including looking for bugs with usability, compatibility, security, and general performance.",
    description:
      "Testing methodology aligns with the Agile methodology proposed for customers. It has been optimized over many iterations of successful web development cycles with one key objective: to ensure that all features and functionality perform as expected per our clients’ defined requirements.",
    solutions: [
      "QA is a holistic approach that covers all phases of the engagement, identifies any anomalies early in the process and mitigates high-risk issues while working toward a high-quality product and user experience.",
      "When planning, executing, and documenting QA, we look at applications through the following lenses, which are comparable to health checks.",
      "User-site interactions are heuristic and meet standards for usability across all devices and browsers. With cross browser testing (IE, Chrome, Firefox, and Safari on Mac and PC hardware)",
      "Accessibility testing access the whole website with compliance with WCAG 2.0 AA, plus educational resources to help you create accessible audio, video, and text files.",
    ],
    type: "testing",
    url: "services/software-testing",
  },
  {
    id: "launching-and-support",
    mediaUrl: "/images/services/service-4_1.png",
    title: "Launching and Support",
    mainDescription:
      " ${COMPANY_NAME} launches and continues to maintain the website in collaboration with customer personnel to ensure it continues to demonstrate best-in-class usability and functionality.",
    description:
      "Launching a new feature can be a step into the unknown — our customers are creative and will use our product in ways we didn't anticipate and ask questions for which we didn't prepare answers.We create an Internal Release Guide for the Customer Advocacy team for each new feature that describes how it works and highlights the good-to-knows, such as plans for future iterations. Depending on how customers use it, some additional functionality might be planned for the future, and we might anticipate questions about this.",
    // type: "testing",
    solutions: [
      "Regularly scheduled database and server backups, maintenance, and tuning.",
      "Testing and deployment of O/S and application upgrades and patches to resolve vulnerabilities.",
      "Monthly reporting of metrics to be defined by the customer (e.g., uptime of services during the previous month, planned and unplanned service interruptions, list of maintenance activities performed during the previous month).",
      "Updates to system and user documentation as needed. Recommendations on developing and maintaining a dashboard of analytics to measure the site’s effectiveness.",
      "Reports on search engine optimization. System monitoring, notifications, and alerts.",
    ],
    url: "services/launching-and-support",
  },
];

export const HeaderItems = [
  {
    id: 1,
    title: "Home",
    url: "",
  },
  {
    id: 2,
    title: "Services",
    url: "services",
    child: Services,
  },
  {
    id: 3,
    title: "About us",
    url: "about-us",
  },
  {
    id: 4,
    title: "Support",
    url: "support",
  },
];

export const FooterDescription = `${COMPANY_NAME} offers fully managed IT Services to low end business. Belives in providing solutions to every problem and deriving results for the better future.`;

export const SocialLinks = [
  {
    id: 1,
    title: "Facebook",
    selector: "facebook",
    url: "https://www.facebook.com",
    icon: <FacebookIcon />,
  },
  {
    id: 2,
    title: "LinkedIn",
    selector: "linkedin",
    url: "https://www.linkedin.com/company",
    icon: <LinkedinIcon />,
  },
  {
    id: 3,
    title: "Twitter",
    selector: "twitter",
    url: "https://twitter.com/",
    icon: <TwitterIcon />,
  },
  {
    id: 4,
    title: "Instagram",
    selector: "instagram",
    url: "https://www.instagram.com/",
    icon: <InstagramIcon />,
  },
];

export const OFFICIAL_MAIL = "Qprovibe.24@gmail.com";

export const COPYRIGHT = `${new Date().getFullYear()} © All rights reserved | ${COMPANY_NAME}`;

// Home Page
export const CarouselItems = [
  {
    id: 1,
    backgroundImage: Slide1Image,
    title: "We are The best",
    description: "We are ready To IT Solution Work.",
  },
  {
    id: 2,
    backgroundImage: Slide2Image,
    title: "We are Dedicated",
    description: "Making IT a part of your business.",
  },
];

export const Designs = [
  "UX/UI",
  "Web design",
  "Interactive design",
  "Motion design",
];

export const langs = [
  {
    id: 1,
    mediaUrl: "/images/langs/java.png",
    width: 77,
  },
  {
    id: 1,
    mediaUrl: "/images/langs/node.png",
    width: 63,
  },
  {
    id: 1,
    mediaUrl: "/images/langs/react.png",
    width: 104,
  },
  {
    id: 1,
    mediaUrl: "/images/langs/vue.png",
    width: 92,
  },
];

export const TestingResults = [
  {
    title: "20+",
    subtitle: "Tested projects",
  },
  { title: "40+", subtitle: "Happy customers" },
];

export const WHY_US_DESCRIPTION = `We work with organizations to design, implement, maintain, and upgrade their technology systems. We choose ${COMPANY_NAME} for their outsources IT Services becuase we make it easy.`;

export const WHY_US_CARDS = [
  {
    id: 1,
    title: "Staffing solved",
    description: `Finding the right IT talent is challenging because you need a swiss army knife of skills. With  ${COMPANY_NAME}, you pay the equivalent of one while getting the expertise of twenty.`,
    icon: <AnalyticsIcon />,
  },
  {
    id: 2,
    title: "Stress-free security",
    description:
      "Backups, reporting, business continuity planning, and disaster recovery strategy. We take the stress of breaches out of the equation.",
    icon: <TimerIcon />,
  },
  {
    id: 3,
    title: "Part of your team",
    description:
      "We are independently and locally owned. You’ll know our team because we’re part of your community.",
    icon: <WebSearchIcon />,
  },
  {
    id: 4,
    title: "IT Focus",
    description:
      "Tech operations is all we do and we make sure we’re the best. We’re the only IT partner you’ll need.",
    icon: <CMSIcon />,
  },
  {
    id: 5,
    title: "Adding value",
    description:
      "Our fully managed services don’t just save the day for you – they help drive revenue, reduce risk, and control expenses.",
    icon: <RocketIcon />,
  },
  {
    id: 6,
    title: "Holistic approach",
    description: `We don’t nickel and dime you for every tech need. When you work with  ${COMPANY_NAME}, you get the comprehensive support you need with a fixed fee package.`,
    icon: <MobileAppIcon />,
  },
];

export const SUPPORT_GET_IN_TOUCH_TITLE = "Get in Touch";
export const SUPPORT_GET_IN_TOUCH_DESC =
  "Have a project in mind? To request a quote contact us directly or fill out the form and let us know how we can help.";

export const ABOUT_US_TITLE = "Who we are?";
export const ABOUT_US_WHO_WE_ARE = [
  `${COMPANY_NAME} is a IT Solutions company, delivering services which includes Product Design, Web development and Software Testing. With the best practices and tailored guidelines, we created delightful experiences for our clients. We have earned a prominent and valuable position as a IT Company in India and the Canada.`,
  "Our products are designed to improve the work-life balance and management of our clients, helping them to achieve greater success and satisfaction. Whether it's through our mobile application development services, our online ERP system, or our redirect tracker tool, we aim to provide solutions that make managing a business easier and more efficient. We understand that running a business can be stressful, which is why we strive to create products that help our clients manage their workload and achieve a better work-life balance.",
];

export const HOW_WE_ARE = [
  {
    id: 1,
    title: "Customer Focused product development",
    description:
      "Throughout the design and development process we meet with you on a regular basis to gather feedback and ensure we are meeting your specific requirements.",
  },
  {
    id: 2,
    title: "Long-term partnerships with clients",
    description:
      "Even after deploying the initial product, we remain on your side, helping you go to market, maintaining the application and building future phases.",
  },
  {
    id: 3,
    title: "Scalable designs and clean code",
    description:
      "We use modern design and development practices to future-proof our solutions so they can continue to service our customers as they grow.",
  },
  {
    id: 4,
    title: "Agile Thinking",
    description:
      "We prioritize collaboration, adaptability to change, and short iterative development cycles. By embracing Agile principles, we deliver high-quality solutions that align with our clients’ unique and evolving needs.",
  },
  {
    id: 5,
    title: "Innovation",
    description:
      "Our design and development process provides a powerful framework for facilitating opportunity definition and idea development.",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    testimony: `I can't express how grateful I am to have partnered with  ${COMPANY_NAME} for our company's technology needs. From the moment we engaged with their team, we've experienced nothing short of exceptional service and expertise.`,
    name: "Vishnu Singh",
  },
  {
    id: 2,
    testimony: `One of the standout features of our collaboration has been their responsiveness. Whether it's a minor issue or a critical emergency,  ${COMPANY_NAME} has consistently been there to provide support. Their technicians are not only highly skilled but also excellent communicators, making complex tech jargon easy to understand for someone like me, who isn't tech-savvy.`,
    name: "Unnati Sabarwal",
  },
  {
    id: 3,
    testimony: `I can confidently say that  ${COMPANY_NAME} has been an invaluable partner in our journey towards IT excellence. Their dedication, expertise, and unwavering commitment to our success are commendable. I wholeheartedly recommend them to any business seeking top-notch IT solutions and support.`,
    name: "Harshit",
  },
];

export const JOB_OPENING = {
  id: 1,
  mediaUrl: "images/job_opening.png",
  title: "Interested in joining our team?",
  type: "button",
  url: "https://ca.indeed.com/cmp/Sharav-Infotech-Inc./jobs",
  mainDescription:
    "If you have a passion for creating meaningful software applications we would love to hear from you. We pride ourselves in being an equal opportunity employer dedicated to shaping the future of healthcare technology. We embrace all unique stories, skillsets and fresh perspectives.",
};

export const TEAM = [
  // {
  //   id: 1,
  //   mediaUrl: "/images/team/MyPic.jpeg",
  //   name: "Shaveta Garg",
  //   position: "Founder",
  //   socialLinks: [
  //     {
  //       id: 1,
  //       type: "linkedin",
  //       url: "https://www.linkedin.com/in/shaveta-garg",
  //     },
  //     {
  //       id: 2,
  //       type: "facebook",
  //       url: "https://www.facebook.com",
  //     },
  //     {
  //       id: 3,
  //       type: "twitter",
  //       url: "https://twitter.com/",
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   mediaUrl: "/images/team/team_member.jpeg",
  //   name: "Shaveta Garg",
  //   position: "Founder",
  //   socialLinks: [
  //     {
  //       id: 1,
  //       type: "linkedin",
  //       url: "https://www.linkedin.com/in/shaveta-garg",
  //     },
  //     {
  //       id: 2,
  //       type: "facebook",
  //       url: "https://www.facebook.com",
  //     },
  //     {
  //       id: 3,
  //       type: "twitter",
  //       url: "https://twitter.com/",
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   mediaUrl: "/images/team/team_member.jpeg",
  //   name: "Shaveta Garg",
  //   position: "Founder",
  //   socialLinks: [
  //     {
  //       id: 1,
  //       type: "linkedin",
  //       url: "https://www.linkedin.com/in/shaveta-garg",
  //     },
  //     {
  //       id: 2,
  //       type: "facebook",
  //       url: "https://www.facebook.com",
  //     },
  //     {
  //       id: 3,
  //       type: "twitter",
  //       url: "https://twitter.com/",
  //     },
  //   ],
  // },
];

export const IT_CONSULTING_TITLE = "We Are Consultants";
export const IT_CONSULTING_HEADING =
  " ${COMPANY_NAME} saves you time by providing experienced IT professionals across all your locations.saves you time and money by providing experienced IT professionals across all your locations.";
export const IT_CONSULTING_ASPECTS_DESCRIPTION =
  "IT consultants at   ${COMPANY_NAME} work closely with businesses and organizations to offer guidance, expertise, and solutions to their IT-related challenges and needs. Here are some key aspects of our IT consulting:";
export const IT_CONSULTING_ASPECTS_ENDING =
  "IT consulting is a diverse field, and Our consultants are specialized in various areas, including Application development and maintenance, data analytics, software development, and more. The ultimate goal of our IT consulting is to help organizations leverage technology to improve their efficiency, competitiveness, and overall success in their respective industries.";
export const IT_CONSULTING_ASPECTS = [
  {
    id: 1,
    title: "Assessment and Analysis",
    description:
      "We begin by assessing the client's current IT infrastructure, processes, and goals. We analyze existing systems, identify issues, and determine areas for improvement.",
  },
  {
    id: 2,
    title: "Strategic Planning",
    description:
      "After assessing the client's needs and goals, Our IT consultants develop a strategic plan that outlines how technology can be used to meet those objectives. This plan may include recommendations for hardware, software, network configurations, security measures, and more.",
  },
  {
    id: 3,
    title: "Implementation",
    description:
      "Our IT consultants often play a significant role in implementing the recommended solutions. This may involve setting up new hardware or software, configuring networks, or integrating various systems to work seamlessly.",
  },
  {
    id: 4,
    title: "Project Management",
    description:
      "For larger IT projects, our consultants will manage the entire project, ensuring it stays on schedule and within budget. They coordinate with various stakeholders and vendors to ensure a successful implementation.",
  },
  {
    id: 5,
    title: "Training and Support",
    description:
      "Our IT consultants will provide training to the client's employees to ensure they can effectively use the new technology. They also offer ongoing support and troubleshooting services to address any issues that may arise.",
  },
  {
    id: 6,
    title: "Security and Compliance",
    description:
      "Our IT consultants often focus on ensuring the security of a client's IT systems and ensuring compliance with relevant regulations and standards, such as GDPR, HIPAA, or industry-specific requirements.",
  },
  {
    id: 7,
    title: "Cost Optimization",
    description:
      "Our Consultants help organizations optimize their IT spending by identifying areas where cost savings can be achieved without compromising performance or security.",
  },
  {
    id: 8,
    title: "Technology Trends",
    description:
      "Staying up-to-date with the latest technology trends and innovations is crucial for IT consultants. Our Consultants advise their clients on how emerging technologies can benefit their business.",
  },
  {
    id: 9,
    title: "Technology Trends",
    description:
      "Our IT consultants tailor their recommendations and solutions to meet the specific needs of each client. They consider factors such as the size of the organization, industry, budget constraints, and long-term goals.",
  },
  {
    id: 10,
    title: "Vendor Selection",
    description:
      "When new hardware or software is needed, consultants assist in selecting the right vendors and products based on their client's requirements.",
  },
];
