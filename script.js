const sections = [{
  presentation: 'Tonic',
  list_middle: ['CANOPY', 'Back End Dev', 2015],
  snaps: 'Snapshoot_Portfolio.svg',
  text: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Nihil molestiae consequatur, vel illum qui dolorem eum.',
  languaje: ['html', 'css', 'javascript', 'Bootstrap'],
  live: 'https://github.com/Alondra87/Portfolio1',
  source: 'https://dribbble.com/shots/16091521-Language-Course-Landing-Page-Template',
},
{
  presentation: 'Multi-Post Stories',
  list_middle: ['CANOPY', 'Back End Dev', 2015],
  snaps: 'SnapshootPortfolio2.svg',
  text: 'Qui officia deserunt mollit anim id est laborum. Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Fugiat quo voluptas nulla pariatur? Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
  languaje: ['html', 'css', 'javascript', 'Ruby'],
  live: 'https://github.com/Alondra87/Portfolio1',
  source: 'https://dribbble.com/shots/13488883-Teacher-Availability-Calendar',
},
{
  presentation: 'Multi-Post Stories',
  list_middle: ['CANOPY', 'Back End Dev', 2015],
  snaps: 'SnapshootPortfolio3.svg',
  text: 'Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam. Corrupti quos dolores et quas molestias excepturi sint occaecati. Laboris nisi ut aliquip ex ea commodo consequat.',
  languaje: ['html', 'css', 'javascript', 'Python'],
  live: 'https://github.com/Alondra87/Portfolio1',
  source: 'https://www.behance.net/gallery/100768775/Online-Yoga-Fitness-Website',
},
{
  presentation: 'Tonic',
  list_middle: ['CANOPY', 'Back End Dev', 2015],
  snaps: 'SnapshootPortfolio4.svg',
  text: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat. Fugiat quo voluptas nulla pariatur? Corrupti quos dolores et quas molestias excepturi sint occaecati.',
  languaje: ['html', 'css', 'javascript', 'PHP'],
  live: 'https://github.com/Alondra87/Portfolio1',
  source: 'https://dribbble.com/shots/13476985-Landing-page-Kitchen',
},
];

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// openModalButtons.forEach((button) => {
// button.addEventListener('click', (event) => {
// const id = event.target.id;
// const modal = document.querySelector(button.dataset.modalTarget);
// openModal(modal);
// });
// });

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

const openModal = (id = null) => {
  if (id !== null) {
    let techlang = '';

    sections[id].languaje.forEach((elem) => {
      techlang += `<li class="languaje">${elem}</li>`;
    });

    document.getElementById('modal_title').innerHTML = sections[id].presentation;
    document.getElementById('modal_snap').src = `./css/${sections[id].snaps}`;
    document.getElementById('modal_lang').innerHTML = techlang;
    document.getElementById('modal_text').innerHTML = sections[id].text;
    document.getElementById('modal_live').href = sections[id].live;
    document.getElementById('modal_source').href = sections[id].source;

    const modal = document.querySelector('#modal');
    modal.classList.add('active');
  }
};

/* function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
} */

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

openModal();