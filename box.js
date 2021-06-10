class box {
    constructor(x,y,width,height) {
      var options = {
        'restitution':1,
        'friction':1.0,
        'density':1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      
     
      this.image=loadImage("rb.jpg")
      
      
      World.add(world, this.body);
    }
    display(){
     var pos= this.body.position
     var angle=this.body.angle
     push ()
 
      imageMode(CENTER);
//translate (pos.x,pos.y)
//rotate (angle)
      image(this.image, pos.x, pos.y, this.width, this.height);

    
pop()
    }
  }