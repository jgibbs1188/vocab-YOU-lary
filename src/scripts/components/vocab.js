import clearDom from '../helpers/data/clearDom';

const showVocab = (array) => {
  clearDom();

  array.forEach((item) => {
    document.querySelector('#store').innerHTML += `
      <div class="card">
          <div class="card-body" style="height: 180px;">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text bold">${item.language}</p>
            <p class="card-text bold">${item.description}</p>
              <hr>
            <i class="fas fa-edit btn btn-info" id="edit-vocab-btn--${item.firebaseKey}"></i>
            <i class="btn btn-danger fas fa-trash-alt" id="delete-vocab--${item.firebaseKey}"></i>
          </div>
      </div>
  `;
  });
};

const noVocabCards = () => {
  document.querySelector('#store').innerHTML = '<h1>No Vocab Cards</h1>';
};

export { showVocab, noVocabCards };
