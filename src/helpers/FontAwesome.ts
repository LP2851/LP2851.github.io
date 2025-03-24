import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCog,
  faCogs,
  faExternalLink,
  faMessage,
  faSpinner,
  faThumbsUp,
  faUser,
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
  );
};
