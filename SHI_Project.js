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
        default:
            document.getElementById("outputText").innerHTML = "YOU MESSED UP< LOL >";

    }

}

function onContextSubmit(){
    var contextSubmitText = document.getElementById("context").value;
    const google = require("google");
    message.channel.send("<a:googling:426453223310622740> Loading...").then(msg => {
        google(lookup, (err, res) => {
          if (err) console.error(err);
          else {
            let url = res.links[res.start].link; //you can also use .href instead of .link
            msg.edit(url);
          }
        });
      });
}