const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,stone;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(800,400);
    iron = new Iron(300,400);
    glass1 = new Glass(550,400,5);
    glass2 = new Glass(555,400,5);
    glass3 = new Glass(560,400,5);
    glass4 = new Glass(565,400,5);
    glass5 = new Glass(570,400,5);
    glass6 = new Glass(550,395,5);
    glass7 = new Glass(555,395,5);
    glass8 = new Glass(560,395,5);
    glass9 = new Glass(565,395,5);
    glass10 = new Glass(570,395,5);

    rubber = new Rubber(1000,400,20);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    rubber.display();
    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    glass1.display();
    glass2.display();
    glass3.display();
    glass4.display();
    glass5.display();
    glass6.display();
    glass7.display();
    glass8.display();
    glass9.display();
    glass10.display();

}