var WIDTH = 640;
var HEIGHT = 480;
var RAINAMOUNT = 50;
var RAINWIDTH = 2;
var RAINHEIGHT = 20;
var MINSPEED = 10;
var MAXSPEED = 30;
var RED = 0;
var GREEN = 0;
var BLUE = 205;

function Rain(x) {
    this.x = x;
    this.y = 0;
    this.velocity = MINSPEED + (Math.random() * (MAXSPEED - MINSPEED));
    this.fall = function(){
        this.y += this.velocity;
        if(this.y > height){
            this.y = 0;
        }
    }
}  


var rains = new Array(RAINAMOUNT);

for(var i = 0; i < RAINAMOUNT; i++){
    rains[i] = new Rain(Math.random() * WIDTH);
}

function setup() {
    WIDTH = 640;
    HEIGHT = 480;
    createCanvas(WIDTH, HEIGHT);
}

function draw() {
    clear();
    fill(RED,GREEN,BLUE);
    for(var i = 0; i < RAINAMOUNT; i++){
        rect(rains[i].x,rains[i].y,RAINWIDTH,RAINHEIGHT);
        rains[i].fall();
    }
}
