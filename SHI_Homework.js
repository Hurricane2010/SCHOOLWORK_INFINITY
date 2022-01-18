/*function onHomeworkSubmit() {
    event.preventDefault();
    var hwSubmitText = document.getElementById("subject_hw").value;
    alert(hwSubmitText);
}*/

//Calculator:
function calculator() 
{
    var div = document.getElementById("calcdisplay");
    div.style.display = div.style.display == "none" ? "block" : "none";
}

//function that display value
function dis(val)
{
    document.getElementById("result").value+=val
}

//function that evaluates the digit and return result
function solve()
{
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}

//function that clear the display
function clr()
{
    document.getElementById("result").value = ""
}

//Subject Buttons on Homework Page
function keywordSearch() {
    event.preventDefault();
    var hwSubmitText = document.getElementById("keyword_text").value;
    cards = document.getElementById("images-container");
    var counter = true;
    if(counter == true){
        cards.style.visibility = "visible";
        counter = false;
    }
    if(counter == false){
        cards.style.visiblity = "collapse";
        counter = true;
    }
} 
function mathButton() {
    document.getElementById("keyword_textbox").style.display="block";
    document.getElementById("mathBtn").style.display="block";
    document.getElementById("sciBtn").style.display="none";
    document.getElementById("histBtn").style.display="none";
    document.getElementById("engBtn").style.display="none";
    document.getElementById("progBtn").style.display="none";
    document.getElementById("artBtn").style.display="none";
}
function scienceButton() {
    document.getElementById("keyword_textbox").style.display="block";
    document.getElementById("mathBtn").style.display="none";
    document.getElementById("sciBtn").style.display="block";
    document.getElementById("histBtn").style.display="none";
    document.getElementById("engBtn").style.display="none";
    document.getElementById("progBtn").style.display="none";
    document.getElementById("artBtn").style.display="none";
}
function historyButton() {
    document.getElementById("keyword_textbox").style.display="block";
    document.getElementById("mathBtn").style.display="none";
    document.getElementById("sciBtn").style.display="none";
    document.getElementById("histBtn").style.display="block";
    document.getElementById("engBtn").style.display="none";
    document.getElementById("progBtn").style.display="none";
    document.getElementById("artBtn").style.display="none";
}
function englishButton() {
    document.getElementById("keyword_textbox").style.display="block";
    document.getElementById("mathBtn").style.display="none";
    document.getElementById("sciBtn").style.display="none";
    document.getElementById("histBtn").style.display="none";
    document.getElementById("engBtn").style.display="block";
    document.getElementById("progBtn").style.display="none";
    document.getElementById("artBtn").style.display="none";
}
function progButton() {
    document.getElementById("keyword_textbox").style.display="block";
    document.getElementById("mathBtn").style.display="none";
    document.getElementById("sciBtn").style.display="none";
    document.getElementById("histBtn").style.display="none";
    document.getElementById("engBtn").style.display="none";
    document.getElementById("progBtn").style.display="block";
    document.getElementById("artBtn").style.display="none"; 
}
function artButton() {
    document.getElementById("keyword_textbox").style.display="block";
    document.getElementById("mathBtn").style.display="none";
    document.getElementById("sciBtn").style.display="none";
    document.getElementById("histBtn").style.display="none";
    document.getElementById("engBtn").style.display="none";
    document.getElementById("progBtn").style.display="none";
    document.getElementById("artBtn").style.display="block";
}

