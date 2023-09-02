function dis(val) {
    document.getElementById("result").innerHTML += val
}

function solve() {
    let x = document.getElementById("result").innerHTML;
    let y = eval(x)
    document.getElementById("result").innerHTML = y
}

function clr() {
    document.getElementById("result").innerHTML = ""
}

function copyStringToClipboard() {
}

function copy() {
    var copyText = document.getElementById("result");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
    alert("Result copied !\n" + result);
}