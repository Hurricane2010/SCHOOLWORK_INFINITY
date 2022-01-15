function onSubjectSubmit() {
    event.preventDefault();
    var subjectSubmitText = document.getElementById("subject_project").value;
    switch(subjectSubmitText.toLowerCase()){
        case "history":
            document.getElementById("history_div").style.display="block";
            document.getElementById("science_div").style.display="none";
            document.getElementById("math_div").style.display="none";
            document.getElementById("english_div").style.display="none";
            document.getElementById("art_div").style.display="none";
            document.getElementById("programming_div").style.display="none";
            break;
        case "science":
            document.getElementById("science_div").style.display="block";
            document.getElementById("history_div").style.display="none";
            document.getElementById("math_div").style.display="none";
            document.getElementById("english_div").style.display="none";
            document.getElementById("art_div").style.display="none";
            document.getElementById("programming_div").style.display="none";
            break;
        case "math":
            document.getElementById("math_div").style.display="block";
            document.getElementById("history_div").style.display="none";
            document.getElementById("science_div").style.display="none";
            document.getElementById("english_div").style.display="none";
            document.getElementById("art_div").style.display="none";
            document.getElementById("programming_div").style.display="none";
            break;
        case "english":
            document.getElementById("design_div").style.display="block";
            document.getElementById("history_div").style.display="none";
            document.getElementById("science_div").style.display="none";
            document.getElementById("math_div").style.display="none";
            document.getElementById("english_div").style.display="none";
            document.getElementById("programming_div").style.display="none";
            break;
        case "art":
            document.getElementById("art_div").style.display="block";
            document.getElementById("history_div").style.display="none";
            document.getElementById("science_div").style.display="none";
            document.getElementById("math_div").style.display="none";
            document.getElementById("english_div").style.display="none";
            document.getElementById("programming_div").style.display="none";
            break;
        case "programming"
            document.getElementById("art_div").style.display="block";
            document.getElementById("history_div").style.display="none";
            document.getElementById("science_div").style.display="none";
            document.getElementById("math_div").style.display="none";
            document.getElementById("english_div").style.display="none";
            document.getElementById("programming_div").style.display="none";
    }
    //alert(subjectSubmitText);
}

