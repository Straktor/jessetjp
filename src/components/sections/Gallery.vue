<template>
    <section id="gallery" class="section gallery">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center heading">
                    <span>Nos souvenirs</span>
                    <h2>Des moments immortalisés</h2>
                    <p>
                        Depuis les dernières années, nous avons immortalisé
                        notre histoire à travers l'objectif. Nous y ajouterons
                        des images après cette belle journée que nous
                        partagerons avec vous.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="button-group filters-button-group">
                        <button class="button is-checked" data-filter="*">
                            Tout
                        </button>
                        <button class="button" data-filter=".moments">
                            Nous
                        </button>
                        <button class="button" data-filter=".friends">
                            Famille
                        </button>
                        <button class="button" data-filter=".banguet">
                            Fiancailles
                        </button>
                        <button class="button" data-filter=".family">
                            Mariage
                        </button>
                    </div>
                    <div class="grid grid--margin">
                        <div class="grid-sizer"></div>

                        <div
                            v-for="(p, i) in photos"
                            :key="i"
                            class="grid-item grid-item--width"
                            :class="p.tags.join(' ')"
                        >
                            <a
                                :href="`/img/gallery/${p.path}`"
                                data-lightbox="roadtrip"
                            >
                                <img
                                    :src="`/img/gallery/${p.path}`"
                                    alt="gallery"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.row -->
        </div>
    </section>
</template>

<script lang="ts" setup>
const photos = [
    { path: 'nous13.jpg', tags: ['moments'] },
    { path: 'famille1.jpg', tags: ['friends'] },
    { path: 'famille2.jpg', tags: ['friends'] },
    { path: 'famille3.jpg', tags: ['friends'] },
    { path: 'famille4.jpg', tags: ['friends'] },
    { path: 'famille5.jpeg', tags: ['friends'] },
    { path: 'famille6.jpg', tags: ['friends'] },
    { path: 'famille7.jpg', tags: ['friends'] },
    { path: 'famille8.jpg', tags: ['friends'] },
    { path: 'famille9.jpg', tags: ['friends'] },
    { path: 'famille10.jpg', tags: ['friends'] },
    { path: 'fiancaille1.jpg', tags: ['banguet'] },
    { path: 'fiancaille3(55).jpeg', tags: ['banguet'] },
    { path: 'fiancaille4.jpeg', tags: ['banguet'] },
    { path: 'fiancaille5.jpeg', tags: ['banguet'] },
    { path: 'fiancaille6(14).jpeg', tags: ['banguet'] },
    { path: 'fiancaille7(19).jpeg', tags: ['banguet'] },
    { path: 'fiancaille8(23).jpeg', tags: ['banguet'] },
    { path: 'fiancaille9(30).jpeg', tags: ['banguet'] },
    { path: 'fiancaille10(33).jpeg', tags: ['banguet'] },
    { path: 'fiancaille11(39).jpeg', tags: ['banguet'] },
    { path: 'fiancaille12(43).jpeg', tags: ['banguet'] },
    { path: 'fiancaille13(25).jpeg', tags: ['banguet'] },
    { path: 'fiancaille14(24).jpeg', tags: ['banguet'] },
    { path: 'fiancaille15(34).jpeg', tags: ['banguet'] },
    { path: 'fiancaille16(50).jpeg', tags: ['banguet'] },
    { path: 'fiancaille17(3).jpeg', tags: ['banguet'] },
    { path: 'fiancaille18(46).jpeg', tags: ['banguet'] },
    { path: 'fiancailles2.jpg', tags: ['banguet'] },
    { path: 'nous1.jpg', tags: ['moments'] },
    { path: 'nous2.jpg', tags: ['moments'] },
    { path: 'nous3.jpg', tags: ['moments'] },
    { path: 'nous4.jpg', tags: ['moments'] },
    { path: 'nous5.jpg', tags: ['moments'] },
    { path: 'nous6.jpg', tags: ['moments'] },
    { path: 'nous7.jpg', tags: ['moments'] },
    { path: 'nous8.jpg', tags: ['moments'] },
    { path: 'nous9.jpg', tags: ['moments'] },
    { path: 'nous10.jpg', tags: ['moments'] },
    { path: 'nous11.jpg', tags: ['moments'] },
    { path: 'nous12.jpg', tags: ['moments'] },
    { path: 'nous14.jpg', tags: ['moments'] },
    { path: 'nous15.jpg', tags: ['moments'] },
    { path: 'nous16.jpg', tags: ['moments'] },
    { path: 'nous17.jpg', tags: ['moments'] },
    { path: 'nous18.jpg', tags: ['moments'] },
]
</script>
