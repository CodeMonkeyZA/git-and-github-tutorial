let countNo = 0;
let counter = document.getElementById("counter");

function count() {

    countNo++;

    console.log(countNo);

    counter.innerHTML = countNo;
    
    document.getElementById("counterBtn").innerHTML = "Clicked!";

}

function counterClear() {

    countNo = 0;

    console.log(countNo);

    counter.innerHTML = countNo;
    
    document.getElementById("counterBtn").innerHTML = "Click!";

}

