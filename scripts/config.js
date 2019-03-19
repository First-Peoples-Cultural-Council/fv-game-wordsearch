let defaultGameConfig = {

    libs: {
        wordFindScript: 'assets/libs/wordfind.js'
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
        rightArrow:'assets/images/right_arrow.png',
        leftArrow:'assets/images/left_arrow.png'
    },

    letters: [],

    categories: {
        "People": [
            {
                word: "łuk’é",
                translation: "translation",
                audio: 'assets/sounds/sample.mp3',
                image: 'assets/images/bear.jpg'
            },
            {
                word: "łuk’é",
                translation: "translation",
                audio: 'assets/sounds/sample.mp3',
                image: 'assets/images/bear.jpg'
            },
            {
                word: "łuk’é",
                translation: "translation",
                audio: 'assets/sounds/sample.mp3',
                image: 'assets/images/bear.jpg'
            },
            {
                word: "łuk’é",
                translation: "translation",
                audio: 'assets/sounds/sample.mp3',
                image: 'assets/images/bear.jpg'
            },
            {
                word: "łuk’é",
                translation: "translation",
                audio: 'assets/sounds/sample.mp3',
                image: 'assets/images/bear.jpg'
            },
            {
                word: "łuk’é",
                translation: "translation",
                audio: 'assets/sounds/sample.mp3',
                image: 'assets/images/bear.jpg'
            },
        ],
        "Animals": [
            {
                word: "łuk’é",
                translation: "translation",
                audio: 'assets/sounds/sample.mp3',
                image: 'assets/images/bear.jpg'
            }
        ],
        "Things": [
            {
                word: "łuk’é",
                translation: "translation",
                audio: 'assets/sounds/sample.mp3',
                image: 'assets/images/bear.jpg'
            }
        ],
        "Something1": [
            {
                word: "łuk’é",
                translation: "translation",
                audio: 'assets/sounds/sample.mp3',
                image: 'assets/images/bear.jpg'
            }
        ],
        "Something2": [
            {
                word: "łuk’é",
                translation: "translation",
                audio: 'assets/sounds/sample.mp3',
                image: 'assets/images/bear.jpg'
            }
        ],
        "Something3": [
            {
                word: "łuk’é",
                translation: "translation",
                audio: 'assets/sounds/sample.mp3',
                image: 'assets/images/bear.jpg'
            }
        ],
        "Something4": [
            {
                word: "łuk’é",
                translation: "translation",
                audio: 'assets/sounds/sample.mp3',
                image: 'assets/images/bear.jpg'
            }
        ]
        
    }
};


let gameConfig = {};

export default {

    setConfig: (config) =>
    {
        gameConfig = Object.assign({}, defaultGameConfig, config, gameConfig);
    },

    reset: () =>
    {
        gameConfig = {};
    },

    getConfig: () =>
    {
        return gameConfig;
    }
}