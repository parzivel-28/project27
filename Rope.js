class Rope {
    constructor(arg_bodyA,arg_bodyB,x,y){
     this.x=x;
     this.y=y;
    var options={
        bodyA:arg_bodyA,
        bodyB:arg_bodyB,
        pointB:{x:x,y:y},
        length:400,
        stifness:0.1,
    }
    this.body= Matter.Constraint.create(options);
    World.add(world,this.body);

    }
    display(){
        strokeWeight(4);
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,
            this.body.bodyB.position.x+this.x,this.body.bodyB.position.y+this.y); 
    }
}