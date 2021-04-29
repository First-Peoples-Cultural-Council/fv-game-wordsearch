let defaultGameConfig = {
  libs: {
    wordFindScript: 'assets/libs/wordfind.js',
  },

  assets: {
    boot: ['images/loading.png', 'images/logo.png'],
    preload: [
      'images/background.png',
      'images/transp.png',
      'images/tile.png',
      'images/play_audio.png',
      'images/title.png',
      'images/well_done.png',
      'images/cloud.png',
      'images/right_arrow.png',
      'images/left_arrow.png',
      'images/mute.png',
      'images/unmute.png'
    ]
  },

  options: {
    categories: false
  },

  letters: [
    'c',
    'h',
    'a',
    'r',
    'l',
    'i',
    'e',
    'zz',
    'b',
    'o',
    'd',
    'm',
    'a',
    'n',
    'd',
    'a',
    'n',
    'y',
    'o',
    'n',
    'a',
    'f',
    'o',
    'o',
    'b',
    'a',
    'r',
    'ł',
    'u',
    'k’',
    'é',
  ],
  words:[
    {
      word: 'Charlie',
      characters: ['C', 'h', 'a', 'r', 'l', 'i', 'e'],
      translation: 'translation',
      audio: 'assets/sounds/sample.mp3',
      image: 'assets/images/bear.jpg',
    },
    {
      word: 'Bodman',
      characters: ['B', 'o', 'd', 'm', 'a', 'n'],
      translation: 'translation',
      audio: 'assets/sounds/sample.mp3',
      image: 'assets/images/bear.jpg',
    },
    {
      word: 'Dan',
      characters: ['D', 'a', 'n'],
      translation: 'translation',
      audio: 'assets/sounds/sample.mp3',
      image: 'assets/images/bear.jpg',
    },
    {
      word: 'Yona',
      characters: ['Y', 'o', 'n', 'a'],
      translation: 'translation',
      audio: 'assets/sounds/sample.mp3',
      image: 'assets/images/bear.jpg',
    },
    {
      word: 'Foo',
      characters: ['F', 'o', 'o'],
      translation: 'translation',
      audio: 'assets/sounds/sample.mp3',
      image: 'assets/images/bear.jpg',
    },
    {
      word: 'Bar',
      characters: ['B', 'a', 'r'],
      translation: 'translation',
      audio: 'assets/sounds/sample.mp3',
      image: 'assets/images/bear.jpg',
    },
    {
      word: 'Bazz',
      characters: ['B', 'a', 'r', 'zz'],
      translation: 'translation',
      audio: 'assets/sounds/sample.mp3',
      image: 'assets/images/bear.jpg',
    },
  ],
  categories: {
    People: [
      {
        word: 'Charlie',
        characters: ['C', 'h', 'a', 'r', 'l', 'i', 'e'],
        translation: 'translation',
        audio: 'assets/sounds/sample.mp3',
        image: 'assets/images/bear.jpg',
      },
      {
        word: 'Bodman',
        characters: ['B', 'o', 'd', 'm', 'a', 'n'],
        translation: 'translation',
        audio: 'assets/sounds/sample.mp3',
        image: 'assets/images/bear.jpg',
      },
      {
        word: 'Dan',
        characters: ['D', 'a', 'n'],
        translation: 'translation',
        audio: 'assets/sounds/sample.mp3',
        image: 'assets/images/bear.jpg',
      },
      {
        word: 'Yona',
        characters: ['Y', 'o', 'n', 'a'],
        translation: 'translation',
        audio: 'assets/sounds/sample.mp3',
        image: 'assets/images/bear.jpg',
      },
      {
        word: 'Foo',
        characters: ['F', 'o', 'o'],
        translation: 'translation',
        audio: 'assets/sounds/sample.mp3',
        image: 'assets/images/bear.jpg',
      },
      {
        word: 'Bar',
        characters: ['B', 'a', 'r'],
        translation: 'translation',
        audio: 'assets/sounds/sample.mp3',
        image: 'assets/images/bear.jpg',
      },
    ],
    Animals: [
      {
        word: 'łuk’é',
        characters: ['ł', 'u', 'k’', 'é'],
        translation: 'translation',
        audio: 'assets/sounds/sample.mp3',
        image: 'assets/images/bear.jpg',
      },
    ],
    Things: [
      {
        word: 'łuk’é',
        characters: ['ł', 'u', 'k’', 'é'],
        translation: 'translation',
        audio: 'assets/sounds/sample.mp3',
        image: 'assets/images/bear.jpg',
      },
    ],
    Something1: [
      {
        word: 'łuk’é',
        characters: ['ł', 'u', 'k’', 'é'],
        translation: 'translation',
        audio: 'assets/sounds/sample.mp3',
        image: 'assets/images/bear.jpg',
      },
    ],
    Something2: [
      {
        word: 'łuk’é',
        characters: ['ł', 'u', 'k’', 'é'],
        translation: 'translation',
        audio: 'assets/sounds/sample.mp3',
        image: 'assets/images/bear.jpg',
      },
    ],
    Something3: [
      {
        word: 'łuk’é',
        characters: ['ł', 'u', 'k’', 'é'],
        translation: 'translation',
        audio: 'assets/sounds/sample.mp3',
        image: 'assets/images/bear.jpg',
      },
    ],
    Something4: [
      {
        word: 'łuk’é',
        characters: ['ł', 'u', 'k’', 'é'],
        translation: 'translation',
        audio: 'assets/sounds/sample.mp3',
        image: 'assets/images/bear.jpg',
      },
    ],
  },
}

let gameConfig = {}

export default {
  setConfig: (config) => {
    if (config?.assets) {
      for (const [key, value] of Object.entries(config?.assets)) {
        // Merge assets for each state
        config.assets[key] = defaultGameConfig.assets[key].concat(value);
      }
    }

    gameConfig = Object.assign({}, defaultGameConfig, config, gameConfig)
  },

  reset: () => {
    gameConfig = {}
  },

  getConfig: () => {
    return gameConfig
  },

  getConfigOptions: () => {
    return gameConfig?.options
  },
}
