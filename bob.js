class Bob{
    constructor(x,y){
		var options={
			isStatic:false,
			restitution:1,
			friction:0.5,
			density:0.24
      }
		this.x=x;
		this.y=y;
		this.r=12;
		this.body=Bodies.circle(this.x, this.y,(this.r)/2, options);
		World.add(world, this.body);

    }
    display(){
        var paperpos=this.body.position;		

        push()
        translate(paperpos.x, paperpos.y);
        ellipseMode(RADIUS);
        fill("magenta");
        ellipse(0,0,this.r, this.r);
        pop()
    }
} ;