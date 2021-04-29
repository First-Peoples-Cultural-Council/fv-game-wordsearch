import configManager from './config';

class Boot {

    init() {
        this.config = configManager.getConfig();
        this.game.stage.backgroundColor = "#FFFFFF";
    }

    preload() {
        this.game.loadAssets('boot');
    }

    startPreloadScene() {
        this.game.state.start("Preload");
    }

    create() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        setTimeout(this.startPreloadScene.bind(this), 500);
    }
}

export default Boot;
