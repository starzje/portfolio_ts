const isMobile = window.innerWidth < 768;

let mainSectionAnimation = {};
let headerAnimation = {};
let titleAnimation = {};
let subTitleAnimation = {};
let paragraphAnimation = {};
let buttonAnimation = {};
let aboutMeParagraph = {};
let aboutMeImage = {};
let projectTitle = {};
let projectDescription = {};
let contactTitle = {};
let formAnimation = {};

if (!isMobile) {
  formAnimation = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.2,
        type: "spring",
        stiffness: 70,
      },
    },
  };
}

if (!isMobile) {
  contactTitle = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.5,
        type: "spring",
        stiffness: 70,
      },
    },
  };
}

if (!isMobile) {
  projectDescription = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 100,
      x: 0,

      transition: {
        duration: 2,
        type: "spring",
        stiffness: 70,
      },
    },
  };
}

if (!isMobile) {
  projectTitle = {
    hidden: {
      x: -200,
    },
    visible: {
      x: 0,

      transition: {
        duration: 2,
        type: "spring",
        stiffness: 70,
      },
    },
  };
}

if (!isMobile) {
  aboutMeImage = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        duration: 1,
        delay: 0.2,
      },
    },
  };
}

if (!isMobile) {
  aboutMeParagraph = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.2,
      },
    },
  };
}

if (!isMobile) {
  buttonAnimation = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.8,
        delay: 1,
        type: "spring",
        stiffness: 30,
      },
    },
  };
}

if (!isMobile) {
  paragraphAnimation = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };
}

if (!isMobile) {
  mainSectionAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
}

if (!isMobile) {
  headerAnimation = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.3,
      },
    },
  };
}

if (!isMobile) {
  titleAnimation = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };
}

if (!isMobile) {
  subTitleAnimation = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 1,
        type: "spring",
      },
    },
  };
}

const mobileNavSlider = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: "100vw",
    transition: {
      duration: 0.5,
    },
  },
};

const mobileListItem = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      type: "spring",
    },
  },
};

const mobileButtonItem = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
      type: "spring",
    },
  },
};

const githubIconAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.3,
    },
  },
};

const aboutMeAnimation = {
  hidden: {
    y: 100,
  },
  visible: {
    y: 0,
    transition: {
      duration: 1,
      delay: 0.3,
    },
  },
};

const githubCTA = {
  hidden: {
    x: 500,
  },
  visible: {
    x: 140,
    backgroundColor: "rgba(1,87,218,0.35)",

    transition: {
      duration: 2,
      type: "spring",
      stiffness: 70,
    },
  },
};

export {
  mainSectionAnimation,
  mobileNavSlider,
  mobileListItem,
  mobileButtonItem,
  githubIconAnimation,
  headerAnimation,
  titleAnimation,
  subTitleAnimation,
  paragraphAnimation,
  buttonAnimation,
  aboutMeAnimation,
  aboutMeParagraph,
  aboutMeImage,
  githubCTA,
  projectTitle,
  projectDescription,
  contactTitle,
  formAnimation,
};
