class Bob {
    constructor(x,y) {
      var options = {
          isStatic:false,
         restitution:1.3,
          friction:0,
          density:2
      }
      this.body = Bodies.circle(x,y,20,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      ellipseMode(CENTER);
      fill("yellow");
      ellipse(0, 0, this.width );
      pop();
    }
  };
