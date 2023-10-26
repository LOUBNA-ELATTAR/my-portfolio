let getAbout = document.getElementById("getAbout");
let getResume = document.getElementById("getResume");
let getProjects = document.getElementById("getProjects");
let getContact = document.getElementById("getContact");

let about = document.getElementById("about");
let resume = document.getElementById("resume");
let projects = document.getElementById("projects");
let contact = document.getElementById("contact");

function switchLang(lang) {
    for (let key in languageContent[lang]) {
		document.getElementById(key).innerHTML = languageContent[lang][key];
    }
}
	  
function removeClass() {
    getAbout.classList.remove('selected');
    getResume.classList.remove('selected');
	getProjects.classList.remove('selected');
    getContact.classList.remove('selected');
    about.classList.remove('view');
    resume.classList.remove('view');
	projects.classList.remove('view');
    contact.classList.remove('view');
}

getAbout.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        about.classList.add('view');
        getAbout.classList.add('selected');
    }

});
getResume.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        resume.classList.add('view');
        getResume.classList.add('selected');
    }
})
getProjects.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        projects.classList.add('view');
        getProjects.classList.add('selected');
    }
})

getContact.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        contact.classList.add('view');
        getContact.classList.add('selected');
    }
})

let languageContent = {
    "en": {
		"profession": "AI & Computer Science",
		"aboutme": "About me",
		"myresume": "Resume",
		"myprojects": "Projects",
		"mycontact": "Contact",
		"downloadCV": "DOWNLOAD CV <i class='fas fa-download'></i>",
		"sendemail": "SEND EMAIL <i class='fas fa-reply'></i>",
		"aboutaboutme": "About me",
		"skills": "Languages & Skills",
		"aboutmetext": "<p>Passionate about the world of Data Science, I thrive on the challenges it presents and the opportunities it unlocks. With a relentless curiosity and an analytical mindset, I'm always eager to explore new techniques, datasets, and technologies. Whether it's predictive modeling, machine learning, or data visualization, I find joy in uncovering hidden patterns and telling stories through data</p>",
		"languages": "<i class='fas fa-tv'></i> LANGUAGES",
		"english": "English",
		"certenglish": "<i class='fas fa-download'></i>",
		"french": "French",
		"spanish": "Spanish",
		"arabic": "Arabic",
		"coding": "<i class='fas fa-code'></i> SKILLS",
		"getintouch": "Get In Touch",
		"phone": "<br><br>PHONE",
		"myResume": "Resume",
		"france":"Clermont-Ferrand, France",
		"experience": "<i class='fas fa-briefcase'></i>Experience",
		"education": "<i class='fas fa-university'></i> Education",
		"certificates": "<i class='fas fa-university'></i> Some Certificates",
		"dateactive": "2019 - PRESENT",
		"swdev": "AI & Web Developer Intern",
		"cashapp":"Web Developer Intern",
		"proclead": "Web Developer Intern",
		"imprspec": "Web Developer Intern",
		"ics": "M2 International of Computer Science",
		"businessadm": "Diplôme d'Ingénieur in Artificial Intelligence & Computer Engineering",
		"bachelor": "Baccalaureate degree in Mathematics",
		"sap": "Developed a resume screening-focused recruitment platform, optimized the recruitment process by automating the selection of candidates using NLP.",
		"sanofi": "Conceived, developed, and deployed a self-learning platform 212.",
		"diageo1": "Conceived and implementated an E-Invoicing web application.",
		"diageo2": "<p>Designed and developed an E-Learning platform ECA Skills.</p>",
		"progma": "ISIMA, Clermont Auvergne University",
		"selenium": "AWS Academy Cloud Foundations",
		"teamwork": "Teamwork Skills: Communicating Effectively",
		"myproj": "My Projects",
		"javaproject": "Implementation of an Artificial Neural Network model to predict employee churn, successfully identifying patterns and factors influencing employee decisions to leave the organization.",
		"blogproject": "Development of a blogging website using Angular and Laravel technologies.",
		"pillpal": "Creation of a connected robot endowed with IoT and AI technologies that automatically dispenses pills on time.",
		"phishingproject": "Implementation of multiple classifiers to detect phishing URLs, effectively identifying patterns and enhancing online security.</p>",
		"casa":"Casablanca, Morocco",
		"colombia":"Temara, Morocco",
		
		
     },
	 "fr": {
		"profession": "IA et Génie Informatique",
		"aboutme": "À propos de moi",
		"myresume": "CV",
		"myprojects": "Projets",
		"mycontact": "Contact",
		"downloadCV": "TÉLÉCHARGER MON CV <i class='fas fa-download'></i>",
		"sendemail": "ENVOYER UN EMAIL <i class='fas fa-reply'></i>",
		"aboutaboutme": "À propos de moi",
		"skills": "Langues & Compétences",
		"aboutmetext": "<p>Passionnée par le monde de la Data Science, je prospère grâce aux défis qu'il présente et aux opportunités qu'il débloque. Avec une curiosité inlassable et un esprit analytique, je suis toujours désireuse d'explorer de nouvelles techniques, des ensembles de données et des technologies. Que ce soit la modélisation prédictive, l'apprentissage automatique ou la visualisation de données, je trouve de la joie à découvrir des motifs cachés et à raconter des histoires à travers les données.</p>",
		"languages": "<i class='fas fa-tv'></i> LANGUES",
		"english": "Anglais",
		"french": "Français",
		"spanish": "Espagnol",
		"arabic": "Arabe",
		"coding": "Compétences",
		"getintouch": "Me Contacter",
		"phone": "<br><br>TÉLÉPHONE",
		"myResume": "CV",
		"france": "Clermont-Ferrand, France",
		"experience": "<i class='fas fa-briefcase'></i>Expérience",
		"education": "<i class='fas fa-university'></i> Formation",
		"certificates": "<i class='fas fa-university'></i> Certifications",
		"dateactive": "2019 - PRÉSENT",
		"swdev": "Stagiaire en IA & Développement Web",
		"cashapp": "Stagiaire Développeur Web",
		"proclead": "Stagiaire Développeur Web",
		"imprspec": "Stagiaire Développeur Web",
		"ics": "M2 International of Computer Science",
		"businessadm": "Diplôme d'Ingénieur en Intelligence Artificielle et Informatique",
		"bachelor": "Baccalauréat en Sciences Mathématiques",
		"sap": "Développement d'une plateforme de recrutement axée sur la présélection des CV : Optimisation du processus à l'aide du NLP.",
		"sanofi": "Conception, développement et déploiement d'une plateforme d'auto-apprentissage.",
		"diageo1": "Conception et mise en œuvre d'une application web de facturation électronique E-Voicing.",
		"diageo2": "<p>Conception et développement d'une plateforme d'apprentissage en ligne ECA Skills.</p>",
		"progma": "ISIMA, Université Clermont Auvergne",
		"myproj": "Mes Projets",
		"churnproject": "Implémentation d'un modèle de Réseau de Neurones Artificiels (ANN) pour prédire le churn des employés, identifiant les motifs et facteurs de départ.",
		"blogproject": "Développement d'un site web de blogs utilisant les technologies Angular et Laravel.",
		"pillpal": "Création d'un robot connecté doté de technologies IoT et IA qui distribue automatiquement des médicaments à temps.",
		"phishingproject": "Mise en œuvre de techniques d'apprentissage automatique (machine learning) pour détecter les URL de hameçonnage (Phishing), améliorant ainsi la sécurité en ligne grâce à l'identification de schémas.</p>",
		"casa": "Casablanca, Maroc",
		"temara": "Témara, Maroc"
	}
}



