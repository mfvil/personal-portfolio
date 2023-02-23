import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Roman', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'My personal portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Roman',
  subtitle: 'I can build your next website',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Im a freelancer web developer based in the Austin texas area.',
  paragraphTwo: 'I have experience with React, Gatsby, Drupal, and Wordpress.',
  paragraphThree: 'Work with me to build your next website!',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '',
    title: 'Letter Query Plugin',
    info: 'A drupal views plugin that queries json endpoint data from another site and displays it in a view',
    info2: '',
    url: 'https://github.com/mfvil/letter-query',
    repo: 'https://github.com/mfvil/letter-query', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: 'Deep Poets',
    info: 'A fun poetry blog built using gatsby and forestry cms.',
    info2: '',
    url: 'https://deep-poets.com/',
    repo: 'https://github.com/mfvil/deep-poets', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Interested in working together?',
  btn: '',
  email: 'rarefyev@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mfvil',
    },
  ],
};
