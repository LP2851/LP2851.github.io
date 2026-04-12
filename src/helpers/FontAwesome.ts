import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCog,
  faCogs,
  faExternalLink,
  faMessage,
  faSpinner,
  faThumbsUp,
  faUser,
  faSun,
  faMoon,
  faChevronDown,
  faArrowRight,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

export const initFontAwesomeLibrary = () => {
  library.add(
    faUser,
    faCogs,
    faCog,
    faMessage,
    faExternalLink,
    faThumbsUp,
    faSpinner,
    faSun,
    faMoon,
    faChevronDown,
    faArrowRight,
    faCode,
  );
};
