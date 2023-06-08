$(document).ready(function () {
    var clubData = {
        Auberoche: {
            info: 'Informations sur le club Auberoche Isle Manoire',
            president: 'Sabine Fouchier (tel. 06.85.15.34.06)',
            secretary: 'Véronique Brudieux',
            treasurer: 'Chloé Godeau (tel. 06.95.15.52.68)',
            correspondent: 'Amandine Cudini',
            structure: 'Gymnase Maurice Faure (24330 St Pierre de Chignac)',
            email: '6024052@ffhandball.net'
        },
        Bergerac: {
            info: 'Informations sur le club Bergerac Périgord Pourpre',
            president: 'Eric Froin (tel. 06.13.13.20.07)',
            secretary: 'Karine Froin (tel. 06.03.63.11.48)',
            treasurer: 'Estelle Garrigue (tel. 07.86.49.68.01)',
            correspondent: 'Monique Zorzetto (tel. 06.31.35.79.32)',
            structure: 'Gymnase Louis Aragon (Allée des Grands Duc) - Gymnase Roland Dubos (Rue Armand Got 24100 Bergerac)',
            email: '6024001@ffhandball.net'
        },
        Brantôme: {
            info: 'Informations sur le club Brantôme Dronne et Belle',
            president: 'Emmanuelle Deprez (tel. 06.63.80.38.61)',
            secretary: 'Aurore Hardy (tel. 06.70.97.39.09)',
            treasurer: 'Virginie Veret (tel. 06.75.65.50.52)',
            correspondent: 'Emmanuelle Deprez (tel. 06.63.80.38.61)',
            structure: 'Gymnase du Collège (34310 Brantôme)',
            email: '6024053@ffhandball.net'
        },
        Thiviers: {
            info: 'Informations sur le club CEPE Vert Thiviers / Coulaures',
            president: 'David Pipet (tel. 06.59.95.48.58)',
            secretary: 'Annick Lagarde (tel. 06.80.57.64.58)',
            treasurer: 'Cédric Letourneur (tel. 06.71.30.43.30)',
            correspondent: 'Sophie Debordes (tel. 06.83.96.77.65)',
            structure: 'Gymnase René Forestier (24800 Thiviers)',
            email: '6024031@ffhandball.net'
        },
        "Coulouneix-Chamiers": {
            info: 'Informations sur le club Chamiers C.O.C. Handball',
            president: 'Magali Maniere (tel. 06.71.83.78.49) - Samir Kheyar (vice-président, tel. 06.35.63.37.36) - Tomas Bernet (vice-président, tel. 07.87.10.82.04)',
            secretary: 'Fanny Petit Van-Tornhout (tel. 06.37.53.11.45)',
            treasurer: 'Katell Burgalet (tel. 07.80.06.81.16)',
            correspondent: 'Magali Maniere (tel. 06.71.83.78.49)',
            structure: 'Gymnase du Collège (Rue Jean Moulin 24660 Coulouneix-Chamiers)',
            email: '6024030@ffhandball.net'
        },
        Champcevinel: {
            info: 'Informations sur le club de Champcevinel (HBCC)',
            president: 'Pierre-André Gicquel (tel. 06.08.89.42.91)',
            secretary: 'Amanda Autef (tel. 06.28.76.23.62)',
            treasurer: 'Frédéric Autef (tel. 06.18.48.98.40)',
            correspondent: 'Amanda Autef (tel. 06.28.76.23.62)',
            structure: 'Gymnase des Sermonces (24750 Champcevinel)',
            email: '6024019@ffhandball.net'
        },
        Eymet: {
            info: 'Informations sur le club d\'Eymet',
            president: 'Gérard Lagarde (tel. 06.86.61.16.11)',
            secretary: 'Stéphanie Hachiche (tel. 06.07.99.35.84)',
            treasurer: 'M.Dolorès Camacho (tel. 06.74.17.01.77)',
            correspondent: 'Léa De Conti (tel. 06.86.47.56.43)',
            structure: 'Gymnase du Collège (24500 Eymet)',
            email: '6024047@ffhandball.net'
        },
        "Sainte-Foy-la-Grande": {
            info: 'Informations sur le club du Foyen Velinois',
            president: 'William Vially (tel. 06.70.83.90.23)',
            secretary: 'Virginie Neveu (tel. 06.82.03.97.81)',
            treasurer: 'Nathalie Benard (tel. 06.23.76.37.55)',
            correspondent: 'Hélène Visentini (tel. 06.82.16.61.85)',
            structure: 'Gymnase Municipal "Mézières" (33220 Port Ste Foy et Ponchapt)',
            email: '6024032@ffhandball.net'
        },
        'La Force': {
            info: 'Informations sur le club La Force Handball',
            president: 'Alexia Breucq (tel. 06.48.48.53.10) - Cendrine Couëdelo (co-présidente, tel. 06.81.91.66.59)',
            secretary: 'Nelly Zorzetto (tel. 06.88.15.44.39)',
            treasurer: 'Alexandra Lamy (tel. 06.42.65.82.54)',
            correspondent: 'Nelly Zorzetto (tel. 06.88.15.44.39)',
            structure: 'Gymnase du Collège (24130 La Force)',
            email: '6024052@ffhandball.net'
        },
        Lalinde: {
            info: 'Informations sur le club Lalinde (US Lalinde)',
            president: 'Tarik Belaoud (tel. 07.70.26.81.45)',
            secretary: 'Maïder Castagnie (tel. 06.70.46.36.12) - Matthieu Bara (tel. 06.69.58.17.51) - David Haritchague (tel. 06.76.08.14.54)',
            treasurer: 'Florence Canovas (tel. 06.24.25.40.75)',
            correspondent: 'Christophe Ceschin (tel. 06.24.25.40.74)',
            structure: 'Gymnase de l\'Eycaut (Port de Couze 24150 Lalinde)',
            email: '6024036@ffhandball.net'
        },
        'Le Bugue': {
            info: 'Informations sur le club Le Bugue (Le Bugue Athlétique Club)',
            president: 'Céline Oxibar (tel. 06.50.52.09.15) - Denis Belingard (vice-président, tel. 07.77.33.79.11)',
            secretary: 'Majorie Belingard (tel. 06.42.22.27.61)',
            treasurer: 'Marine Ezquerro (tel. 06.27.75.28.32)',
            correspondent: 'Céline Oxibar (tel. 06.50.52.09.15)',
            structure: 'Gymnase Leroi-gourhan (24160 Le Bugue)',
            email: '6024052@ffhandball.net'
        },
        Mareuil: {
            info: 'Informations sur le club Mareuil HBC (MHBC)',
            president: 'Valérie Demoulin (tel. 06.47.10.53.31)',
            secretary: 'Laurent Carelle (tel. 06.62.78.28.45)',
            treasurer: 'Corine Perraud (tel. 06.63.95.70.86)',
            correspondent: 'Laurent Carelle (tel. 06.62.78.28.45)',
            structure: 'Gymnase municipal (24340 Mareuil)',
            email: '6024054@ffhandball.net'
        },
        Montpon: {
            info: 'Informations sur le club Montpon-Menesterol Handball',
            president: 'Ludovic Perot (tel. 06.75.57.78.10)',
            secretary: 'Martine Lebraud (tel. 06.37.06.61.17)',
            treasurer: 'Aymeric Degand (tel. 06.64.29.31.39)',
            correspondent: 'Laurence Graziano (tel. 06.77.52.57.82)',
            structure: 'Gymnase Gousset (avenue de l\'Europe), Gymnase Massias (rue de Foy de Candalie 24700 Montpon-Ménestérol)',
            email: '6024021@ffhandball.net6024021'
        },
        Mussidan: {
            info: 'Informations sur le club Handball Mussidanais',
            president: 'Jimmy Mullier (tel. 06.17.20.57.06) - Pauline Perlumiere (vice-présidente, tel. 06.72.61.19.47)',
            secretary: 'Catherine Fituque (tel. 06.81.08.21.59)',
            treasurer: 'Audrey Honeywood (tel. 06.63.09.68.86)',
            correspondent: 'Catherine Fituque (tel. 06.81.08.21.59)',
            structure: 'Gymnase du Collège "Les Chatenades" (24400 Mussidan)',
            email: '6024051@ffhandball.net'
        },
        Perigueux: {
            info: 'Informations sur le club Périgueux Handball',
            president: 'Jean-François Saget (tel. 06.12.49.23.03)',
            secretary: 'Xavier Lalot (tel. 06.74.65.24.90)',
            treasurer: 'Corrine Payan Peteuil (tel. 05.53.03.91.33)',
            correspondent: 'Xavier Lalot (tel. 06.74.65.24.90)',
            structure: 'Gymnase Bertrand de Born (24000 Périgueux)',
            email: '6024022@ffhandball.net'
        },
        "Plegut-Pluviers": {
            info: 'Informations sur le club Plegut-Pluviers',
            president: 'Sylvain Bregeon (tel. 06.75.07.34.62)',
            secretary: 'Raphaël Jean (tel. 05.45.23.16.54)',
            treasurer: 'Caroline Valade (tel. 06.07.09.78.73)',
            correspondent: 'Sylvain Bregeon (tel. 06.75.07.34.62)',
            structure: 'Gymnase du Collège (rue des Alliés 24360 Piégut Pluviers)',
            email: '6024008@ffhandball.net6024008'
        },
        Riberac: {
            info: 'Informations sur le club C.A.R. Handball',
            president: 'Alain Landrodie (tel. 06.80.53.33.60)',
            secretary: 'Nadine Landrodie (tel. 06.73.62.54.59)',
            treasurer: 'Martine Bertrand (tel. 05.53.90.91.20)',
            correspondent: 'Nadine Landrodie (tel. 06.73.62.54.59)',
            structure: 'Gymnase Municipal - Gymnase de la Cité Scolaire (rue Couleau 24600 Ribérac)',
            email: '6024023@ffhandball.net6024023'
        },
        'St-Astier': {
            info: 'Informations sur le club St-Astier J.S.A.',
            president: 'Romuald Texier Simon (tel. 06.10.24.62.92) - Lionel Herigny (vice-président, tel. 06.84.04.05.39)',
            secretary: 'Leatitia Nivet (tel. 07.88.17.77.88)',
            treasurer: 'Christophe Lacoste (tel. 06.14.90.54.04)',
            correspondent: 'Leatitia Nivet (tel. 07.88.17.77.88)',
            structure: 'Gymnase du Roc (avenue du Stade 24110 Saint-Astier)',
            email: '6024048@ffhandball.net6024048'
        },
        'St-Aulaye': {
            info: 'Informations sur le club St-Aulaye (Handball Eulalien)',
            president: 'Théo Negrier (tel. 06.71.87.51.52)',
            secretary: 'Solenne Lauseille (tel. 06.49.60.98.19)',
            treasurer: 'Hervé Blanchard (tel. 06.70.35.13.93)',
            correspondent: 'Solenne Lauseille (tel. 06.49.60.98.19)',
            structure: 'Gymnase Jerôme Fernandez (Plaine des Sports 24410 Saint-Aulaye)',
            email: '6024010@ffhandball.net6024010'
        },
        Sarlat: {
            info: 'Informations sur le club Sarlat Périgord Noir',
            president: 'Fanny Repetto (tel. 07.84.16.91.50)',
            secretary: 'Mélanie Courmont (tel. 06.26.42.31.91)',
            treasurer: 'Anouk Boyer (tel. 06.51.27.86.63)',
            correspondent: 'Fanny Repetto (tel. 07.84.16.91.50)',
            structure: 'Gymnase (Centre Sportif Plaine des Jeux 24200 Sarlat-La Canéda)',
            email: '6024026@ffhandball.net6024026'
        },
        Tocane: {
            info: 'Informations sur le club GIPS Tocane',
            president: 'Cédric Cabanac (tel. 06.19.69.13.61)',
            secretary: 'Monique Ribeyrol (tel. 06.24.35.15.68)',
            treasurer: 'Sandrine Magne (tel. 06.75.24.16.50)',
            correspondent: 'Sandrine Magne (tel. 06.75.24.16.50)',
            structure: 'Gymnase des Graves (24350 Tocane St Apre)',
            email: '6024052@ffhandball.net'
        },
        Vergt: {
            info: 'Informations sur le club Pays Vernois',
            president: 'Damien Saez (tel. 06.78.55.32.59) - Sylvie Mignot (vice-présidente, tel. 07.81.22.48.13 / 09.52.62.10.03)',
            secretary: 'Blandine Delprat (tel. 06.89.51.44.41)',
            treasurer: 'Anne Brosse (tel. 06.23.95.54.41)',
            correspondent: 'Sylvie Mignot (tel. 07.81.22.48.13 / 09.52.62.10.03)',
            structure: 'Gymnase du Collège (rue André Moulinier 24340 Vergt)',
            email: '6024052@ffhandball.net'
        },
        Montignac: {
            info: 'Informations sur le club Vallée Vézère (Montignac / Terrasson)',
            president: 'Bernadette Carre (tel. 07.81.71.33.41)',
            secretary: 'Lou Collet (tel. 07.81.41.31.22)',
            treasurer: 'Jeanne Legendre (tel. 07.87.34.52.31)',
            correspondent: 'Bernadette Carre (tel. 07.81.71.33.41)',
            structure: 'Gymnase Nicole Duclos (Le Bleufond 24290 Montignac) - Gymnase Dupart (24120 Terrasson)',
            email: '6024052@ffhandball.net'
        }
    };

    // Affiche les informations du club dans le modal au clic sur le marqueur
    $('.marker').click(function () {
        var clubName = $(this).data('info');
        var clubInfo = clubData[clubName].info;
        var clubPresident = clubData[clubName].president;
        var clubSecretary = clubData[clubName].secretary;
        var clubTreasurer = clubData[clubName].treasurer;
        var clubCorrespondent = clubData[clubName].correspondent;
        var clubEmail = clubData[clubName].email;
        var clubStructure = clubData[clubName].structure;

        var clubContent = `
          <b>${clubInfo}</b><br>
          <b>Président :</b> ${clubPresident}<br>
          <b>Secrétaire :</b> ${clubSecretary}<br>
          <b>Trésorier :</b> ${clubTreasurer}<br>
          <b>Correspondant :</b> ${clubCorrespondent}<br>
          <b>Courriel :</b> ${clubEmail}<br>
          <b>Structure :</b> ${clubStructure}<br>
        `;

        $('#clubModalLabel').text(clubName);
        $('#clubInfo').html(clubContent);

        $('#clubModal').modal('show');
    });

    $('#clubModal').on('hidden.bs.modal', function () {
        $('#clubModalLabel').text('');
        $('#clubInfo').html('');
    });
});


// Fonction pour afficher les informations d'un club dans le modal
function showClubInfo(name, info) {
    var modalTitle = document.getElementById("clubModalLabel");
    var modalInfo = document.getElementById("clubInfo");

    modalTitle.innerText = name;
    modalInfo.innerText = info;

    // Ouvre le modal
    var clubModal = new bootstrap.Modal(document.getElementById("clubModal"));
    clubModal.show();
}

// Fonction d'initialisation de la carte
function initMap() {
    var mapContainer = document.getElementById("map");

    // Charge l'image SVG de la carte
    var mapImage = document.createElement("img");
    // mapImage.src = "carte.svg";
    mapImage.style.width = "100%";
    mapImage.style.height = "100%";

    // Ajoute la carte à la page
    mapContainer.appendChild(mapImage);

    // Ajoute les marqueurs des clubs sur la carte
    clubs.forEach(function (club) {
        var marker = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        marker.setAttribute("class", "club-marker");
        marker.setAttribute("cx", club.coordinates[0]);
        marker.setAttribute("cy", club.coordinates[1]);
        marker.setAttribute("r", 8);

        // Affiche le nom du club au survol du marqueur
        marker.addEventListener("mouseover", function () {
            marker.style.fill = "#ff8000";
            mapContainer.style.cursor = "pointer";
            mapContainer.setAttribute("title", club.name);
        });

        // Rétablit la couleur du marqueur et du curseur à la sortie du survol
        marker.addEventListener("mouseout", function () {
            marker.style.fill = "#ff0000";
            mapContainer.style.cursor = "default";
            mapContainer.removeAttribute("title");
        });

        // Affiche les informations du club dans le modal au clic sur le marqueur
        marker.addEventListener("click", function () {
            showClubInfo(club.name, club.info);
        });

        // Ajoute le marqueur à la carte
        mapImage.appendChild(marker);
    });
}

// Appel de la fonction d'initialisation de la carte une fois la page chargée
document.addEventListener("DOMContentLoaded", initMap);