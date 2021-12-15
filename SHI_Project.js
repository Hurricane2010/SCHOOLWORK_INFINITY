var output = "";
var contextoutput = "";
var socStu = "Slideshow or Poster (with oral presentation)";
var science = "Essay or Slideshow (with oral presentation and provided research)";
var math = "Poster or Oral Presentation";
var design = "Image Slideshow or Model";
var art = "Artpeice and Discription, or Model and supporting text";
function onSubjectSubmit() {
    event.preventDefault();
    var subjectSubmitText = document.getElementById("subject").value; 

    switch(subjectSubmitText.toLowerCase()){
        case "history":
            document.getElementById("outputText").innerHTML = socStu;
            break;
        case "science":
            document.getElementById("outputText").innerHTML = science;
            break;
        case "math":
            document.getElementById("outputText").innerHTML = math;
            break;
        case "design":
            document.getElementById("outputText").innerHTML = design;
            break;
        case "art":
            document.getElementById("outputText").innerHTML = art;
            break;
    }
    //alert("Text input: " + subjectSubmitText)
    // if(subjectSubmitText == "history"){
    //     document.getElementById("outputText").innerHTML = socStu;
    // }
    // if(subjectSubmitText == "science"){
    //     document.getElementById("outputText").innerHTML = science;
    // }
    // if(subjectSubmitText == "math"){
    //     document.getElementById("outputText").innerHTML = math;
    // }
    // if(subjectSubmitText == "design"){
    //     document.getElementById("outputText").innerHTML = design;
    // }
    // if(subjectSubmitText == "art"){
    //     document.getElementById("outputText").innerHTML = art;
    // }
}