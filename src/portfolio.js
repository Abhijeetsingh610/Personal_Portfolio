/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abhijeet Singh",
  title: "Hi all, I'm Abhijeet",
  subTitle: emoji(
    "A  passionate and aspiring Software Developer 🚀 with expertise in Data Science, Machine Learning, and Full-Stack Development. Skilled in building dynamic applications using Python, React, Node.js, and crafting solutions that turn data into powerful insights."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1JB1pRKko3FV6AEiSDx4BTS4uDircVCKX/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AbhijeetMITWPU",
  linkedin: "https://www.linkedin.com/in/singhabhijeet16/",
  gmail: "abhis6102003@gmail.com",
  medium: "https://medium.com/@Abhijeet__singh",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER & DATA SCIENTIST WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Crafting insightful, data-driven applications that turn complexity into clarity"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
    emoji("⚡ Leveraging powerful Machine Learning models to enhance decision-making and efficiency")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "MIT-World Peace University , PUNE",
      logo: require("./assets/images/mit.png"),
      subHeader: "Bachelor's of Technology in Computer Science and Engineering ",
      duration: "August 2021 - May 2025",
      desc: "Participated in the Smart India Hackathon Got Selected in top 3",
      descBullets: [
        "Represented MIT-WPU in ICPC(International Collegiate Programming Contest)",
       
      ]
    },
    {
      schoolName: "Divine Public School",
      logo: require("./assets/images/divine.jfif"),
      subHeader: "Senior Secondary School",
      duration: "April 2020 - May 2021",
      desc: "",
      // descBullets: [""]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Backend", //Insert stack or technology you have experience in
      progressPercentage: " 90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Science",
      progressPercentage: "80%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "70%"
    },
    {
      Stack: "Python",
      progressPercentage: "90%"
    },
    {
      Stack: "C++",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Intern",
      company: "ISRO (Indian Space Research Organisation)",
      companylogo: require("./assets/images/isro.png"),
      date: "July 2024 – Present",
      desc: "",
      descBullets: [
        "Developed a cloud-based processing chain to estimate Plant Area Index and Biomass using satellite data, enhancing the accuracy of crop monitoring.",
        "Integrated and analyzed large, multi-source satellite datasets (Sentinel-1, Sentinel-2, Landsat-8) to extract critical biophysical parameters, employing machine learning techniques for enhanced predictive modeling.",
        "Utilized advanced machine learning algorithms, including Random Forest Regression, to derive insights from complex datasets, optimizing processes for better efficiency and scalability.",
        "Collaborated with a team to optimize workflows and streamline data processing pipelines, resulting in more efficient handling of large datasets."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY PERSONAL PROJECTS",
  projects: [
    {
      image: require("./assets/images/p1.jpg"),
      projectName: "Number Plate Detection",
      projectDesc: " Designed a real-time number plate detection system, enhancing accuracy by 85% and reducing processing time by 40%",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/AbhijeetMITWPU/Number_Plate_Detection"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/p2.jpeg"),
      projectName: "Object Detection ",
      projectDesc: "Developed an object detection system using TensorFlow, optimizing algorithms to enhance accuracy and achieve reliable real-time detection performance.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/AbhijeetMITWPU/Object-Detection"
        }
      ]
    },
    {
      image: require("./assets/images/p3.jpeg"),
      projectName: "Sign Language Detection ",
      projectDesc: " Deployed a machine learning model for real-time sign language interpretation, achieving 92% accuracy",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/AbhijeetMITWPU/Sign-Language-Detection"
        }
      ]
    },
    {
      image: require("./assets/images/p4.png"),
      projectName: "Snake Evolution: Learning to Win ",
      projectDesc: " This project implements a Snake AI using Reinforcement Learning, where the snake learns from its mistakes and improves with each penalty. The AI is trained using Linear QNet and QTrainer, employing deep Q-learning to develop strategic gameplay.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/AbhijeetMITWPU/Snake_AI_RL"
        }
      ]
    },
    {
      image: require("./assets/images/p5.png"),
      projectName: "Code_Hub",
      projectDesc: " Code_hub where u can ask question related to coding error and get answer from experts",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/AbhijeetMITWPU/Code_Hub"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "ICPC Participation 2022",
      subtitle:
        "Competed in the International Collegiate Programming Contest (ICPC) and achieved a rank of 1048, showcasing my problem-solving skills and algorithmic proficiency in a competitive environment.",
      image: require("./assets/images/icpc.png"),
      imageAlt: "ICPC Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1aY0MZ-UY9qRBpKLBDimiEk0ixiEVRyZX/view?usp=sharing"
        }
      ]
    },
    {
      title: "ICPC Participation 2023",
      subtitle:
        "Competed in the International Collegiate Programming Contest (ICPC) in 2024 and achieved a rank of 745, demonstrating my problem-solving skills and algorithmic proficiency in a competitive environment. ",
      image: require("./assets/images/icpc.png"),
      imageAlt: "ICPC Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1oDr-IPL0XurdfZBJH1pSi-j4hlaIHVio/view?usp=sharing"
        }
      ]
    },

    {
      title: "Introduction to Deep Learning & Neural Networks with Keras",
      subtitle: "Completed the course from IBM, gaining hands-on experience in building and training deep learning models using Keras.",
      image: require("./assets/images/ibm.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {name: "Certification", url: "https://coursera.org/share/2a655739c2837b77089b616550b84ed8"},
        
      ]
    },
    {
      title: "Microsoft Student Ambassadors",
      subtitle: "Completed the Demystifying GitHub Copilot & Student Summit Watch Party event, gaining insights into GitHub Copilot and networking with fellow students.",
      image: require("./assets/images/mlsa.jpeg"),
      imageAlt: "Microsoft Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1Qgn1D1at3E_0kl0qevXowHwQU1NyGxNI/view?usp=sharing"},
        
      ]
    },
    {
      title: "Mastering DSA in C++",
      subtitle: "Completed a comprehensive course focused on Data Structures and Algorithms in C++, enhancing my problem-solving skills and coding efficiency.",
      image: require("./assets/images/c++.png"),
      imageAlt: "c++ Logo",
      footerLink: [
        {name: "Certification", url: "https://ude.my/UC-8f3273c6-846e-47a3-a0aa-7167daac6396"},
        
      ]
    },
    {
      title: "100 Days of Code : Python",
      subtitle: "Completed a 100-day coding challenge focused on Python, enhancing my programming skills through consistent practice and a variety of projects.",
      image: require("./assets/images/python.jpeg"),
      imageAlt: "Python Logo",
      footerLink: [
        {name: "Certification", url: "https://ude.my/UC-d80f0cba-bf93-4b5e-9c4e-d90f4614cc20"},
        
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@Abhijeet__singh/training-an-ai-to-master-the-snake-game-with-reinforcement-learning-eeb965205883",
      title: "Training an AI to Master the Snake Game with Reinforcement Learning",
      description:
        "This article explores training an AI to play the classic Snake game using reinforcement learning."
    },
    {
      url: "https://medium.com/@Abhijeet__singh/introduction-to-machine-learning-with-python-3c17a68d6e89",
      title: "Introduction to Machine Learning with Python",
      description:
        "The main focus of ML is to allow computer systems to learn from experience without explicitly programmed or human intervention."
    },
    {
      url: "https://medium.com/@Abhijeet__singh/mastering-machine-learning-the-ultimate-beginners-roadmap-7d67e63098c1",
      title: "Mastering Machine Learning: The Ultimate Beginner's Roadmap",
      description:
        "Your ultimate beginner's guide to mastering machine learning."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "+92-0000000000",
  email_address: "abhis6102003@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
