function translateToFrench() {
    const translations = {
        "home-title": "Accueil",
        "about-title": "À propos de moi",
        "section_title": "Titre de la section",
        "section_subtitle": "Sous-titre de la section",
        "nav__logo": "LOUBNA EL ATTAR",
        "nav__link-home": "Accueil",
        "nav__link-about": "À propos",
        "nav__link-Qualification": "Éducation",
        "nav__link-skills": "Compétences",
        "nav__link-connect": "Me contacter",
        "nav__link-portfolio": "Projets",
        "nav__link-contact": "Contactez-moi",
        "about__description": "Passionnée par le monde de la science des données, je prospère dans les défis qu'il présente et les opportunités qu'il ouvre. Avec une curiosité implacable et un esprit analytique, je suis toujours désireuse d'explorer de nouvelles techniques, des ensembles de données et des technologies. Que ce soit la modélisation prédictive, l'apprentissage automatique ou la visualisation des données, je trouve de la joie à découvrir des motifs cachés et à raconter des histoires à travers les données.",
        "qualification__title-1": "Master M2 International en informatique",
        "qualification__subtitle-1": "Université Clermont Auvergne, ISIMA",
        "qualification__calendar-1": "2023 - Présent",
        "qualification__title-2": "Diplôme d'ingénieur en Intelligence Artificielle et Génie Informatique",
        "qualification__subtitle-2": "Ecole Nationale Supérieure d'Arts et Métiers Casablanca (Maroc)",
        "qualification__calendar-2": "2019 - Présent",
        "qualification__title-3": "Baccalauréat en Mathématiques",
        "qualification__subtitle-3": "Lycée Madariss Maria, Témara (Maroc)",
        "qualification__calendar-3": "2019",
        "section_title-portfolio": "Mes projets",
        "section_subtitle-portfolio": " ",
        "portfolio__title-1": "Détection des URL de phishing",
        "portfolio__description-1": "Mise en œuvre d'un modèle ML pour détecter les URL de phishing, identifiant efficacement des modèles et renforçant la sécurité en ligne.",
        "portfolio__title-2": "Robot 'PillPal'",
        "portfolio__description-2": "Création d'un robot connecté équipé de technologies IoT et IA qui distribue automatiquement des pilules à temps.",
        "portfolio__title-3": "Prédiction du roulement des employés avec l'ANN",
        "portfolio__description-3": "Mise en œuvre d'un modèle de réseau neuronal artificiel pour prédire le roulement des employés, identifiant avec succès les modèles et les facteurs influençant les décisions des employés de quitter l'organisation.",
        "portfolio__title-4": "Plateforme de recrutement d'examen de CV",
        "portfolio__description-4": "Développement d'une plateforme de recrutement axée sur l'examen de CV : Optimisation du processus à l'aide de la NLP.",
        "portfolio__title-5": "Site web de blogging 'The Pen and the Mind'",
        "portfolio__description-5": "Développement d'un site web de blogging en utilisant les technologies Angular et Laravel.",
        "portfolio__title-6": "Site web d'apprentissage électronique JEE 'Learn IT'",
        "portfolio__description-6": "Développement d'un site web d'apprentissage électronique JEE en utilisant React et Spring MVC.",
        "portfolio__title-7": "Site web 'Hala 22', Coupe du Monde 2022 au Qatar",
        "portfolio__description-7": "Développement d'un site web pour la Coupe du Monde 2022 au Qatar en utilisant React.",
        "contact__title": "Contactez-moi",
        "contact__subtitle": "Prenez contact",
        "contact__icon-phone": "Appelez-moi",
        "contact__phone": "+33780562147",
        "contact__icon-email": "Email",
        "contact__email": "loubnaelattar0@gmail.com"
    };

    for (const elementId in translations) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = translations[elementId];
        }
    }
}

document.getElementById('translate-button').addEventListener('click', translateToFrench);
