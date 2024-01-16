class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    preload() {
        this.load.image('rocket', './assets/rocket.png')
        this.load.image('spaceship', './assets/spaceship.png')
        this.load.image('starfield', './assets/starfield.png')
    }

    create() {
        this.add.text(20, 20, "Rocket Patrol Menu")
        this.scene.start("playScene")
    }

}

// init() prepares any data for the scene
// preload() prepares any assets we’ll need for the scene
// create() adds objects to the scene
// update() is a loop that runs continuously (every frame, ideally) and allows us to update logic and game objects