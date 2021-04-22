function sidebar() {
 $("body").prepend("<nav class='sidebar'>");
 $(".sidebar").append("<div class='sidebar-brand'>").append("<div class='sidebar-nav mt2'>");
 $(".sidebar-brand").append("<img src='assets/img/profile.jpg' alt='Benjamin Busselet' title='photo'>");
 $(".sidebar-nav").append("<div class='nav-link' data-value='presentation'>Présentation</div>").append("<div class='nav-link' data-value='competences'>Compétences</div>").append("<div class='nav-link' data-value='experiences'>Expériences</div>").append("<div class='nav-link' data-value='formations'>Formations</div>").append("<div class='nav-link' data-value='projets'>Projets</div>").append("<div class='nav-link' data-value='hobbys'>Hobbys</div>");
}

function presentation() {
 $("main").empty();
 $("main").append("<section class='presentation'>");
 $(".presentation").append("<div class='title'>").append("<article>");
 $(".title").append("<h1 class='title_item name'>BENJAMIN BUSSELET</h1>").append("<h2 class='title_item mb5'>Développeur Web</h2>").append("<h3 class='mb5'>Après 10 ans dans la maintenance informatique, je me suis reconvertis dans le développement web afin de mettre en pratique ma créativité.</h3>");
 $("article").append("<h2 class='subtitle'>Contacts</h2>");
 $("article").append("<div class='row'><i class='fas fa-phone-square-alt'></i><span> 06 22 15 43 99</span></div>").append("<div class='row'><i class='fas fa-envelope'></i><a href='mailto:name@email.com'> benjamin.busselet@icloud.com</a></div>").append("<div class='row'><i class='fab fa-linkedin'></i><a href='http://linkedin.com/in/benjamin-busselet'> Profil Linkedin</a></div>").append("<div class='row'><i class='fas fa-file-download'></i><a href='assets/files/cv.pdf'> Téléchargez mon CV au format PDF</a></div>");
}

function competences() {
 $("main").empty();
 $("main").append("<section class='competences'>");
 $(".competences").append("<div class='title'>").append("<article>");
 $(".title").append("<h2 class='mb5'>COMPÉTENCES</h2>");
 $("article").append("<div class='item1'>").append("<div class='item2'>").append("<div class='item3'>");
 $(".item1").append("<h3 class='subtitle'>Développement Informatique</h3>").append("<div class='languages_grid'>");
 $(".languages_grid").append("<i class='fab fa-html5' title='HTML'></i>").append("<i class='fab fa-php' title='PHP'></i>").append("<i class='fab fa-css3-alt' title='CSS'></i>").append("<i class='fab fa-bootstrap' title='Bootstrap'></i>").append("<i class='fab fa-js-square' title='Javascript'></i>");
 $(".item1").append("<p class='ml3'>et bien d'autres en cours d'apprentissage</p>");
 $(".item2").append("<h3 class='subtitle'>Gestion De Parc Informatique</h3>").append("<ul>");
 $(".item2 ul").append("<li>diagnostiquer une panne</li>").append("<li>remplacer un matériel défectueux</li>").append("<li>tester les équipements</li>").append("<li>effectuer l’entretien des matériels</li>").append("<li>conseiller la clientèle</li>");
 $(".item3").append("<h3 class='subtitle'>Cours et Support Informatique</h3>").append("<ul>");
 $(".item3 ul").append("<li>Animation de cours</li>").append("<li>Aide à l'utilisation des équipements informatiques</li>").append("<li>Soutien dans la pratique des systèmes et logiciels</li>");
}

function experiences() {
 $("main").empty();
 $("main").append("<section class='experiences'>");
 $(".experiences").append("<div class='title'>").append("<article>");
 $(".title").append("<h1 class='mb5'>EXPÉRIENCES PROFESSIONNELLES</h1>");
 $("article").append("<div class='item1'>").append("<div class='item2'>").append("<div class='item3'>").append("<div class='item4'>").append("<div class='item5'>");
 $(".item1").append("<small>Depuis 2020</small>").append("<h4 class='subtitle'>Auto-Entrepreneur</h4>").append("<p>Créateur de site Web</p>");
 $(".item2").append("<small>2015-2017</small>").append("<h4 class='subtitle'>Teledom Sécurité</h4>").append("<p>Technicien Support Informatique</p>");
 $(".item3").append("<small>2007-2013</small>").append("<h4 class='subtitle'>Education Nationale (Collèges)</h4>").append("<p>Gestion Du Parc Informatique</p>");
 $(".item4").append("<small>2004-2007</small>").append("<h4 class='subtitle'>Auto-Entrepreneur</h4>").append("<p>Formation et Maintenance</p>");
 $(".item5").append("<small>2001-2003</small>").append("<h4 class='subtitle'>Extreme Agency</h4>").append("<p>Gestion Du Parc Informatique</p>");
}

function formations() {
 $("main").empty();
 $("main").append("<section class='formations'>");
 $(".formations").append("<div class='title'>").append("<article>");
 $(".title").append("<h1 class='mb10'>FORMATIONS</h1>");
 $("article").append("<div class='item1'>").append("<div class='item2'>").append("<div class='item3'>");
 $(".item1").append("<small>2019</small>").append("<h4 class='subtitle'>OpenClassrooms - Bac+3</h4>").append("<p>Développeur d'Application - Frontend</p>");
 $(".item2").append("<small>2014</small>").append("<h4 class='subtitle'>Validation Des Acquis - Bac+2</h4>").append("<p>Services Informatique Aux Organisations</p>");
 $(".item3").append("<small>2002</small>").append("<h4 class='subtitle'>CFA en Alternance - Bac</h4>").append("<p>Technicien de Maintenance Informatique</p>");
}

function projets() {
 $("main").empty();
 $("main").append("<section class='projets'>");
 $(".projets").append("<div class='title'>").append("<article>");
 $(".title").append("<h1 class='mb2'>PROJETS</h1>");
 $("article").append("<div class='card flip-card1'><div class='flip-card-inner'><div class='flip-card-front'><img src='assets/img/1.png' alt='1'></div><div class='flip-card-back'><div class='flip-card-text'><small>Un site Wordpress pour une agence immobilière</small><a href='../chalet_caviar/'>Voir le site</a>");
 $("article").append("<div class='card flip-card2'><div class='flip-card-inner'><div class='flip-card-front'><img src='assets/img/2.png' alt='2'></div><div class='flip-card-back'><div class='flip-card-text'><small>Un site OnePage 100% responsive pour un festival</small><a href='../lesfilmsdepleinair/'>Voir le site</a>");
 $("article").append("<div class='card flip-card3'><div class='flip-card-inner'><div class='flip-card-front'><img src='assets/img/3.png' alt='3'></div><div class='flip-card-back'><div class='flip-card-text'><small>Un générateur de citations en JavaScript</small><a href='../lepredicator/'>Voir le site</a>");
 $("article").append("<div class='card flip-card4'><div class='flip-card-inner'><div class='flip-card-front'><img src='assets/img/4.png' alt='4'></div><div class='flip-card-back'><div class='flip-card-text'><small>Un jeu de plateau tour par tour en JavaScript</small><a href='../laravsnathan/'>Voir le site</a>");
 $("article").append("<div class='card flip-card5'><div class='flip-card-inner'><div class='flip-card-front'><img src='assets/img/5.png' alt='5'></div><div class='flip-card-back'><div class='flip-card-text'><small>Un site d'avis de restaurants en JavaScript</small><a href='../kelresto/'>Voir le site</a>");
}

function hobbys() {
 $("main").empty();
 $("main").append("<section class='hobbys'>");
 $(".hobbys").append("<div class='title'>").append("<article>");
 $(".title").append("<h1 class='mb10'>HOBBYS</h1>");
 $("article").append("<div class='item1'>").append("<div class='item2'>").append("<div class='item3'>").append("<div class='item4'>").append("<div class='item5'>");
 $(".item1").append("<i class='fas fa-music' title='Musique'></i>").append("<span> Musique</span>");
 $(".item2").append("<i class='fas fa-tv' title='Séries'></i>").append("<span> Séries</span>");
 $(".item3").append("<i class='fas fa-film' title='Films'></i>").append("<span> Films</span>");
 $(".item4").append("<i class='fas fa-running' title='Sport'></i>").append("<span> Sport</span>");
 $(".item5").append("<i class='fas fa-gamepad' title='Jeux Vidéo'></i>").append("<span> Jeux Vidéo</span>");
}

$(document).on("click", ".nav-link", function(e) {
 let datatarget = e.target.dataset.value;
 window[datatarget](e);
});

$(document).ready(function() {
 sidebar()
 presentation()
});