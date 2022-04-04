const initialState = {
  menuCollapse: true,
  page: "HOME",
};

const linkGithub = "https://github.com/tiagodev96";
const linkInstagram = "https://instagram.com";
const linkWhatsapp = "https://wa.me/5571993553196";
const linkLinkedin = "https://www.linkedin.com/in/tiagocb96/";

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
    default:
      return state;
  }
}

export default cardReducer;
