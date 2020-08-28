//Create variables here

var happyDog;
var dog;
var database;
var foodS;
var foodStock;
function preload()
{
  //load images here
  this.image.load=("image/dog.png")
  this.image.load=("image/doghappy.png")
}

function setup() {
  database = firebase.database()
  createCanvas(500, 500);
  var dog=setImage(image/dog.png)
  var happyDog =setImage(image/doghappy.png)
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(doghappy)
}

  drawSprites();
  //add styles here
  textSize(35)
 fill("white")
text("Note:press Up arrow to feed dog")
//function to read values from DB
function readStock(data){
  foodS=data.val();
}
//function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x+1;
  }

  database.ref('/').update({
    Food:x
  })
}
}



