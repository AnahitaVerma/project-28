class Tree{

    constructor(x,y){
  
    var options={
  
      isStatic: true,
    
    }
  
    this.body = Bodies.rectangle(x,y,1,1,options)
    this.image = loadImage("sprites/tree.png")
    this.x=x
    this.y=y
    this.width=1
    this.height=1
  
    World.add(world,this.body)
    }
  
    display(){
  
      var pos = this.body.position
      rectMode(CENTER)
      fill("green")
      rect(pos.x,pos.y,1,1)
      image(this.image,700,50, 500,500);
    }
  }