window.onload = function() {
    let clicks = 0;

    document.getElementById("number").innerHTML = clicks;

    document.getElementById("cps").addEventListener("click", function() {
        if (clicks === 0) {
            clicks += 1;
            document.getElementById("number").innerHTML = clicks;
            setTimeout(finishCPS, 5000);
        } else {
            clicks += 1;
            document.getElementById("number").innerHTML = clicks;
        }
    });

    function finishCPS() {
        alert("Total clicks per second: " + parseFloat(clicks)/5);
        clicks = 0;
        document.getElementById("number").innerHTML = clicks; 
    }
}