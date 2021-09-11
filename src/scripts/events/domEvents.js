import filterLanguage from '../components/filterLanguage';
import addVocabForm from '../components/forms/addVocabForm';
import { showVocab } from '../components/vocab';
import {
  createVocab,
  deleteVocab,
  getSingleVocab,
  getVocab,
  updateVocab
} from '../helpers/data/vocabData';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, id] = e.target.id.split('--');

        deleteVocab(id).then(showVocab);
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A VOCAB CARD
    if (e.target.id.includes('add-entry-btn')) {
      addVocabForm();
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A VOCAB CARD
    if (e.target.id.includes('submit-vocab')) {
      e.preventDefault();
      const vocabObject = {
        name: document.querySelector('#name').value,
        language: document.querySelector('#language').value,
        description: document.querySelector('#description').value,
        favorite: document.querySelector('#favorite').checked,
        timeSubmitted: new Date()
      };

      createVocab(vocabObject).then((vocabArray) => showVocab(vocabArray));
    }

    // CLICK EVENT FOR LAUNCHING FORM FOR UPDATING A VOCAB CARD
    if (e.target.id.includes('edit-vocab-btn')) {
      const [, id] = e.target.id.split('--');

      getSingleVocab(id).then((vocabObj) => addVocabForm(vocabObj));
    }

    // CLICK EVENT FOR SUBMITTING VOCAB CARD UPDATES
    if (e.target.id.includes('update-vocab')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const vocabObj = {
        name: document.querySelector('#name').value,
        language: document.querySelector('#language').value,
        description: document.querySelector('#description').value,
        favorite: document.querySelector('#favorite').checked,
        timeSubmitted: new Date(),
        firebaseKey
      };
      updateVocab(vocabObj).then(showVocab);
    }

    // CLICK EVENTS FOR FILTER BUTTONS
    if (e.target.id.includes('Javascript')) {
      e.preventDefault();
      getVocab().then((vocabArray) => {
        const jsVocabCards = filterLanguage(vocabArray, e.target.id);
        showVocab(jsVocabCards);
      });
    }

    if (e.target.id.includes('HTML')) {
      e.preventDefault();
      getVocab().then((vocabArray) => {
        const htmlVocabCards = filterLanguage(vocabArray, e.target.id);
        showVocab(htmlVocabCards);
      });
    }

    if (e.target.id.includes('CSS')) {
      e.preventDefault();
      getVocab().then((vocabArray) => {
        const cssVocabCards = filterLanguage(vocabArray, e.target.id);
        showVocab(cssVocabCards);
      });
    }
  });
};

export default domEvents;
