img="";
status="";
object= [];
function setup(){
 canvas= createCanvas(640,420);
 canvas.center();
objectDetector= ml5.objectDetector('cocossd', modelLoaded);

}
function preload(){
    img= loadImage("bed.jpg"); 
}
function draw(){
    image(img, 0,0, 640,420); 
   
    if(status != "[]")
    {
      for(i =0; i< object.length; i++)
      {
        fill('#002BFF');
        percent= floor(object[i].confidence*100);
        text(object[i].label + "    " + percent + "%", object[i].x, object[i].y - 5);
        noFill();
        stroke('#002BFF');
        rect(object[i].x , object[i].y, object[i].width, object[i].height);
      }
    }
}

function modelLoaded(){
console.log('Model Loaded');
status= true;
objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
  if(error){
    console.log(error);
  }
  else{
  console.log(results);
  object= results;
  }
}
function back(){
  
}