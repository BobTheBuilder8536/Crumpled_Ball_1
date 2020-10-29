class Paper{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution: 0.3,
            density: 1.2,
            friction: 0.5
        }

        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.d = r*2;
    }

    display(){

        push();
        fill("white");
        var pos = this.body.position;
        circle(pos.x,pos.y,this.d);
        pop();
    }
}