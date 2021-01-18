class Stone{

    constructor(x,y,radius){

        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1
        }

        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.image=loadImage("Plucking mangoes/stone.png");

        World.add(world,this.body);

    };

 display(){
        var pos=this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
    }
}