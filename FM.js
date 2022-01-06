LEFTwristX = "";
RIGHTwristX = "";

function setup() {
    canvas = createCanvas(465, 350);
    canvas.position(650, 200);
    webcamvideo = createCapture(VIDEO);
    webcamvideo.size(600, 350);
    webcamvideo.position(100, 200);
    posenetmodel = ml5.poseNet(webcamvideo, modelloaded);
    posenetmodel.on("pose", getresults);
}

function getresults(resultsarray) {
    if (resultsarray.length > 0) {
        console.log(resultsarray);
        LEFTwristX = resultsarray[0].pose.leftWrist.x;
        RIGHTwristX = resultsarray[0].pose.rightWrist.x;
        distance = floor(LEFTwristX - RIGHTwristX);

    }
}

function modelloaded() {
    console.log("model has loaded");
}

function draw() {
    background("lavender");
    textSize(distance);
    fill("black");
    text("Yantiha ", 20, 100);

}