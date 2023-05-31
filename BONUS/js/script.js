// creo l'array delle info
const arrayInfo = [
    {
        'nome': 'Wayne Barnett',
        'role': 'Founder & CEO',
        'image': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome': 'Angela Caroll',
        'role': 'Chief Editor',
        'image': 'angela-caroll-chief-editor.jpg'
    }, 
    {
        'nome': 'Walter Gordon',
        'role': 'Office Manager',
        'image': 'walter-gordon-office-manager.jpg'
    },
    {
        'nome': 'Angela Lopez',
        'role': 'Social Media Manager',
        'image': 'angela-lopez-social-media-manager.jpg'
    },
    {
        'nome': 'Scott Estrada',
        'role': 'Developer',
        'image': 'scott-estrada-developer.jpg'
    },
    {
        'nome': 'Barbara Ramos',
        'role': 'Graphic Designer',
        'image': 'barbara-ramos-graphic-designer.jpg'
    }
]
// recupero il contenitore delle cards
const contenitore_card = document.getElementById('contenitore-card');

// ciclo l'array delle info
for(let i=0; i<arrayInfo.length; i++){

    // la salvo in una variabile
    let info = arrayInfo[i];

    console.log(info);
    // creo l'elemento del dom che conterrà le info
    let card = `<div class="card border-3 col-4 bg-black bg-gradient text-info text-center">
    <img class=" p-1" src="./img/${info.image}">
    <p>${info.nome}</p>
    <p>${info.role}</p>
    </div>`
    // concateno la nuova card contenente le info attualmente ciclata con quelle precedenti
    contenitore_card.innerHTML += card;
}