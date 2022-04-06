const initialState = {
  menuCollapse: true,
  page: "HOME",
};

const linkGithub = "https://github.com/tiagodev96";
const linkInstagram = "https://instagram.com";
const linkWhatsapp = "https://wa.me/5571993553196";
const linkLinkedin = "https://www.linkedin.com/in/tiagocb96/";
const myCurrentPhone = "5571993553196";

const projects = {
  guessTheWord: {
    name: "Guess The Word",
    url: "https://guesstheword-dusky.vercel.app/",
  },
  metodoHayat: {
    name: "Método Hayat",
    url: "https://metodohayat.com/",
  },
  classicCalculator: {
    name: "Classic Calculator",
    url: "https://calculator-react-project.vercel.app/",
  },
  memoryGame: {
    name: "Classic Memory Game",
    url: "https://memory-game-project.vercel.app/",
  },
};

function cardReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "REDIRECT":
      switch (payload) {
        case "GITHUB":
          window.open(linkGithub, "_blank");
          return state;
        case "INSTAGRAM":
          window.open(linkInstagram, "_blank");
          return state;
        case "WHATSAPP":
          window.open(linkWhatsapp, "_blank");
          return state;
        case "LINKEDIN":
          window.open(linkLinkedin, "_blank");
          return state;
        default:
          return state;
      }
    case "HOME":
      return { ...state, menuCollapse: true, page: "HOME" };
    case "PORTFOLIO":
      return { ...state, menuCollapse: true, page: "PORTFOLIO" };
    case "CONTACT":
      return { ...state, menuCollapse: true, page: "CONTACT" };
    case "HANDLE_MENU":
      return {
        ...state,
        menuCollapse: !state.menuCollapse,
      };
    case "REDIRECT_PROJECT":
      let clickedProject;
      Object.entries(projects).forEach(([key, value]) => {
        if (key === payload) clickedProject = value;
      });
      window.open(clickedProject.url, "_blank");
      return { ...state };
    case "SEND_MESSAGE":
      let name = payload.name;
      let message = payload.message;
      let fullMessage = `Hello, my name is ${name}. ${message}`;
      let threatedMessage = encodeURIComponent(fullMessage);
      let template = `https://api.whatsapp.com/send?phone=${myCurrentPhone}&text=${threatedMessage}`;
      window.open(template, "_blank");
      return { ...state };
    default:
      return state;
  }
}

export default cardReducer;
