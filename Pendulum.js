class Pendulum {
  constructor(x, y, width, height, color="green") {
    var options = { 
      density: 1, 
      frictionAir: 0.0,
      friction:0,
      restitution:1,
      slop:1,
      inertia:Infinity
    };
      this.color=color;

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    fill(this.color);
    ellipse(0, 0, this.width, this.height);
    pop();
  }
}
