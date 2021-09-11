// import createVocabSubmitEvent from '../../events/formEvents';
// import clearDom from '../../helpers/data/clearDom';
// import selectLanguage from './selectLanguage';

// const addVocabForm = (obj = {}) => {
//   clearDom();

//   document.querySelector('#form-container').innerHTML = `
//     <form id="submit-vocab-form" class="mb-4">
//       <div class="form-group">
//         <label for="name">Name</label>
//         <input type="text" class="form-control" id="name" aria-describedby="vocabName" placeholder="Enter Card Name" value="${obj.title || ''}" required>
//       </div>
//       <div class="form-group">
//         <label for="description">Description</label>
//         <textarea class="form-control" placeholder="Card Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
//       </div
//       <div class="form-group" id="select-language">
//       </div
//       <div class="form-check">
//         <input type="checkbox" class="form-check-input" id="favorite" ${obj.favorite ? 'checked' : ''}" >
//         <label class="form-check-label" for="favorite">Favorite?</label>
//       </div>
//       <div>
//         <button type="submit"
//             id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="btn btn-primary">Submit Entry</button>
//       </div>
//     </form>`;

//   selectLanguage(`${obj.language_id || ''}`);

//   document.querySelector('#submit-vocab-form').addEventListener('submit', createVocabSubmitEvent);
// };

// export default addVocabForm;

import createVocabSubmitEvent from '../../events/formEvents';
import clearDom from '../../helpers/data/clearDom';

const addVocabForm = (obj = {}) => {
  clearDom();

  document.querySelector('#form-container').innerHTML = `
    <form id="submit-vocab-form" class="mb-4">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" aria-describedby="vocabName" placeholder="Enter Card Name" value="${obj.name || ''}" required>
      </div>
      <div class="form-group">
        <label for="language">Select a Language</label>
        <select name="language" class="form-control" id="language" value="${obj.language || ''}" required>
          <option value="Javascript">Javascript</option>        
          <option value="CSS">CSS</option>
          <option value="HTML">HTML</option>
          </select>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Card Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="favorite" ${obj.favorite && 'checked'}" >
        <label class="form-check-label" for="favorite">Favorite?</label>
      </div>
      <div class="form-submit">
        <button type="submit"
            id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="btn btn-primary">Submit Entry</button>
      </div>
    </form>`;

  document.querySelector('#submit-vocab-form').addEventListener('submit', createVocabSubmitEvent);
};

export default addVocabForm;
