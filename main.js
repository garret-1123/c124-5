nose_x = 0
nose_y = 0
diff = 0
right_x = 0
left_x = 0

function setup() {
    
video = createCapture(VIDEO)
video.size(550,500)
canvas = createCanvas(550,550)
canvas.position(560,150)
classifier = ml5.poseNet(video,modelLoaded)
classifier.on('pose',gotPoses)
}
function modelLoaded() {
    console.log("Loaded!")
}
function gotPoses(results) {
    if (results.length > 0) {

        right_x = results[0].pose.rightWrist.x    
        left_x = results[0].pose.leftWrist.x

        diff = module(floor(left_x) - floor(right_x))
    }
}
function draw() {
background("#E2ED13")
document.getElementById("fontsize").innerHTML = "O tamanho da fonte será: " + String(diff)
textSize(diff)
fill('#2d2c2b')
text("pedro", 50, 400)
}

function module(value) {
    if (value > 0) return value; else return -value
}