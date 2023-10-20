function showHair(){
    document.getElementById("hair").style.display = "block";
}
function showSti(){
    document.getElementById("sti").style.display = "block";
}
function showGrowth(){
    document.getElementById("growth").style.display = "block";
}
function showDeath(){
    document.getElementById("death").style.display = "block";
}

function keratin(){
    var keratinWindow = window.open("", "keratin", "width=200,height=100");
    // keratinWindow.document.write(
    //     "<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>"
    //     );
}

const keratinText = text.split(" ");
document.getElementById("keratin").innerHTML = keratinText; 