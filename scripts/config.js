let defaultGameConfig = {
  libs: {
    wordFindScript: 'assets/libs/wordfind.js',
  },

  images: {
    transp: 'assets/images/transp.png',
    preloaderLoading: 'assets/images/loading.png',
    preloaderLogo: 'assets/images/logo.png',
    tile: 'assets/images/tile.png',
    playAudio: 'assets/images/play_audio.png',
    background: 'assets/images/background.png',
    title: 'assets/images/title.png',
    welldone: 'assets/images/well-done.png',
    cloud: 'assets/images/cloud.png',
    rightArrow: 'assets/images/right_arrow.png',
    leftArrow: 'assets/images/left_arrow.png',
    mute: 'assets/images/mute.png',
    unmute: 'assets/images/unmute.png',
  },

  letters: [
    'c',
    'h',
    'a',
    'r',
    'l',
    'i',
    'e',
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
    gameConfig = Object.assign({}, defaultGameConfig, config, gameConfig)
  },

  reset: () => {
    gameConfig = {}
  },

  getConfig: () => {
    return gameConfig
  },
}
