for (let r= 1; r <= 5; r++) {
    console.log(r);
}
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}
for (let l = 1; l <= 3; l++) {
    for (let m = 1; m <= 2; m++) {
        console.log(l, m);
    }
}
for (let z = 1; z <= 5; z++) {
    if (z === 3) {
        continue;
    }

    console.log(z);
}
while (true) {
    console.log("Run......");
}