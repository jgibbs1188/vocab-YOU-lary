const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4">
          <a class="navbar-brand title" href="#">Vocab-YOU-lary</a>
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
              <li class="nav-item">
                <a href="#" class="pull-left navbar-brand navbar-logo">LOGO HERE<img src=""></a> 
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#" id="create-entry">
                  Create New Entry <span class="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <div id="logout-button"></div>
          </div>
        </nav>
      `;
};

export default navBar;
