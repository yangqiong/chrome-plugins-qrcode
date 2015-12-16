var $input = document.getElementById("input");
var $btn = document.getElementById("btn");
var qrcode;

var options = {
    text: "",
    width: 160,
    height: 160,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
}

chrome.tabs.getSelected(null, function(tab) {
    options.text = tab.url;

    $input.value = options.text;

    qrcode = new QRCode("qrcode", options);
});


$btn.onclick = function(){
    qrcode.clear();
    qrcode.makeCode($input.value);
}

