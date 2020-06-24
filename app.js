const app = new PIXI.Application({
  width: 800,
  height: 600,
  backgroundColor: 0x1099bb,
  resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);
const texture = PIXI.Texture.from("./img/beaver.svg");
createBunny(40, 40);
function createBunny(x, y) {
  const bunny = new PIXI.Sprite(texture);
  bunny.width = 50;
  bunny.height = 50;
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
  app.stage.addChild(bunny);
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
