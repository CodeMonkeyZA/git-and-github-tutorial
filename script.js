let countNo = 0;

function count() {

    countNo++;

    document.getElementById("counter").innerHTML = countNo;
    
    document.getElementById("counterBtn").innerHTML = "Clack!";

}