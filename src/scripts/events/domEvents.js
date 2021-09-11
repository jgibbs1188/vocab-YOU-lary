import addVocabForm from '../components/forms/addVocabForm';
import { showVocab } from '../components/vocab';
import { createVocab, deleteVocab } from '../helpers/data/vocabData';

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

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
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
      };

      createVocab(vocabObject).then((vocabArray) => showVocab(vocabArray));
    }
  });
};

export default domEvents;
