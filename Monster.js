class Monster{
    constructor(x,y,r){
        var options={
            'friction':1.0,
            'restitution':0.8,
            'density':0.04
        }
        this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("images/Monster-01.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			// rectMode(CENTER)
			// rotate(this.body.angle)
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0,0,this.r*2, this.r*2)
			pop()
			
	}

}