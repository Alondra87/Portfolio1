const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const sections = [{
  presentation: 'Facebook 360',
  list_middle: ['CANOPY', 'Back End Dev', 2015],
  snaps: './css/Snapshoot_Portfolio.svg',
  text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  description: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Nihil molestiae consequatur, vel illum qui dolorem eum.',
  languaje: ['html', 'css', 'javascript', 'Bootstrap'],
  live: 'https://github.com/Alondra87/Portfolio1',
  source: 'https://dribbble.com/shots/16091521-Language-Course-Landing-Page-Template',
},
{
  presentation: 'Uber Navigation',
  list_middle: ['CANOPY', 'Back End Dev', 2015],
  snaps: './css/SnapshootPortfolio2.svg',
  text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  description: 'Qui officia deserunt mollit anim id est laborum. Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Fugiat quo voluptas nulla pariatur? Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
  languaje: ['html', 'css', 'javascript', 'Ruby'],
  live: 'https://github.com/Alondra87/Portfolio1',
  source: 'https://dribbble.com/shots/13488883-Teacher-Availability-Calendar',
},
{
  presentation: 'Multi-Post Stories',
  list_middle: ['CANOPY', 'Back End Dev', 2015],
  snaps: './css/SnapshootPortfolio3.svg',
  text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  description: 'Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam. Corrupti quos dolores et quas molestias excepturi sint occaecati. Laboris nisi ut aliquip ex ea commodo consequat.',
  languaje: ['html', 'css', 'javascript', 'Python'],
  live: 'https://github.com/Alondra87/Portfolio1',
  source: 'https://www.behance.net/gallery/100768775/Online-Yoga-Fitness-Website',
},
{
  presentation: 'Tonic',
  list_middle: ['CANOPY', 'Back End Dev', 2015],
  snaps: './css/SnapshootPortfolio4.svg',
  text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat. Fugiat quo voluptas nulla pariatur? Corrupti quos dolores et quas molestias excepturi sint occaecati.',
  languaje: ['html', 'css', 'javascript', 'PHP'],
  live: 'https://github.com/Alondra87/Portfolio1',
  source: 'https://dribbble.com/shots/13476985-Landing-page-Kitchen',
},
];

const loadSections = () => {
  let showSections = '';

  for (let i = 0; i < sections.length; i += 1) {
    let techlang = '';
    let listmidd = '';
    let rond = '';

    for (let j = 0; j < sections[i].list_middle.length; j += 1) {
      if (j !== 0) { rond = 'counter'; } else {
        rond = 'canopy';
      }

      listmidd += `<li class=${rond}>${sections[i].list_middle[j]}</li>`;
    }

    for (let k = 0; k < sections[i].languaje.length; k += 1) {
      techlang += `<li class="languaje">${sections[i].languaje[k]}</li>`;
    }

    showSections += `<div class="middle-sec">
  
  <div class="mds12">  
  <figure>
      <img class="snaps" src="${sections[i].snaps}" alt="Snapshoot_Portfolio">
  </figure>
  </div>
  <div class="mds22">
  <h2 class="presentation">${sections[i].presentation}</h2>
       <ul class="list_middle">
       ${listmidd}
      </ul>    
   <p class="description">${sections[i].text}</p>
      <ul class="list_middle">
      ${techlang}
      </ul>
       <div class="project">
          <button  class="button_project" data-modal-target="#modal" type="button">See Project</button> 
      </div>
    </div>
  </div> `;
    document.getElementById('portfolio').innerHTML = showSections;

    let showModal = '';
    showModal += `<div class="middle-sec">
  <div class="mds22">
       <h2 class="presentation">${sections[i].presentation}</h2>
       <button data-close-button class="close-button" type="button">&times;</button>
       <ul class="list_middle" id="modal_middle">
       ${listmidd}
      </ul>
      <br>
   <div class="mds12">  
  <figure>
      <img class="snaps" src="${sections[i].snaps}" alt="Snapshoot_Portfolio">
  </figure>
  </div>   
  <p class="description" id="modal_text">${sections[i].description}</p>  
  <ul id="modal_lang" class="list_middle2">
      ${techlang}
      </ul>
    <div class="button_foot">
         <a id="modal_live" class="button_project" href="${sections[i].live}" target="_blank" rel="noreferrer noopener" aria-label="this is an external link (opens in a new tab)">See Live <img src="./css/circlearrow.png" alt=""></a>
          <a  id="modal_source" class="button_project" href="${sections[i].source}" target="_blank" rel="noreferrer noopener" aria-label="this is an external link (opens in a new tab)">See Source <img src="./css/kitty.png" alt=""></a>
          </div>
</div> </div>`;

    document.getElementById('modal').innerHTML = showModal;
  }
};

loadSections();

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});
