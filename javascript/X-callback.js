// CALLBACK


console.log("starting");
function longRunning(f) {
    setTimeout(() => f("Long running ops."), 5000);
    // console.log("In function");
    // f("Long running ops.")
}

// var callBack = (result) => console.log(`Done:${result}`);
// longRunning(callBack);

let promise = new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve({result:"completed!"}),5000);
    setTimeout(()=>reject({result:"err!"}),5000);
});
console.log("my code reached out here.");

promise.then(r=>console.log(r.result))// (N) x.then() .........// promise chaining
.catch(e=>console.log(e.result));