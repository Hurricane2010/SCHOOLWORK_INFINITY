//project medium:
// var output = ""
// var contextoutput = ""
// var history = "Slideshow or Poster (with oral presentation)"
// var science = "Essay or Slideshow (with oral presentation and provided research)"
// var math = "Poster or Oral Presentation"
// var design = "Image Slideshow or Model"
// var art = "Artpeice and Discription, or Model and supporting text"
// var className = document.getElementById('subjectButton').value
// if(className == "history"){
//     output = history
// }
// if(className == "science"){
//     output = science
// }
// if(className == "math"){
//     output = math
// }
// if(className == "design"){
//     output = design
// }
// if(className == "art"){
//     output = art
// }
// document.getElementById("outputText").innerHTML = output;
function onSubjectSubmit() {
    event.preventDefault();
    var subjectSubmitText = document.getElementById("subject").value; 
    alert("Text input: " + subjectSubmitText)
}