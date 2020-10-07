const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Body = Matter.Body;

var engine, world;
var drops = [];
var maxDrops = 50;
var player;

function preload() {}

function setup() {
  createCanvas(500, 800);
  engine = Engine.create();
  world = engine.world;

  player = new Umbrella(width / 2, height / 2 + 80);
}
function draw() {
  Engine.update(engine);
  background(0);
  for (var i = 0; i < drops.length; i++) {
    drops[i].display();
  }

  if (frameCount % 40 === 0) {
    for (var i = 0; i < maxDrops; i++) {
      drops.push(new Drop(random(0, 500), random(0, -1000)));
    }
  }

  player.display();
}
