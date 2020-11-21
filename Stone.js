class Stone{
    constructor(){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        //700,1100	
        this.body = Bodies.circle(600,1000,50,options);
        this.radius = 70;
        this.image = loadImage("sprites/stone.png");
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        imageMode(RADIUS);
        image(this.image, pos.x, pos.y, this.radius, this.radius);
    }
}
  