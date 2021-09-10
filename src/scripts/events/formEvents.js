import { showVocab } from '../components/vocab';
import { createVocab } from '../helpers/data/vocabData';

const createVocabSubmitEvent = () => {
  const formData = {
    name: document.querySelector('#name').value,
    language: document.querySelector('#language').value,
    description: document.querySelector('#description').value,
  };
  createVocab(formData).then((allVocab) => showVocab(allVocab));
};

export default createVocabSubmitEvent;
