var output = ""
var contextoutput = ""
var history = "Slideshow or Poster (with oral presentation)"
var science = "Essay or Slideshow (with oral presentation and provided research)"
var math = "Poster or Oral Presentation"
var design = "Image Slideshow or Model"
var art = "Artpeice and Discription, or Model and supporting text"
function onSubjectSubmit() {
    event.preventDefault();
    var subjectSubmitText = document.getElementById("subject").value; 
    //alert("Text input: " + subjectSubmitText)
    if(subjectSubmitText.toLowerCase() = "history"){
        output = history;
    }
    if(subjectSubmitText.toLowerCase() = "science"){
        output = science;
    }
    if(subjectSubmitText.toLowerCase() = "math"){
        output = math;
    }
    if(subjectSubmitText.toLowerCase() = "design"){
        output = design;
    }
    if(subjectSubmitText.toLowerCase() = "art"){
        output = art;
    }
    document.getElementById('mediumResult').innerHTML = output;
}