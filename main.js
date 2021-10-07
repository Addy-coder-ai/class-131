img="";
Status="";
function preload(){
img=loadImage("dog_cat.jpg");
}


function setup() {
    canvas = createCanvas(640,320);
    canvas.center();
    objectDetector =ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting...";
}

function modelLoaded() {
    console.log("model loaded");
    Status=true;
    objectDetector.detect(img,gotResults);
}


function draw() {
    image(img,0,0,640,320);
    fill("red");
    text("Dog",60,92);
    noFill();
    stroke("red");
    rect(30,60,300,250);

    fill("blue");
    text("Cat",320,90);
    noFill();
    stroke("blue");
    rect(310,80,300,240);
}

function gotResults(error,results) {
    if (error) {
  console.error(error);
      }  else { 
        console.log(results);
    }
}