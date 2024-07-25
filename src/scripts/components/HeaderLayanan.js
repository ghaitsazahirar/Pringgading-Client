class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">
        <img src="assets/img/pringgading-logo.png" alt="Bootstrap">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="profile.html">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="program.html">Program</a>
          </li>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="kegiatan.html">Kegiatan</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="login.html">Layanan</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
          <div class="hero">
            <img src="assets/img/header2.png" alt="Hero Image">
        </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const dropdownItems = document.querySelectorAll('.dropdown');

    dropdownItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            const dropdownContent = this.querySelector('.dropdown-content');
            if (dropdownContent) {
                dropdownContent.style.display = 'block';
            }
        });

        item.addEventListener('mouseout', function() {
            const dropdownContent = this.querySelector('.dropdown-content');
            if (dropdownContent) {
                dropdownContent.style.display = 'none';
            }
        });
    });
});



customElements.define('custom-header', Header);
