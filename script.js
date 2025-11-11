function load_data() {
    fetch('data.json') // charge le fichier JSON
        .then(response => response.json()) //convertit la réponse en JSON
        .then(data => {
            const students = data.students; // Récupère le tableau des étudiants
            const studentList = document.getElementById('studentList'); //ul
            studentList.innerHTML = ''; //vide la liste avant de l'afficher

            // Parcourt du tableau des étudiants 
            students.forEach(student => {
                const listItem = document.createElement('li');
                listItem.textContent = student.name;//Affiche le nom de chaque étudiant
                studentList.appendChild(listItem); // Ajoute chaque étudiant à la liste
            });
        })
        .catch(error => console.error('Erreur:', error)); // Gère les erreurs
}

function load_data() {
    fetch('https://disease.sh/v3/covid-19/countries/morocco') // charge le fichier JSON
        .then(response => response.json()) //convertit la réponse en JSON
        .then(data => {
            const covidList = document.getElementById('covidList'); //ul
            covidList.innerHTML = ''; //vide la liste avant de l'afficher
                })
        .catch(error => console.error('Erreur:', error));
            }