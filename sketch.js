// Objects - Planets:
let mercury, venus, earth, mars, jupiter, saturn, uranus, neptune;
let rotCenterX_Sun = 0,
  rotCenterY_Sun = 0;
let hoverState = [0, 0, 0, 0, 0, 0, 0, 0];

function preload() {
  headline = loadFont("ABCWhyteInktrapVariable-Trial.ttf");
  labeltext = loadFont("ABCWhyteInktrapVariable-Trial.ttf");
  earthImage = loadImage("earth.png");
  jupiterImage = loadImage("jupiter.png");
  marsImage = loadImage("mars.png");
  mercuryImage = loadImage("mercury.png");
  neptuneImage = loadImage("neptune.png");
  plutoImage = loadImage("pluto.png");
  saturnImage = loadImage("saturn.png");
  sunImage = loadImage("sun.png");
  uranusImage = loadImage("uranus.png");
  venusImage = loadImage("venus.png");
  gravityImage = loadImage("gravity.png");
  orbitLengthImage = loadImage("orbitLength.png");
  distanceImage = loadImage("distance.png");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);

  // Define animation frame rate
  frameRate(60);

  // Planets of the Solar System:
  mercury = new Planet("Mercury", 3.7, 0.24, 2439.7, 0.39, 5, 80);
  venus = new Planet("Venus", 8.87, 0.62, 6051.8, 0.72, 8, 95);
  earth = new Planet("Earth", 9.81, 1, 6371, 1, 12, 130);
  mars = new Planet("Mars", 3.71, 1.88, 3389.5, 1.52, 16, 200);
  jupiter = new Planet("Jupiter", 24.79, 11.86, 69911, 5.2, 21, 240);
  saturn = new Planet("Saturn", 10.44, 29.46, 58232, 9.58, 28, 380);
  uranus = new Planet("Uranus", 8.69, 84.01, 25362, 19.18, 20, 420);
  neptune = new Planet("Neptune", 11.15, 164.8, 24622, 30.07, 20, 510);
}

function draw() {
  background("#383893");
  
  // Add Headline
  push()
  textSize(128);
  fill(255, 48);
  textFont(headline);
  textStyle(BOLD);
  text("SOLAR SYSTEM", width / 2, 160);
  textAlign(CENTER);
  pop();

  // Draw the sun
  rotCenterX_Sun = width / 2;
  rotCenterY_Sun = height / 2;
  push();
  translate(rotCenterX_Sun, rotCenterY_Sun);
  imageMode(CENTER);
  let sun = image(sunImage, 0, 0, 120, 120);
  pop();

  // Render planets
  mercury.render();
  venus.render();
  earth.render();
  mars.render();
  jupiter.render();
  saturn.render();
  uranus.render();
  neptune.render();

  // Update planets position
  var sum = 0;
  for (var i = 0; i < hoverState.length; i++) {
    sum += hoverState[i];
  }
  if (sum > 0) {
    // Draw popup
    push();
    popup(mouseX, mouseY, hoverState.indexOf(1));
    pop();
  } else {
    mercury.update();
    venus.update();
    earth.update();
    mars.update();
    jupiter.update();
    saturn.update();
    uranus.update();
    neptune.update();
  }
}

// Define the planets:
class Planet {
  constructor(
    name,
    gravity,
    orbitLength,
    radius,
    distance,
    renderRadius,
    renderDistance
  ) {
    this.name = name;
    this.gravity = gravity;
    this.orbitLength = orbitLength;
    this.radius = radius;
    this.distance = distance;
    this.renderRadius = renderRadius;
    this.renderDistance = renderDistance;
    this.angle = random(360);
    this.planetIndex = 0;
  }

  update() {
    if (this.name == "Venus" || this.name == "Uranus") {
      this.angle -= (1 / Math.sqrt(this.orbitLength)) * 0.5;
    } else {
      this.angle += (1 / Math.sqrt(this.orbitLength)) * 0.5;
    }
  }

  render() {
    let currentX;
    let currentY;

    currentX = width / 2 + this.renderDistance * cos(this.angle);
    currentY = height / 2 + this.renderDistance * sin(this.angle);

    //Render the planet
    if (this.name == "Mercury") {
      image(
        mercuryImage,
        currentX - this.renderRadius,
        currentY - this.renderRadius,
        this.renderRadius * 2,
        this.renderRadius * 2
      );

      ellipse(width / 2, height / 2, this.renderDistance * 2);
      noFill();
      stroke("#FFFFFF30");
      strokeWeight(0.3);

      this.planetIndex = 0;
    } else if (this.name == "Venus") {
      image(
        venusImage,
        currentX - this.renderRadius,
        currentY - this.renderRadius,
        this.renderRadius * 2,
        this.renderRadius * 2
      );

      ellipse(width / 2, height / 2, this.renderDistance * 2);
      noFill();
      stroke("#FFFFFF30");
      strokeWeight(0.3);

      this.planetIndex = 1;
    } else if (this.name == "Earth") {
      image(
        earthImage,
        currentX - this.renderRadius,
        currentY - this.renderRadius,
        this.renderRadius * 2,
        this.renderRadius * 2
      );

      ellipse(width / 2, height / 2, this.renderDistance * 2);
      noFill();
      stroke("#FFFFFF30");
      strokeWeight(0.3);

      this.planetIndex = 2;
    } else if (this.name == "Mars") {
      image(
        marsImage,
        currentX - this.renderRadius,
        currentY - this.renderRadius,
        this.renderRadius * 2,
        this.renderRadius * 2
      );

      ellipse(width / 2, height / 2, this.renderDistance * 2);
      noFill();
      stroke("#FFFFFF30");
      strokeWeight(0.3);

      this.planetIndex = 3;
    } else if (this.name == "Jupiter") {
      image(
        jupiterImage,
        currentX - this.renderRadius,
        currentY - this.renderRadius,
        this.renderRadius * 2,
        this.renderRadius * 2
      );

      ellipse(width / 2, height / 2, this.renderDistance * 2);
      noFill();
      stroke("#FFFFFF30");
      strokeWeight(0.3);

      this.planetIndex = 4;
    } else if (this.name == "Saturn") {
      image(
        saturnImage,
        currentX - this.renderRadius,
        currentY - this.renderRadius,
        this.renderRadius * 2,
        this.renderRadius * 2
      );

      ellipse(width / 2, height / 2, this.renderDistance * 2);
      noFill();
      stroke("#FFFFFF30");
      strokeWeight(0.3);

      this.planetIndex = 5;
    } else if (this.name == "Uranus") {
      image(
        uranusImage,
        currentX - this.renderRadius,
        currentY - this.renderRadius,
        this.renderRadius * 2,
        this.renderRadius * 2
      );

      ellipse(width / 2, height / 2, this.renderDistance * 2);
      noFill();
      stroke("#FFFFFF30");
      strokeWeight(0.3);

      this.planetIndex = 6;
    } else if (this.name == "Neptune") {
      image(
        neptuneImage,
        currentX - this.renderRadius,
        currentY - this.renderRadius,
        this.renderRadius * 2,
        this.renderRadius * 2
      );

      ellipse(width / 2, height / 2, this.renderDistance * 2);
      noFill();
      stroke("#FFFFFF30");
      strokeWeight(0.3);

      this.planetIndex = 7;
    }

    //Hover control
    if (dist(mouseX, mouseY, currentX, currentY) < this.renderRadius * 2) {
      hoverState[this.planetIndex] = 1;
    } else {
      hoverState[this.planetIndex] = 0;
    }
  }
}

function popup(mouseX, mouseY, planetIndex) {
  let title = "";
  let description = "";
  let gravity = 0;
  let orbitLength = 0;
  let distance = 0;

  if (planetIndex == 0) {
    title = "Mercury";
    description =
      "Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.";
    gravity = mercury.gravity;
    orbitLength = Math.round(mercury.orbitLength * 365);
    distance = mercury.distance;
  }else if(planetIndex == 1){
    title = "Venus";
    description =
      "Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.";
    gravity = venus.gravity;
    orbitLength = Math.round(venus.orbitLength * 365);
    distance = venus.distance;
  }else if(planetIndex == 2){
    title = "Earth";
    description =
      "Earth — our home planet—is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.";
    gravity = earth.gravity;
    orbitLength = Math.round(earth.orbitLength * 365);
    distance = earth.distance;
  }else if(planetIndex == 3){
    title = "Mars";
    description =
      "Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.";
    gravity = mars.gravity;
    orbitLength = Math.round(mars.orbitLength * 365);
    distance = mars.distance;
  }else if(planetIndex == 4){
    title = "Jupiter";
    description =
      "Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth.";
    gravity = jupiter.gravity;
    orbitLength = Math.round(jupiter.orbitLength * 365);
    distance = jupiter.distance;
  }else if(planetIndex == 5){
    title = "Saturn";
    description =
      "Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.";
    gravity = saturn.gravity;
    orbitLength = Math.round(saturn.orbitLength * 365);
    distance = saturn.distance;
  }else if(planetIndex == 6){
    title = "Uranus";
    description =
      "Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.";
    gravity = uranus.gravity;
    orbitLength = Math.round(uranus.orbitLength * 365);
    distance = uranus.distance;
  }else if(planetIndex == 7){
    title = "Neptune";
    description =
      "Neptune—the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations, rather than by telescope.";
    gravity = neptune.gravity;
    orbitLength = Math.round(neptune.orbitLength * 365);
    distance = neptune.distance;
  }
  

  // Background
  fill("#DEDEFC");
  rect(mouseX, mouseY, 380, 420, 24);

  // Title
  textFont(headline);
  textAlign(LEFT);
  fill("#21217C");
  textStyle(BOLD);
  textSize(48);
  text(title, mouseX + 24, mouseY + 48);

  // Description
  textFont(headline);
  fill("#21217C90");
  textSize(16);
  textWrap(WORD);
  textAlign(LEFT, TOP);
  text(description, mouseX + 28, mouseY + 40 + 48, 324, 140);

  // List items
  listItem(
    mouseX,
    mouseY,
    200,
    gravityImage,
    "Strength of Gravity",
    gravity,
    "m/s²"
  );
  listItem(
    mouseX,
    mouseY,
    260,
    orbitLengthImage,
    "Orbit Period",
    orbitLength,
    "days"
  );
  listItem(
    mouseX,
    mouseY,
    320,
    distanceImage,
    "Distance from Sun",
    distance,
    "AU"
  );
}

function listItem(mouseX, mouseY, y, icon, name, number, unit) {
  // Icon
  image(icon, mouseX + 28, mouseY + y + 12, 28, 28);

  // Name
  textFont(headline);
  textAlign(LEFT);
  fill("#21217C");
  textSize(14);
  text(name + " (" + unit + ")", mouseX + 28 + 40, mouseY + y + 12);

  // Number
  textFont(headline);
  textStyle(BOLD);
  textAlign(LEFT);
  fill("#21217C");
  textSize(24);
  text(number, mouseX + 28 + 40, mouseY + y + 30);
}
