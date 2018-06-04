var game = new Phaser.Game(800, 600, Phaser.auto, '', { preload: preload, create: create, update: update });
var cat, catcher, cursors, txtScore, score;

function preload() {
//load in assets needed
game.load.image('cat', 'assets/cat.png');
game.load.image('catcher', 'assets/catcher.png');
game.load.image('bg', 'assets/bg.png');
}
function create() {
  //setup game
  game.add.sprite(0,0,"bg");
  catcher = game.add.sprite(400, 300, "catcher");
  catcher.anchor.setTo(.5,0);

  game.physics.enable(catcher, Phaser.Physics.ARCADE);

  cat = game.add.sprite( Math.random() * game.width, Math.random() * game.height, "cat");
  game.physics.enable(cat, Phaser.Physics.ARCADE);

  score = 0;
  var style = { font: "20px Arial", fill: "#FFF" };
  txtScore = game.add.text(10, 10, score.toString(), style);


//controls
cursors = game.input.keyboard.createCursorKeys();
}

function update() {
//run game loop code

if(cursors.left.isDown) {
  catcher.x -= 5;
  catcher.scale.x = 1;
}

if(cursors.right.isDown) {
  catcher.x += 5;
  catcher.scale.x = -1;

}

if(cursors.up.isDown) {
catcher.y -= 5;
}

if(cursors.down.isDown) {
catcher.y += 5;
}

game.physics.arcade.overlap(catcher, cat, catHitHandler);
}

function catHitHandler(catcherObject, catObject) {
catObject.x =  Math.random() * game.width;
catObject.y =  Math.random() * game.height;


score ++;
txtScore.setText( score.toString()  );
}
