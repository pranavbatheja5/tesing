const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Task completed successfully");
    } else {
        reject("Task failed");
    }
});
myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));
function delay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Finished after 2 seconds");
        }, 2000);
    });
}
delay().then(msg => console.log(msg));
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Error:", error));
new Promise((resolve) => {
    resolve(5);
})
.then(num => num * 2)
.then(num => num + 10)
.then(result => console.log(result)); // 20
const p1 = Promise.resolve("HTML");
const p2 = Promise.resolve("CSS");
const p3 = Promise.resolve("JS");

Promise.all([p1, p2, p3])
.then(values => console.log(values));
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

async function showData() {
    const data = await getData();
    console.log(data);
}

showData();