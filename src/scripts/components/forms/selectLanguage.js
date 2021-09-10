import { getVocab } from '../../helpers/data/vocabData';

const selectLanguage = (vocabId) => {
  let domString = `<label for="language">Select a Language</label>
    <select class="form-control" id="language" required>
    <option value="${vocabId}">Select a Language</option>`;

  getVocab().then((vocabArray) => {
    vocabArray.forEach((vocab) => {
      domString += `
        <option
          value="${vocab.firebaseKey}"
           ${vocabId === vocab.firebaseKey ? 'checked' : ''}>
            ${vocab.language}
        </option>`;
    });

    domString += '</select>';

    document.querySelector('#select-language').innerHTML = domString;
  });
};

export default selectLanguage;
