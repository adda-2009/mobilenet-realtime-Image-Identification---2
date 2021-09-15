function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('MobileNet',modelLoaded);
}

function modelLoaded()
{
console.log('modelLoaded')
}

function draw()
{
image(video,0,0,300,300);
classifier.classify(video,gotResult);
}

function gotResult(erroe,results)
{
if (error)
{
console.error(error);
}
else
{
console.log(results);
document.getElementById("Object").innerHTML=results[0].label;
document.getElementById("Accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}