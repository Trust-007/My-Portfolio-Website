const menuBar = document.getElementById('menu-bar');
const dropDown = document.getElementById('drop-down');
const portfolioLink = document.getElementById('first-link');
const aboutLink = document.getElementById('second-link');
const contactLink = document.getElementById('third-link');
const portfolioContainer = document.getElementById('portfolio');

let isShown = false;

if (window.innerWidth < 768) {
  const toggleDropDown = () => {
    isShown = !isShown;
    if (isShown === true) {
      dropDown.style.transform = 'translateX(0%)';
      menuBar.childNodes[1].style.color = 'white';
      menuBar.childNodes[1].className = 'fa-regular fa-x';
      menuBar.childNodes[1].style.fontSize = '20px';
      document.body.style.position = 'fixed';
    } else {
      dropDown.style.transform = 'translateX(100%)';
      menuBar.childNodes[1].style.color = '#6070ff';
      menuBar.childNodes[1].className = 'fa-solid fa-bars';
      menuBar.childNodes[1].style.fontSize = '30px';
      document.body.style.position = '';
    }
  };
  menuBar.addEventListener('click', toggleDropDown);
  const removeModal = () => {
    dropDown.style.transform = 'translateX(100%)';
    menuBar.childNodes[1].style.color = '#6070ff';
    menuBar.childNodes[1].className = 'fa-solid fa-bars';
    menuBar.childNodes[1].style.fontSize = '30px';
    isShown = false;
    document.body.style.position = '';
  };

  portfolioLink.addEventListener('click', removeModal);
  aboutLink.addEventListener('click', removeModal);
  contactLink.addEventListener('click', removeModal);
}
// Creating code for dynamic rendering of projects

const projectLists = [
  {
    id: '1',
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: './assets/first-image.jpg',
    alt: 'first project image',
    tech: ['html', 'css', 'javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: '2',
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: './assets/second-image.png',
    alt: 'second project image',
    tech: ['html', 'css', 'javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: '3',
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: './assets/third-image.jpg',
    alt: 'third project image',
    tech: ['html', 'css', 'javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: '4',
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: './assets/fouth-image.jpg',
    alt: 'fourth project image',
    tech: ['html', 'css', 'javascript'],
    liveVersion: '#',
    source: '#',
  },
];

const togglePopUp = (e) => {
  const itemId = e.target.id;
  projectLists.find((item) => {
    let hi;
    if (item.id === itemId) {
      const popUp = document.createElement('div');
      popUp.className = 'pop-up';

      const overlay = document.createElement('div');
      overlay.className = 'overlay';
      popUp.appendChild(overlay);

      const popContent = document.createElement('div');
      popContent.className = 'pop-content';

      const popHead = document.createElement('div');
      popHead.className = 'pop-head';
      popHead.id = 'pop-head';
      const popName = document.createElement('h3');
      popName.innerText = item.name;
      popHead.appendChild(popName);
      const cancelIcon = document.createElement('i');
      cancelIcon.className = 'fa-solid fa-x';
      cancelIcon.style.cursor = 'pointer';
      cancelIcon.addEventListener('click', () => { document.body.removeChild(popUp); });
      popHead.appendChild(cancelIcon);
      popContent.appendChild(popHead);

      const canopy = document.createElement('p');
      canopy.className = 'canopy-para';
      const firstSpan = document.createElement('span');
      firstSpan.innerText = 'CANOPY';
      canopy.appendChild(firstSpan);
      const fstdotImage = document.createElement('img');
      fstdotImage.src = './assets/Counter.png';
      fstdotImage.alt = 'a dot icon';
      canopy.appendChild(fstdotImage);
      const secondSpan = document.createElement('span');
      secondSpan.innerText = 'Back end dev';
      canopy.appendChild(secondSpan);
      const snddotImage = document.createElement('img');
      snddotImage.src = './assets/Counter.png';
      snddotImage.alt = 'a dot icon';
      canopy.appendChild(snddotImage);
      const thirdSpan = document.createElement('span');
      thirdSpan.innerText = '2015';
      canopy.appendChild(thirdSpan);
      popContent.appendChild(canopy);

      const popImage = document.createElement('img');
      popImage.src = item.imageLink;
      popImage.alt = item.alt;
      popContent.appendChild(popImage);

      const split = document.createElement('div');
      split.className = 'split';

      const popDescription = document.createElement('p');
      popDescription.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea';
      split.appendChild(popDescription);

      const container = document.createElement('div');

      const languageTags = document.createElement('ul');
      languageTags.className = 'language-tags tags-margin';
      const fListItem = document.createElement('li');
      const [one, two, three] = item.tech;
      fListItem.innerText = one;
      languageTags.appendChild(fListItem);
      const sListItem = document.createElement('li');
      sListItem.innerText = two;
      languageTags.appendChild(sListItem);
      const tListItem = document.createElement('li');
      tListItem.innerText = three;
      languageTags.appendChild(tListItem);
      container.appendChild(languageTags);

      const modalBtns = document.createElement('div');
      modalBtns.className = 'modal-btns';

      const livePreview = document.createElement('a');
      livePreview.className = 'project-detail-btn';
      livePreview.style.textDecoration = 'none';
      livePreview.href = item.liveVersion;
      livePreview.innerHTML = 'See Live <i class="fa-solid fa-arrow-up-right-from-square"></i>';
      modalBtns.appendChild(livePreview);

      const seeSource = document.createElement('a');
      seeSource.className = 'project-detail-btn';
      seeSource.style.textDecoration = 'none';
      seeSource.href = item.source;
      seeSource.innerHTML = 'See Source <i class="fa-brands fa-github"></i>';
      modalBtns.appendChild(seeSource);

      container.appendChild(modalBtns);
      split.appendChild(container);
      popContent.appendChild(split);
      popUp.appendChild(popContent);
      hi = document.body.appendChild(popUp);
    }
    return hi;
  });
};

projectLists.map((item) => {
  const projectItem = document.createElement('div');
  projectItem.className = 'project-item';

  const projectImage = document.createElement('div');
  projectImage.className = 'project-image';
  const image = document.createElement('img');
  image.src = item.imageLink;
  image.alt = item.alt;
  projectImage.appendChild(image);

  const projectDetails = document.createElement('div');
  projectDetails.className = 'project-details';
  const projName = document.createElement('h3');
  projName.innerText = item.name;
  projectDetails.appendChild(projName);

  const canopy = document.createElement('p');
  canopy.className = 'canopy-para';
  const firstSpan = document.createElement('span');
  firstSpan.innerText = 'CANOPY';
  canopy.appendChild(firstSpan);
  const fstdotImage = document.createElement('img');
  fstdotImage.src = './assets/Counter.png';
  fstdotImage.alt = 'a dot icon';
  canopy.appendChild(fstdotImage);
  const secondSpan = document.createElement('span');
  secondSpan.innerText = 'Back end dev';
  canopy.appendChild(secondSpan);
  const snddotImage = document.createElement('img');
  snddotImage.src = './assets/Counter.png';
  snddotImage.alt = 'a dot icon';
  canopy.appendChild(snddotImage);
  const thirdSpan = document.createElement('span');
  thirdSpan.innerText = '2015';
  canopy.appendChild(thirdSpan);
  projectDetails.appendChild(canopy);

  const projectDes = document.createElement('p');
  projectDes.className = 'mini-description';
  projectDes.innerText = item.description;
  projectDetails.appendChild(projectDes);

  const languageTags = document.createElement('ul');
  languageTags.className = 'language-tags';
  const fListItem = document.createElement('li');
  const [one, two, three] = item.tech;
  fListItem.innerText = one;
  languageTags.appendChild(fListItem);
  const sListItem = document.createElement('li');
  sListItem.innerText = two;
  languageTags.appendChild(sListItem);
  const tListItem = document.createElement('li');
  tListItem.innerText = three;
  languageTags.appendChild(tListItem);
  projectDetails.appendChild(languageTags);

  const projectBtn = document.createElement('a');
  projectBtn.style.textDecoration = 'none';
  projectBtn.href = '#pop-head';
  projectBtn.className = 'project-detail-btn';
  projectBtn.innerHTML = 'See Project';
  projectBtn.id = item.id;
  projectBtn.addEventListener('click', togglePopUp);
  projectDetails.appendChild(projectBtn);

  projectItem.appendChild(projectImage);
  projectItem.appendChild(projectDetails);
  return portfolioContainer.appendChild(projectItem);
});