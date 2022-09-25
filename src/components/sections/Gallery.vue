<template>
    <section id="gallery" class="section gallery">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center heading">
                    <span>Nos souvenirs</span>
                    <h2>Des moments immortalisés</h2>
                    <p>
                        Depuis les dernières années, nous avons immortalisé notre histoire à travers l'objectif. Nous y ajouterons des images après cette belle journée que nous partagerons avec vous.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="button-group filters-button-group">
                        <button class="button is-checked" data-filter="*">Tout</button>
                        <button class="button" data-filter=".moments">Nous</button>
                        <button class="button" data-filter=".friends">Famille</button>
                        <button class="button" data-filter=".banguet">Fiancailles</button>
                        <button class="button" data-filter=".family">Mariage</button>
                    </div>
                    <div class="grid grid--margin">
                        <div class="grid-sizer"></div>
                        <div class="grid-item grid-item--width moments friends">
                            <a href="img/gallery-1.jpg" data-lightbox="roadtrip">
                                <img src="/img/gallery-1.jpg" alt="gallery" />
                            </a>
                        </div>
                        <div class="grid-item moments banguet party">
                            <a href="img/gallery-2.jpg" data-lightbox="roadtrip">
                                <img src="/img/gallery-2.jpg" alt="gallery" />
                            </a>
                        </div>
                        <div class="grid-item friends moments party">
                            <a href="img/gallery-3.jpg" data-lightbox="roadtrip">
                                <img src="/img/gallery-3.jpg" alt="gallery" />
                            </a>
                        </div>
                        <div class="grid-item banguet family">
                            <a href="img/gallery-4.jpg" data-lightbox="roadtrip">
                                <img src="/img/gallery-4.jpg" alt="gallery" />
                            </a>
                        </div>
                        <div class="grid-item friends family">
                            <a href="img/gallery-5.jpg" data-lightbox="roadtrip">
                                <img src="/img/gallery-5.jpg" alt="gallery" />
                            </a>
                        </div>
                        <div class="grid-item family party">
                            <a href="img/gallery-10.jpg" data-lightbox="roadtrip">
                                <img src="/img/gallery-10.jpg" alt="gallery" />
                            </a>
                        </div>
                        <div class="grid-item moments family">
                            <a href="img/gallery-7.jpg" data-lightbox="roadtrip">
                                <img src="/img/gallery-7.jpg" alt="gallery" />
                            </a>
                        </div>
                        <div class="grid-item banguet family">
                            <a href="img/gallery-8.jpg" data-lightbox="roadtrip">
                                <img src="/img/gallery-8.jpg" alt="gallery" />
                            </a>
                        </div>
                        <div class="grid-item friends party">
                            <a href="img/gallery-9.jpg" data-lightbox="roadtrip">
                                <img src="/img/gallery-9.jpg" alt="gallery" />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <a href="gallery-single.html" class="btn btn-outline btn-lg">Tout voir</a>
                </div>
            </div>
            <!-- /.row -->
        </div>
    </section>
</template>
