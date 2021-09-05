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
  subtitle: 'I am a Web Developer',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I do work for the state government with a focus on the Drupal CMS.',
  paragraphTwo: 'I am very passionate about new technologies especially React and Gatsby.',
  paragraphThree: 'In my free time i love playing disc golf and tinker with my PC build.',
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
  cta: 'Email',
  btn: '',
  email: 'mfvil@protonmail.com',
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
