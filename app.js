class Application {
  constructor() {
    this.renderer = new PIXI.Renderer({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 0x1099bb,
      resolution: 1,
    });
    document.body.appendChild(this.renderer.view);
    this.ticker = new PIXI.Ticker();
    this.stage = new PIXI.Container();

    this.ticker .add(this.render.bind(this), PIXI.UPDATE_PRIORITY.LOW);
this.ticker.start();
}
    
    get screen (){
        return this.renderer.screen;
    }
  render (){
    this.renderer.render(this.stage);
}
}
const app = window.app = new Application();


const container = new PIXI.Container();

app.stage.addChild(container);

// Create a new texture
const texture = PIXI.Texture.from("./img/beaver.svg");

// Create a 5x5 grid of bunnies
for (let i = 0; i < 25; i++) {
  const bunny = new PIXI.Sprite(texture);
  bunny.anchor.set(0.5);
  bunny.x = (i % 5) * 40;
  bunny.y = Math.floor(i / 5) * 40;
  bunny.width = 35;
  bunny.height = 35;
  container.addChild(bunny);
}

// Move container to the center
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

// Center bunny sprite in local container coordinates
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

// Listen for animate update
app.ticker.add((delta) => {
  // rotate the container!
  // use delta to create frame-independent transform
  container.rotation -= 0.01 * delta;
});

