import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCog,
  faCogs,
  faExternalLink,
  faMessage,
  faUser,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';



export const initFontAwesomeLibrary = () => {
  library.add(faUser, faCogs, faCog, faMessage, faExternalLink, faThumbsUp, );
}
