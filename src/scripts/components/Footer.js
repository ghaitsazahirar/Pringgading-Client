class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="text-white pt-20 pb-19">
                <div class="container text-center text-md-left">
                    <hr class="mb-4">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-7 col-lg-8">
                                <p>Follow
                                    <a href="#" style="text-decoration: none;">
                                        <strong class="text-warning"> US! </strong>
                                    </a>
                                </p> 
                            </div>
                            <div class="col-md-5 col-ld-4 text-center">
                                <ul class="list-unstyled list-inline">
                                    <li class="list-inline-item">
                                        <a href="https://www.youtube.com/@DMM_IMMFTI23" target="_blank" class="btn-floating btn-sm text-white" style="font-size: 20px;"><i class="fab fa-youtube"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="https://facebook.com" target="_blank" class="btn-floating btn-sm text-white" style="font-size: 20px;"><i class="fab fa-facebook"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="https://www.instagram.com/dmm_immfti23/" target="_blank" class="btn-floating btn-sm text-white" style="font-size: 20px;"><i class="fab fa-instagram"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="mailto:your.email@example.com" target="_blank" class="btn-floating btn-sm text-white" style="font-size: 20px;"><i class="fas fa-envelope"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}
customElements.define('custom-footer', Footer);
