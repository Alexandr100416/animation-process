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
  let beaver = new Sprite(resources["catImage"].texture);
  beaver.position.set(96, 96);
  //   cat.x = 96;
  //   cat.y = 96;
  beaver.width = 90;
  beaver.height = 90;
  //   cat.scale.x = 0.3;
  //   cat.scale.y = 0.3;
  // cat.scale.set(0.5, 0.5);
  beaver.rotation = 0.5;

  //Add the cat to the stage
  app.stage.addChild(beaver);
}
