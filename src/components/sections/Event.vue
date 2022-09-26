<template>
    <section id="events" class="events-accordion section">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center heading">
                    <span>Notre moment</span>
                    <h2>Détails de l'événement</h2>
                    <p>
                        L'un de nous deux est très zen avec le côté planification, l'autre a tendance à tout planifier et à vouloir confirmer le moindre détail! Nous vous laissons imaginer qui est
                        derrière cette section…
                    </p>
                    <p>Vous trouverez toutes les informations en lien avec l'événement à cet endroit. Nous vous recommandons de regarder chaque onglet, des informations importantes s'y trouvent.</p>
                    <p>Nous nous marions sur une île… en fait juste la cérémonie! D'ailleurs, n'oubliez pas de mettre votre chapelet sur la corde à linge pour que Dame Nature soit de notre côté!</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center heading">
                    <h2>Hôtel du Domaine</h2>
                    <p>
                        Il s'agit d'un complexe de villégiature situé sur les rives d'un lac à Thetford Mines. L'entièreté de notre mariage se passera à cet endroit, de la cérémonie à la réception, en
                        passant par le brunch le lendemain.
                    </p>
                    <p>Si vous souhaitez en profiter, l'hôtel propose de nombreuses activités : spa, piscine, plage, location d'embarcations nautiques ou de vélos, escalade, minigolf, etc.</p>
                    <p>En espérant que vous tomberez sous le charme de l'endroit comme nous le sommes.</p>

                    <div v-if="props.enableMaps">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2054.0142102571026!2d-71.27019084839324!3d46.09768289935509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb8310dec8cde01%3A0x367ee4019c8c4f5c!2sH%C3%B4tel%20du%20Domaine%20-%20Centre%20de%20vill%C3%A9giature%20et%20de%20congr%C3%A8s!5e1!3m2!1sfr!2sca!4v1660002128208!5m2!1sfr!2sca"
                            width="600"
                            height="450"
                            style="border: 0"
                            allowfullscreen
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <p>
                        <a href="https://hoteldudomaine.com">hoteldudomaine.com</a>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center heading">
                    <h3>Chambre et suite à l'hôtel - tarif préférentiel</h3>
                    <p>Il existe plusieurs options pour vous permettre de fêter pleinement sans reprendre la route ensuite.</p>
                    <p>
                        Nous avons un tarif préférentiel sur les chambres et suites de l'hôtel. Il vous suffit d'utiliser le code MJJ1908 avant le 19 juillet 2023. Il faut cependant faire la
                        réservation par téléphone. Vous pouvez la faire dès maintenant.
                    </p>
                    <p>
                        Chambre confort : 189,00 $ <br />
                        Suite junior : 209,00 $
                    </p>
                </div>
                <div class="col-md-12 text-center heading">
                    <h3>Chalet</h3>
                    <p>Le site offre également la location de chalet pour plusieurs personnes. Il faut cependant faire la réservation directement avec l'hôtel.</p>
                    <p>
                        <a href="https://hoteldudomaine.com/chalets/">hoteldudomaine.com/chalets</a>
                    </p>
                </div>
                <div class="col-md-12 text-center heading">
                    <h3>"Prêt-à-camper" et camping</h3>
                    <p>
                        Comme le site dispose d'un terrain de camping et de quelques “prêt-à-camper”, cette option vous est également offerte. Il faut cependant faire la réservation directement avec
                        eux.
                    </p>
                    <p>
                        <a href="https://www.boisedudomaine.com/ ">boisedudomaine.com</a>
                    </p>
                </div>
                <div class="col-md-12 text-center heading">
                    <h3>Autres hôtels de Thetford Mines</h3>
                    <p>Si jamais ces options ne vous conviennent pas, il y a de nombreux autres hébergements dans la ville de Thetford Mines. Google sera votre meilleur ami pour les trouver!</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="panel-group" id="accordion-img">
                        <div class="panel panel-default">
                            <div id="collapse10" class="panel-collapse collapse in">
                                <img src="/img/temp/arrivee-51.jpeg" alt="" />
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div id="collapse20" class="panel-collapse collapse">
                                <img src="/img/temp/ceremonie-48.jpeg" alt="" />
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div id="collapse30" class="panel-collapse collapse">
                                <img src="/img/temp/cocktail-29.jpeg" alt="" />
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div id="collapse40" class="panel-collapse collapse">
                                <img src="/img/temp/souper-66.jpeg" alt="" />
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div id="collapse50" class="panel-collapse collapse">
                                <img src="/img/temp/brunch-58.jpeg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <h3>19 août 2023, Hôtel du Domaine, Thetford Mines</h3>
                    <div class="panel-group" id="accordion">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse1"> 15h00: Arrivée </a>
                                </h4>
                            </div>
                            <div id="collapse1" class="panel-collapse collapse in">
                                <div class="panel-body">
                                    Vous pouvez arriver aussi tôt que vous le souhaitez, nous vous recommandons cependant d'arriver au plus tard vers 15h30 pour vous donner le temps de vous rendre
                                    confortablement sur l'île. Si vous souhaitez limiter votre temps de marche, nous vous conseillons de stationner la voiture près du pub Le Boisé, sinon le
                                    stationnement entre l'entrée de l'hôtel et le Centre des Congrès conviendra parfaitement.
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse2"> 16h00: Cérémonie</a>
                                </h4>
                            </div>
                            <div id="collapse2" class="panel-collapse collapse">
                                <div class="panel-body">
                                    La cérémonie aura lieu sur l'île au milieu du lac en arrière de l'hôtel. Il y a un pont pour se rendre à l'île. Pour accéder au pont, deux options s'offrent à vous.
                                    Option 1 Il y a un sentier qui longe le Centre des Congrès, à droite de celui-ci lorsque vous êtes en face. Il est cependant un peu plus escarpé. Option 2 Il faut
                                    se rendre au pub Le Boisé et prendre les escaliers derrière celui-ci qui mènent à la plage. Vous pourrez alors marcher sur la plage jusqu'au pont qui se trouve sur
                                    la gauche, vers l'hôtel. Il s'agira d'une cérémonie débranchée, donc vous serez invité à éteindre et à ranger vos appareils électroniques. De plus, ne choisissez
                                    pas un côté, mais une chaise et ne restez pas à l'arrière, nous ne voulons pas nous unir devant des chaises vides!
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse3"> 17h00: Cocktail</a>
                                </h4>
                            </div>
                            <div id="collapse3" class="panel-collapse collapse">
                                <div class="panel-body">
                                    Le cocktail sera servi à l'Hôtel du Domaine, dans le bar de la salle G. Yves Landry-BC ou encore sur la terrasse adjacente. Pour vous y rendre, vous devrez
                                    retourner sur la terre ferme. Nous vous recommandons d'entrer par le hall d'entrée de l'hôtel. Pour se rendre à la salle, il faut emprunter le corridor vers le
                                    Centre des Congrès, à droite entre les restaurants. Si vous décidez de longer le lac et d'entrer dans l'hôtel par la porte près de la piscine, il vous faudra
                                    tourner à gauche vers le hall d'entrée de l'hôtel et continuer tout droit vers le Centre des Congrès. * La terrasse est non-fumeur, donc il faudra sortir à
                                    l'extérieur du hall d'entrée de l'hôtel pour fumer ou vapoter.
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse4"> 18h00 : Souper</a>
                                </h4>
                            </div>
                            <div id="collapse4" class="panel-collapse collapse">
                                <div class="panel-body">
                                    Le souper sera servi dans la salle G. Yves Landry-BC. Le dessert sera servi après la coupe du gâteau. Vers minuit : Buffet de soirée Après avoir amplement dansé, un
                                    buffet de soirée sera servi dans la salle.
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse5"> 20 août 2023 : Brunch</a>
                                </h4>
                            </div>
                            <div id="collapse5" class="panel-collapse collapse">
                                <div class="panel-body">
                                    Nous vous invitons à bruncher avec nous le lendemain matin. Il s'agit de la seule contribution que nous vous demandons. Il sera possible de payer le brunch lorsque
                                    vous confirmerez votre présence parmi nous.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center heading">
                    <h2>Autres informations</h2>
                    <p>
                        Bien qu'il s'agisse d'un mariage sur une île, mesdames si vous avez envie de sortir vos robes longues, c'est l'occasion! Par contre, les talons aiguilles sont déconseillés
                        comme vous aurez à marcher sur le sable, dans l'herbe et à traverser un pont. Si vous souhaitez en porter, faites-le au cocktail ou au souper! Je vous partage également notre
                        palette de couleur pour le cortège.
                    </p>
                    <img src="/img/temp/couleur.png" />
                    <h2>Contact</h2>
                    <p>
                        Le jour de l'événement, la personne-ressource pour toutes vos questions, propositions, prises de parole, etc. sera notre coordonnatrice, Marie-Ève Quirion (514) 226-5984.
                        <br />
                        Entre-temps, vous pouvez nous écrire ici : jessjp1908@gmail.com Nous acceptons aussi les textos et les appels, reliés au mariage ou pas!
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
interface Props {
    enableMaps?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    enableMaps: true,
})
</script>
