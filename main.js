img = "";
status = "";
objects = [];
function setup(){
    canvas =  createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' ,modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}



function preload(){
  img = loadImage("cat and dog.webp");

}

function draw(){
    image(img,0, 0, 640, 420);

    if (status!= ""){
      for(i = 0; i < objects.length; i++){
        document.getElementById("status").innerHTML = "Status : No. Of Object are 2";
        document.getElementById("number_of_objects").innerHTML = "No. Of Objects Detected are:"+ objects.length;

        fill("FF0000");
        persent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " +persent + "%", objects[i].x + 15 , objects[i].y +15 );
        noFill();
        stroke("FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

      }
    }
   
}

function modelLoaded(){
  console.log('Model Loaded');
  status = true;
  objectDetector.detect(img ,gotResults);

}

function gotResults(error , results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}