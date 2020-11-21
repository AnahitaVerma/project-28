class Boy{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(700,1100,1,1,options);
        this.image = loadImage("sprites/boy.png");
        //World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 300, 300);
    }
}