//init vars
let expStatus = "block";
let edStatus = "none";

document.getElementById("exp-info").style.display = expStatus;

document.getElementById('exp').onclick = function() {
    if (expStatus == "none") {
        expStatus = "block";
        document.getElementById('exp-info').style.display = expStatus;
    }
    else if (expStatus == "block") {
        expStatus = "none";
        document.getElementById('exp-info').style.display = expStatus
    }
}

document.getElementById("ed-info").style.display = edStatus;

document.getElementById('ed').onclick = function() {
    if (edStatus == "none") {
        edStatus = "block";
        document.getElementById('ed-info').style.display = edStatus;
    }
    else if (edStatus == "block") {
        edStatus = "none";
        document.getElementById('ed-info').style.display = edStatus
    }
}

// function showhide(element) {
//     if (true) {
//
//     }

}
