import signOut from '../helpers/auth/signOut';
import { showVocab } from '../components/vocab';
import getVocab from '../helpers/data/vocabData';

const navigationEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL Cards
  document.querySelector('#all-books').addEventListener('click', () => {
    getVocab(uid).then(showVocab);
  });
};

export default navigationEvents;
