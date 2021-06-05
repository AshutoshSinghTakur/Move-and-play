class Glass{
	constructor(x,y,r){
	// assign options to the glass ball
	var options ={
		restitution:0.4,
		friction:5,
		densitty:1,
	 }
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y,this.r,options);
		
        World.add(world, this.body);
	}
	display()
	{
			var glasspos=this.body.position;		
			push()
			translate(glasspos.x, glasspos.y);
			strokeWeight(3);
			stroke("black");
			fill("brown");
			//draw the ellipse here to display the rubber ball
            ellipseMode(RADIUS)
			ellipse(0,0, this.r,this.r)
			pop()
	}

}