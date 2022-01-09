window.addEventListener('load', function(){
    document.getElementById('sampleeditor').setAttribute('contenteditable', 'true');
    document.getElementById('sampleeditor2').setAttribute('contenteditable', 'true');
});

function format(command, value) {
    document.execCommand(command, false, value);
}

function setUrl() {
    var url = document.getElementById('txtFormatUrl').value;
    var sText = document.getSelection();
    document.execCommand('insertHTML', false, '<a href="' + url + '" target="_blank">' + sText + '</a>');
    document.getElementById('txtFormatUrl').value = '';
}

function setSize() {
    var sizeNum = document.getElementById('txtSetSize').value;
    var sText = document.getSelection();
    document.execCommand('insertHTML', false, '<p style="font-size:' + sizeNum + 'px">' + sText + '</p>');
    document.getElementById('txtSetSize').value = '';
}