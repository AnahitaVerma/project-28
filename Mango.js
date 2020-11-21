class Mango{
    constructor(x,y){
        var options = {
            'isStatic':true,
            'restitution':0,
            'friction':1.0
        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 67;
        this.image = loadImage("sprites/mango.png");
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        imageMode(RADIUS);
        image(this.image, pos.x, pos.y, this.radius, this.radius);
    }
}
  