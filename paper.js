class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            density:1.2,
            friction:1
        }
        this.body= Bodies.circle(x,y,radius,options);
        this.radius=radius;          
        this.image=loadImage("Sprites/paper2.png")                                                    
     World.add(myworld,this.body);
   }

   display(){
       fill("white");
       var pos=this.body.position;
       push()
       translate(pos.x,pos.y)
       imageMode(CENTER)
       image(this.image,0,0,this.width,this.height)
       pop()
   }
}
    
