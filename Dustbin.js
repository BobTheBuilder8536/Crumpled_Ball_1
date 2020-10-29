class Dustbin{
    constructor(x,y){
        var options = {
            isStatic: true
        }

        this.body1 = Bodies.rectangle(x-75,y,20,75,options);
        World.add(world,this.body1);
        this.body2 = Bodies.rectangle(x,y+27.5,150,20,options);
        World.add(world,this.body2);
        this.body3 = Bodies.rectangle(x+75,y,20,75,options);
        World.add(world,this.body3);
    }

    display(){

        push();
        noStroke();

        fill(221,160,221);
        var pos1 = this.body1.position;
        rect(pos1.x,pos1.y,20,75);

        var pos2 = this.body2.position;
        rect(pos2.x,pos2.y,150,20);

        var pos3 = this.body3.position;
        rect(pos3.x,pos3.y,20,75);
        pop();
    }
}