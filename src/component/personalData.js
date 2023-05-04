const jhonData = {
  name: "Christian Gould",
  name2: "Christian Gould",
  name3: "Christian Gould",
  role: "Student, Upcoming Developer",
  ptext: "Student studying Computer Science at Southern Methodist University, Dallas, Texas. I am a developer with a passion for learning and creating, and I am very interested in Machine Learning, AI, REACT, and more.",
  // Link bubbles at the homescreen
  socialLinks: [
    {
      name: "Linked In",
      className: "social_linkedin",
      url: "https://www.linkedin.com/in/gouldilocks/"
    },
    {
      name: "Github",
      className: "bi bi-github",
      url: "https://gitub.com/Gouldilocks"
    },
  ],
  // About me
  aboutme: "About Me",
  aboutdetails:
    "Hello! I'm Christian Gould, and I am a junior software engineer, with a love for machine learning and AI. I have most of my experience in tools such as Python, Javascript, C++, and Java. A lot of my experience comes from full stack development and machine learning/AI. I aim to one day earn a P.H.D. in Computer Science and teach at a university level.",

    // Projects
  service: [
    {
      id: 0, // id is used for the key in the map function
      iconName: "https://www.pngfind.com/pngs/m/686-6867937_connect-four-png-transparent-png.png",
      serviceTitle: 'AI',
      sDetails:
        "I have created a Connect 4 AI, and have won the SMU 2022 AI competition with it. This AI uses the Minimax algorithm, and is built with Python. This AI is able to beat most human players, and was able to beat all other AI players in the SMU AI competition. I have made a website that allows you to play against this AI, although it is severely curbed in its ability to play, since on the deployment server, it is unable to run a great depth for the minimax algorithm.",
      link: "http://ec2-18-208-183-26.compute-1.amazonaws.com:3000",
      button_name: "View The Demo",
    },
    
    // Don't really need this all to much right now
    // {
    //   id: 1,
    //   iconName: "https://www.w3schools.com/whatis/img_js.png",
    //   serviceTitle: "Web Design",
    //   sDetails:
    //     "I have created a website from scratch, which is fully backend integrated, called \"Ranchy\". This website allows ranchers to more easily manage their ranch, and allows for the creation of new ranchs. This website is built with React, and was hosted on AWS. This website is fully responsive, and allows for mobile viewing",
    //   link: "https://github.com/Gouldilocks/DB-GUI-S22",
    //   button_name: "View On Github",
    // },

    {
      id: 2,
      iconName: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/machineLearning3.png",
      serviceTitle: "Machine Learning",
      sDetails:
        "I have created a project called piFace, which is a Raspberry Pi based project that allows for the creation of a face recognition and emotion detection system. This project is built with Python, and uses the OpenCV library, along with the dlib library. It uses a model that is trained on a large dataset of faces which were pre-sorted, and uses that while detecting faces from your webcam.",
      link: "https://github.com/Gouldilocks/piFace",
      button_name: "View On Github",
    },

    {
      id: 3,
      iconName: "https://media.istockphoto.com/vectors/orange-automatic-vending-machine-isolated-vector-illustration-vector-id836212440?k=20&m=836212440&s=612x612&w=0&h=MIAlYYISjL0TWAPyAgvVDU1jK9MRzceqPEDe913sKmU=",
      serviceTitle: "Hardware",
      sDetails:
        "I created a Vending machine for one of my TA positions, which is an Arduino/Raspberry pi project. It uses Pandas dataframes and google's API for editing a google sheets page for use as a database. This vending machine was used for proper student material distribution, and was made using Google Sheets in order for other non-Computer savy TA's to manage it effectively.",
      link: "https://github.com/Gouldilocks/Vmachine",
      button_name: "View On Github",
    },

    {
      id: 4, // id is used for the key in the map function
      iconName: "https://upload.wikimedia.org/wikipedia/commons/0/07/Reddit_icon.svg",
      serviceTitle: 'Personal Fun',
      sDetails:
        "I have created an automated bot that pulls data from the Reddit API, and using FFMPEG, it creates a video of the top posts of the day from the subreddit r/AskReddit. This bot is built with Python, and is able to run every day. It has a secondary function that allows it to automatically upload those videos onto tiktok, and it is able to do this without the TikTok API, but with the desktop application.",
      link: "https://github.com/Gouldilocks/Reddit_Bot",
      button_name: "View on Github",
    },
  ],
  contact: [
    {
      id: "1",
      title: "Contact Info",
      menuItems: [
        {
          id: 2,
          icon: "icon_phone",
          text: "Phone: 469-471-1845",
        },
        {
          id: 3,
          icon: "icon_mail",
          text: "Email: cagould@smu.edu",
        },
      ],
    },
  ],
  devloperBanner: [
    {
      id: 1,
      subtile: "Front-End Developer",
      title: "Talk is cheap. \n Show me the code",
      discription:
        "I design and code beautifully simple things,\n and I love what I do.",
    },
  ],
  devAbout: [
    {
      id: 1,
      smalltitle: "Introduce",
      aHead: "Passion \n Heart & Soul",
      aHeadTwo: "Every great design begin with an even better story",
      adiscription:
        "Since beginning my journey as a freelancer designer nearly 4 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use, I am quietly confident, naturally curious.",
    },
  ],
  aboutSkill: [
    {
      id: 1,
      workName: "Design",
      text: "Create digital products with unique idea",
      complateProject: "20 Projects",
      icon: "icon-tools",
    },
    {
      id: 2,
      workName: "front-End",
      text: "My coding structure is clean and smooth",
      complateProject: "165 Projects",
      icon: "icon-genius",
    },
    {
      id: 3,
      workName: "SEO",
      text: "Boost your business with SEO optimize.",
      complateProject: "5 Projects",
      icon: "icon-linegraph",
    },
  ],
  awards: [
    {
      id: 1,
      image: "icon.jpeg",
      ctile: "Site of the year 2020",
      date: "April 2020",
      description: "For most favorited design voted by NY City Style customers",
      url: "http://www.pinterest.com",
      linktext: "view More",
    },
    {
      id: 2,
      image: "icon.jpeg",
      ctile: "Theme of the day 2021",
      date: "March 2021",
      description: "For most favorited design voted by NY City Style customers",
      url: "http://www.pinterest.com",
      linktext: "view More",
    },
    {
      id: 3,
      image: "icon.jpeg",
      ctile: "Best design awwards",
      date: "March 2021",
      description: "For most favorited design voted by NY City Style customers",
      url: "http://www.pinterest.com",
      linktext: "view More",
    },
  ],
  contacttitle: "Contact Form",
};

export default jhonData;
