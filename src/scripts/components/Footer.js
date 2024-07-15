class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="text-white pt-20 pb-19 ">
                <div class=" text-center text-md-left">
                    <div class="row text-center text-md-left">
                        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Tentang Website</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi accusamus quae vitae possimus expedita laboriosam hic ex at ratione consectetur odio amet exercitationem mollitia, neque nihil cum cupiditate, sit ipsam!</p>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-2">
                            <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Kegiatan</h5>
                            <p>
                                <a href="#" class="text-white" style="text-decoration: none;">Kegiatan harian</a>
                            </p>
                            <p>
                                <a href="#" class="text-white" style="text-decoration: none;">Kegiatan mingguan</a>
                            </p>
                            <p>
                                <a href="#" class="text-white" style="text-decoration: none;">Kegiatan bulanan</a>
                            </p>
                        </div>

                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Program</h5>
                            <p>
                                <a href="#" class="text-white" style="text-decoration: none;">Pengolahan Sampah</a>
                            </p>
                            <p>
                                <a href="#" class="text-white" style="text-decoration: none;">Integrated Farming</a>
                            </p>
                        </div>
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
                            <p>
                                <i class="fas fa-home mr-3"></i> Guwosari, Bantul
                            </p>
                            <p>
                                <i class="fas fa-envelope mr-3"></i> email@gmail
                            </p>
                            <p>
                                <i class="fas fa-phone mr-3"></i> +62 
                            </p>
                        </div>
                    </div>
                    <hr class="mb-4">

              
                    <div class="row justify-content-center">
                        <div class="col-md-7 col-lg-8">
                            <p>Sosial
                                <a href="#" style="text-decoration: none;">
                                    <strong class="text-warning"> Media </strong>
                                </a>
                            </p> 
                        </div>

                  
                        <div class="row justify-content-center">
                            <div class="col-md-5 col-ld-4 text-center">
                                <ul class="list-unstyled list-inline">
                                    <li class="list-inline-item">
                                        <a href="#" class="btn-floating btn-sm text-white" style="font-size: 20px;"><i class="fab fa-youtube"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#" class="btn-floating btn-sm text-white" style="font-size: 20px;"><i class="fab fa-facebook"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#" class="btn-floating btn-sm text-white" style="font-size: 20px;"><i class="fab fa-instagram"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#" class="btn-floating btn-sm text-white" style="font-size: 20px;"><i class="fas fa-envelope"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
             </footer>
        `;
    }
}
customElements.define('custom-footer', Footer);
