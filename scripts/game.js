import Boot from './boot';
import Preload from './preload';
import GameTitle from './gametitle';
import Main from './main';
import GameOver from './gameover';
import GameConfig from './config';
import Menu from './menu';

class Game
{
    /**
     * Initializes the game        
     * @param {HtmlElement} containerElement 
     * @param {Config} config 
     */
    init(containerElement, config)
    {
        this.destroy();

        //Set Game Config
        GameConfig.setConfig(config);

        //Start Game
        var game = new Phaser.Game(800, 900, Phaser.CANVAS, containerElement);
        game.state.add("Boot", Boot);
        game.state.add("Preload", Preload);
        game.state.add("GameTitle", GameTitle);
        game.state.add("Main", Main);
        game.state.add("GameOver", GameOver);
        game.state.add("Menu", Menu);
        game.state.start("Boot");

        // Dynamically loads assets for a given state
        game.loadAssets = function (state) {
            let config = GameConfig.getConfig();

            (config?.assets?.[state] || []).forEach(file => {
                let fileKey = file.substring(file.lastIndexOf('/') + 1, file.indexOf('.'));
                if (file.indexOf('images/') != -1) {
                    game.load.image(fileKey, "assets/" + file, true)
                } else if (file.indexOf('sounds/') != -1) {
                    game.load.audio(fileKey, "assets/" + file, true)
                }
            });
        }

        this.game = game;
    }

    /**
     * Destroy
     */
    destroy()
    {
        GameConfig.reset();
        if (this.game) {
            this.game.destroy();
            this.game = null;
        }
    }
}

export default new Game();