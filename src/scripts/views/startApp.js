import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navbar';
import { showVocab } from '../components/vocab';
import getVocab from '../helpers/data/vocabData';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
  getVocab().then((vocab) => showVocab(vocab));
};

export default startApp;
