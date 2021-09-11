import clearDom from '../helpers/data/clearDom';

const showVocab = (array) => {
  clearDom();

  document.querySelector('#add-button').innerHTML += '<button class="btn btn-success btn-lg mb-4" id="add-entry-btn">Create An Entry</button> <div class="filter-button-label">Filter</div> <div></div>';
  document.querySelector('#add-button').innerHTML += '<button class="btn btn-group btn-sm btn-outline-dark mb-4" id="Javascript">Javascript</button>';
  document.querySelector('#add-button').innerHTML += '<button class="btn btn-group btn-sm btn-outline-dark mb-4" id="CSS">CSS</button>';
  document.querySelector('#add-button').innerHTML += '<button class="btn btn-group btn-sm btn-outline-dark mb-4" id="HTML">HTML</button>';
  document.querySelector('#add-button').innerHTML += '<button class="btn btn-group btn-sm btn-outline-dark mb-4" id="old">Oldest</button>';
  document.querySelector('#add-button').innerHTML += '<button class="btn btn-group btn-sm btn-outline-dark mb-4" id="new">Newest</button>';
  document.querySelector('#add-button').innerHTML += '<button class="btn btn-group btn-sm btn-outline-dark mb-4" id="alphabetical">Alphabetical</button>';

  array.forEach((item) => {
    document.querySelector('#store').innerHTML += `
      <div class="card">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text bold">${item.language}</p>
            <p class="card-text bold">${item.description}</p>
              <hr>
            <i class="fas fa-edit btn btn-info" id="edit-vocab-btn--${item.firebaseKey}"> Update</i>
            <i class="btn btn-danger fas fa-trash-alt" id="delete-vocab--${item.firebaseKey}"> Delete</i>
          </div>
      </div>
  `;
  });
};

const noVocabCards = () => {
  document.querySelector('#store').innerHTML = '<h1>No Vocab Cards</h1>';
};

export { showVocab, noVocabCards };
