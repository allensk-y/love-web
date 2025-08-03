function random(min, max) {
  return Math.random() * (max - min) + min;
}

const TAU = Math.PI * 2;

class Particle {
  constructor(x, y) {
    const angle = random(0, TAU);
    const force = random(2, 6);

    this.vx = Math.sin(angle) * force;
    this.vy = Math.cos(angle) * force;
    this.drag = random(0.82, 0.97);
    this.scale = random(0.5, 1.5);
    this.wander = random(0.5, 1.0);
    this.x = x;
    this.y = y;

    this.element = document.createElement("div");
    this.element.className = "star";
    this.element.innerHTML = "&#xf005;";

    const colors = ["#ff99cc", "#ffcc00", "#66ffcc", "#99ccff", "#ff6666"];
    this.element.style.color = colors[Math.floor(Math.random() * colors.length)];
    this.element.style.fontSize = `${this.scale * 20}px`;
    this.element.style.left = `${x}px`;
    this.element.style.top = `${y}px`;
    this.element.style.position = "absolute";
    this.element.style.pointerEvents = "none";

    document.body.appendChild(this.element);
  }

  update() {
    this.vx *= this.drag;
    this.vy *= this.drag;
    this.x += this.vx;
    this.y += this.vy;

    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
  }

  destroy() {
    this.element.remove();
  }
}

const particles = [];

document.addEventListener("mousemove", (e) => {
  const p = new Particle(e.clientX, e.clientY);
  particles.push(p);
  setTimeout(() => {
    p.destroy();
    particles.splice(particles.indexOf(p), 1);
  }, 1000);
});

function animate() {
  for (const p of particles) {
    p.update();
  }
  requestAnimationFrame(animate);
}
animate();
