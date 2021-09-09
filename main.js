Webcam.set({
    width: 350,
    height:300,
    image_format: "png",
    png_quality: 90
});
camera=document.getElementById("camera");

Webcam.attach(camera);

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captureImage' src='"+ data_uri + "'/>";

    });
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/iiWFF9Y5K/model.json",modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}function check(){
    img=document.getElementById("captureImage");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("resultObjectName").innerHTML=results[0].label;
        document.getElementById("resultObjectAccuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}