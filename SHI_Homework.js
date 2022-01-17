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

