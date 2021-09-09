const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
              <li>
                <h2 class="navbar-brand brand-name fa-pull-left">
                  <a><img class="navbar-image fa-image" src="https://png.pngitem.com/pimgs/s/8-85755_happy-face-meme-png-awesome-face-no-background.png">Vocab-YOU-lary</a>
                </h2>
              </li>
              <li class="nav-item active">
                <a class="nav-link nav-create-entry" href="#" id="create-entry">
                  Create New Entry <span class="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <div id="logout-button" class="navbar-right"></div>
          </div>
        </nav>
      `;
};

export default navBar;
