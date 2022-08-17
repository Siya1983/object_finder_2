status="";

function setup(){
    canvas= createCanvas(480, 380);
    canvas.center();

    video= createVideo('video.mp4');
    video.hide();
}

function start(){
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";

}

function modelLoaded(){
console.log("ModelLoaded!!!");
status=true; 
 video.volume(0);
video.speed(1);
video.loop();
}

function draw(){
    image(video, 0, 0, 480, 380);
}

