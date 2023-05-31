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

const contenitore_card = document.getElementById('contenitore-card');

for(let i=0; i<arrayInfo.length; i++){

    let info = arrayInfo[i];

    console.log(info);

    let card = `<div class="card">
    <p>${info.nome}</p>
    <p>${info.role}</p>
    <p>${info.image}</p>
    </div>`

    contenitore_card.innerHTML += card;
}