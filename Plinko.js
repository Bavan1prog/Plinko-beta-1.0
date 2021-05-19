class Plinko {
    constructor(x,y){
        var options = {
            isStatic : true,
            restitution : 0.3,
            friction: 5,
            density: 2
        }
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 10;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        fill("red");
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop();
    }


}