class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    create() {
        // this.add.text(20, 20, "Rocket Patrol Play")
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0)
        
        // add rectangle with x coord, y coord, width, height, and color (hex) w/ ssetOrigin to adjust rectangle's origin
        // all defined with variables rather than hardcoded for flexibility
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0,0)       // green
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0,0)                                      // all white
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0,0)      // |
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0,0)                                     // |
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0,0)      // vv
        this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height- borderUISize - borderPadding, 'rocket').setOrigin(0.5, 0)
    
        keyFIRE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F)
        keyRESET = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
    }

    update() {
        this.starfield.tilePositionX -= 3.5
        this.p1Rocket.update()
    }
}
