function showLoops(num: number): void {

    if (num > 0) {

        console.log("For Loop:");
        for (let i = 1; i <= num; i++) {
            console.log(i);
        }

        console.log("While Loop:");
        let j = 1;
        while (j <= num) {
            console.log(j);
            j++;
        }

        console.log("Do-While Loop:");
        let k = 1;
        do {
            console.log(k);
            k++;
        } while (k <= num);

    } else {
        console.log("Enter positive number.");
    }
}
a
let number: number = 5;

showLoops(number);