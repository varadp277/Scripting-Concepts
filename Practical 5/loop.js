function showLoops(num) {
    if (num > 0) {
        console.log("For Loop:");
        for (var i = 1; i <= num; i++) {
            console.log(i);
        }
        console.log("While Loop:");
        var j = 1;
        while (j <= num) {
            console.log(j);
            j++;
        }
        console.log("Do-While Loop:");
        var k = 1;
        do {
            console.log(k);
            k++;
        } while (k <= num);
    }
    else {
        console.log("Enter positive number.");
    }
}
var number = 5;
showLoops(number);
