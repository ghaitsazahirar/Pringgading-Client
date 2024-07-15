class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-lg fixed-top">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <img src="assets/img/pringgading-logo.png" alt="Bootstrap">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse text-right" id="navbarScroll">
            <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px; font-size: 20px;">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="profile.html">Profile</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link " href="kegiatan.html" role="button"  aria-expanded="false">
                  Kegiatan
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link " href="program.html" role="button"  aria-expanded="false">
                  Program
                </a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
          <div class="hero">
            <img src="assets/img/Home2.jpeg" alt="Hero Image">
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
