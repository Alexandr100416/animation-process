let Application = PIXI.Application;
let loader = PIXI.loader;
let resources = PIXI.loader.resources;
let Sprite = PIXI.Sprite;

let app = new Application({
  width: 256,
  height: 256,
  antialias: true,
  transparent: false,
  resolution: 1,
});

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

//load an image and run the `setup` function when it's done
loader.add("catImage", "/beaver.svg").load(setup);

//This `setup` function will run when the image has loaded
function setup() {
  //Create the cat sprite
  let cat = new Sprite(resources["catImage"].texture);
  cat.x = 96;
  cat.y = 96;
  cat.width=90;
  cat.height=90;

  //Add the cat to the stage
  app.stage.addChild(cat);
}
