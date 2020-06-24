const app = new PIXI.Application({
  width: 800,
  height: 600,
  backgroundColor: 0x1099bb,
  resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

const texture = PIXI.Texture.from("./img/beaver.svg");
const textureLion = PIXI.Texture.from("./img/lion.svg");

const container = new PIXI.Container();
app.stage.addChild(container);

createBunny(50, 400);
function createBunny(x, y) {
  for (let i = 0; i < 25; i++) {
    const bunny = new PIXI.Sprite(texture);
    bunny.anchor.set(0.5);
    bunny.x = (i % 5) * 40;
    bunny.interactive = true;
    bunny.buttonMode = true;
    bunny.width = 40;
    bunny.height = 40;
    bunny.y = Math.floor(i / 5) * 40;
    bunny
      .on("pointerdown", onDragStart)
      .on("pointerup", onDragEnd)
      .on("pointerupoutside", onDragEnd)
      .on("pointermove", onDragMove);
      
    container.addChild(bunny);
  }
  const bunny = new PIXI.Sprite(textureLion);
  bunny.width = 80;
  bunny.height = 80;
  bunny.interactive = true;
  bunny.buttonMode = true;
  bunny.anchor.set(0.5);
  bunny.scale.set(3);
  bunny
    .on("pointerdown", onDragStart)
    .on("pointerup", onDragEnd)
    .on("pointerupoutside", onDragEnd)
    .on("pointermove", onDragMove);
  bunny.x = x;
  bunny.y = y;
  app.ticker.add(delta => gameLoop(delta));
  app.stage.addChild(bunny);
  function gameLoop(){
    bunny.x += 1; 
    bunny.rotation+=0.05;
    
  }
}

function onDragStart(event) {
  this.data = event.data;
  this.alpha = 0.5;
  this.dragging = true;
}
function onDragEnd() {
  this.alpha = 1;
  this.dragging = false;

  this.data = null;
}
function onDragMove() {
  if (this.dragging) {
    const newPosition = this.data.getLocalPosition(this.parent);
    this.x = newPosition.x;
    this.y = newPosition.y;
  }
}
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;
app.ticker.add((delta) => {
container.rotation -= 0.01 * delta;
});
