const linkPreviewGenerator = require('link-preview-generator');

const mensaje = [
  {
    id: '0',
    avatar: 'https://avatars1.githubusercontent.com/u/31082438?v=4',
    link: 'https://www.youtube.com/watch?v=Q-eVJGB8bgI&ab_channel=Kesto',
    message: `curso de next js, esta bueno!`,
    tags: ['react', 'js', 'nextJS', 'css'],
    list: 1,
    date: '10-09-2020',
    preview: {
      title: 'Esta es la NUEVA MEJOR ARMA de WARZONE! *NUEVO META* - Kesto',
      description:
        'En este video te muestro la NUEVA MEJOR ARMA en la TEMPORADA 5, seguramente SEASON 6 del BATTLE ROYALE de MODERN WARFARE el CALL OF DUTY WARZONE, estoy habla...',
      domain: 'youtube.com',
      img: 'https://i.ytimg.com/vi/Q-eVJGB8bgI/maxresdefault.jpg',
    },
  },
  {
    id: '1',
    link: 'https://www.youtube.com/watch?v=Q-eVJGB8bgI&ab_channel=Kesto',
    avatar: 'https://avatars1.githubusercontent.com/u/31082438?v=4',
    message: `curso de css!`,
    tags: ['react', 'js', 'nextJS', 'css'],
    date: '10-09-2020',
    preview: {
      title: 'Esta es la NUEVA MEJOR ARMA de WARZONE! *NUEVO META* - Kesto',
      description:
        'En este video te muestro la NUEVA MEJOR ARMA en la TEMPORADA 5, seguramente SEASON 6 del BATTLE ROYALE de MODERN WARFARE el CALL OF DUTY WARZONE, estoy habla...',
      domain: 'youtube.com',
      img: 'https://i.ytimg.com/vi/Q-eVJGB8bgI/maxresdefault.jpg',
    },
  },
  {
    id: '2',
    avatar: 'https://avatars1.githubusercontent.com/u/31082438?v=4',
    link: 'https://www.youtube.com/watch?v=Q-eVJGB8bgI&ab_channel=Kesto',
    message: `Node jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode js
    Node jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode js
    Node jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode js
    Node jsNode jsNode jsNode jsNode js`,
    tags: ['react', 'js', 'nextJS', 'css'],
    date: '10-09-2020',
    preview: {},
  },
  {
    id: '3',
    avatar: 'https://avatars1.githubusercontent.com/u/31082438?v=4',
    link: 'https://www.youtube.com/watch?v=Q-eVJGB8bgI&ab_channel=Kesto',
    message: `este esta buena para js`,
    tags: ['react', 'js', 'nextJS', 'css'],
    date: '10-09-2020',
    preview: {
      title: 'Esta es la NUEVA MEJOR ARMA de WARZONE! *NUEVO META* - Kesto',
      description:
        'En este video te muestro la NUEVA MEJOR ARMA en la TEMPORADA 5, seguramente SEASON 6 del BATTLE ROYALE de MODERN WARFARE el CALL OF DUTY WARZONE, estoy habla...',
      domain: 'youtube.com',
      img: 'https://i.ytimg.com/vi/Q-eVJGB8bgI/maxresdefault.jpg',
    },
  },
  {
    id: '4',
    avatar: 'https://avatars1.githubusercontent.com/u/31082438?v=4',
    link: 'https://www.youtube.com/watch?v=Q-eVJGB8bgI&ab_channel=Kesto',
    message: `curso de next js, esta bueno!`,
    tags: ['react', 'js', 'nextJS', 'css'],
    date: '10-09-2020',
    preview: {
      title: 'Esta es la NUEVA MEJOR ARMA de WARZONE! *NUEVO META* - Kesto',
      description:
        'En este video te muestro la NUEVA MEJOR ARMA en la TEMPORADA 5, seguramente SEASON 6 del BATTLE ROYALE de MODERN WARFARE el CALL OF DUTY WARZONE, estoy habla...',
      domain: 'youtube.com',
      img: 'https://i.ytimg.com/vi/Q-eVJGB8bgI/maxresdefault.jpg',
    },
  },
  {
    id: '5',
    avatar: 'https://avatars1.githubusercontent.com/u/31082438?v=4',
    link: 'https://www.youtube.com/watch?v=Q-eVJGB8bgI&ab_channel=Kesto',
    message: `curso de css!`,
    tags: ['react', 'js', 'nextJS', 'css'],
    date: '10-09-2020',
    preview: {
      title: 'Esta es la NUEVA MEJOR ARMA de WARZONE! *NUEVO META* - Kesto',
      description:
        'En este video te muestro la NUEVA MEJOR ARMA en la TEMPORADA 5, seguramente SEASON 6 del BATTLE ROYALE de MODERN WARFARE el CALL OF DUTY WARZONE, estoy habla...',
      domain: 'youtube.com',
      img: 'https://i.ytimg.com/vi/Q-eVJGB8bgI/maxresdefault.jpg',
    },
  },
  {
    id: '6',
    avatar: 'https://avatars1.githubusercontent.com/u/31082438?v=4',
    link: 'https://www.youtube.com/watch?v=Q-eVJGB8bgI&ab_channel=Kesto',
    message: `Node jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode js
    Node jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode js
    Node jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode jsNode js
    Node jsNode jsNode jsNode jsNode js`,
    tags: ['react', 'js', 'nextJS', 'css'],
    date: '10-09-2020',
    preview: {
      title: 'Esta es la NUEVA MEJOR ARMA de WARZONE! *NUEVO META* - Kesto',
      description:
        'En este video te muestro la NUEVA MEJOR ARMA en la TEMPORADA 5, seguramente SEASON 6 del BATTLE ROYALE de MODERN WARFARE el CALL OF DUTY WARZONE, estoy habla...',
      domain: 'youtube.com',
      img: 'https://i.ytimg.com/vi/Q-eVJGB8bgI/maxresdefault.jpg',
    },
  },
  {
    id: '7',
    avatar: 'https://avatars1.githubusercontent.com/u/31082438?v=4',
    link: 'https://www.youtube.com/watch?v=Q-eVJGB8bgI&ab_channel=Kesto',
    message: `este esta buena para js`,
    tags: ['react', 'js', 'nextJS', 'css'],
    date: '10-09-2020',
    preview: {
      title: 'Esta es la NUEVA MEJOR ARMA de WARZONE! *NUEVO META* - Kesto',
      description:
        'En este video te muestro la NUEVA MEJOR ARMA en la TEMPORADA 5, seguramente SEASON 6 del BATTLE ROYALE de MODERN WARFARE el CALL OF DUTY WARZONE, estoy habla...',
      domain: 'youtube.com',
      img: 'https://i.ytimg.com/vi/Q-eVJGB8bgI/maxresdefault.jpg',
    },
  },
];
export default (req, res) => {
  // linkPreviewGenerator('https://www.youtube.com/watch?v=Q-eVJGB8bgI&ab_channel=Kesto')
  //   .then((data) => {
  //     console.log(data);
  //     // let r = mensaje;

  //     // r.preview = data;

  //     // res.statusCode = 200;
  //     // res.setHeader('Content-Type', 'application/json');
  //     // res.send(JSON.stringify(r));
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(mensaje));
};
