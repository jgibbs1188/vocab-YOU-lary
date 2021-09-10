import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navbar';
import { showVocab } from '../components/vocab';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import { getVocab } from '../helpers/data/vocabData';

const startApp = () => {
  domBuilder();
  domEvents();
  navBar();
  logoutButton();
  navigationEvents();
  getVocab().then((vocab) => showVocab(vocab));
};

export default startApp;
