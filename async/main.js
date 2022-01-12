



// function print(name="?") {
//     console.log("Hello " + name)
// }


// setTimeout(print, 100)
// print("abbas")




















// let howManyCalled = 0
// let myInterval = null

// const printHello = () => {
//     howManyCalled++
//     console.log("hello")
//     if (howManyCalled >= 5) {
//         clearInterval(myInterval)
//     }
// }

// myInterval = setInterval(printHello, 1000)















// using callback

// function printLazy() {
//     setTimeout(() => {
//         console.log("I'm lazy")
//     }, 1000)
// }

// function printRightNow() {
//     console.log("I'm printed right now")
// }

// printLazy();
// printRightNow();




// const coffeeSampleApiURL = 'https://api.sampleapis.com/coffee/hot'



// const req = new XMLHttpRequest();
// req.addEventListener("load", afterLoad);
// req.open("GET", coffeeSampleApiURL);
// req.send();



// function afterLoad(e) {
//     const xhr = e.target;
//     console.log(xhr.response)
// }










// const sampleObject = {
//     a: 1,
//     b: "foo"
// }

// const jsonOfSampleObject = JSON.stringify(sampleObject)

// console.log(jsonOfSampleObject)

// const sampleJSON = `
//     {
//         "name": "abbas",
//         "age": 30
//     }
// `

// const objectOfSampleJSON = JSON.parse(sampleJSON)

// console.log(objectOfSampleJSON)














// const coffeeSampleApiURL = 'https://api.sampleapis.com/coffee/hot'



// const req = new XMLHttpRequest();
// req.addEventListener("load", afterLoad);
// req.open("GET", coffeeSampleApiURL);
// req.send();



// function afterLoad(e) {
//     const xhr = e.target;
//     const data = JSON.parse(xhr.response)
//     console.log(data)
// }








// const badURL = 'https://api.sampleapis.com/dog/hot'



// const req = new XMLHttpRequest();
// req.addEventListener("load", afterLoad);
// req.open("GET", badURL);
// req.send();



// function afterLoad(e) {
//     const xhr = e.target;

//     if (xhr.status !== 200) {
//         const error = xhr.statusText
//         console.error(error)
//         return;
//     }

//     const data = JSON.parse(xhr.response)
//     console.log(data)
// }










// const coffeeSampleApiURL = 'https://api.sampleapis.com/coffee/hot'


// function get(baseUrl, callback) {
//     const req = new XMLHttpRequest();
//     req.addEventListener("load", (e) => {
//         const xhr = e.target;
//         if (xhr.status !== 200) {
//             const error = xhr.statusText
//             callback(error, null)
//             return;
//         }
//         const data = JSON.parse(xhr.response)
//         callback(null, data)
//     });
//     req.open("GET", baseUrl);
//     req.send();
// }


// get(coffeeSampleApiURL, (error, data) => {
//     if (error) {
//         alert(error)
//     } else {
//         console.log(data)
//     }
// })









// let howManyDoSomethingCalled = 0

// function doSomething(cb) {
//     console.log(".......")
//     setTimeout(() => {
//         howManyDoSomethingCalled++
//         console.log("process done")
//         if (howManyDoSomethingCalled === 3) {
//             cb("something went wrong")
//         } else {
//             cb()
//         }
//     }, 100)
// }






// get(coffeeSampleApiURL, (error, data) => {
//     if (error) {
//         alert(error)
//         return
//     } 
//     console.log(data)
//     doSomething(err => {
//         if (err) {
//             alert(err)
//             return
//         }
//         console.log("1")
//         doSomething(err => {
//             if (err) {
//                 alert(err)
//                 return
//             }
//             console.log("2")
//             doSomething(err => {
//                 if (err) {
//                     alert(err)
//                     return
//                 }
//                 console.log("3")
//             })
//         })
//     })
// })















// const coffeeSampleApiURL = 'https://api.sampleapis.com/coffee/hot'


// function get(baseUrl) {
//     const promise = new Promise((resolve, reject) => {
//         const onLoad = (e) => {
//             const xhr = e.target;
//             if (xhr.status !== 200) {
//                 const error = xhr.statusText
//                 reject(error)
//                 return
//             }
//             const data = JSON.parse(xhr.response)
//             resolve(data)
//         }
//         const req = new XMLHttpRequest();
//         req.addEventListener("load", onLoad);
//         req.open("GET", baseUrl);
//         req.send();
//     })
//     return promise;
// }


// let howManyDoSomethingCalled = 0

// function doSomething() {
//     const promise = new Promise((resolve, reject) => {
//         console.log(".......")
//         setTimeout(() => {
//             howManyDoSomethingCalled++
//             console.log("process done")
//             if (howManyDoSomethingCalled === 3) {
//                 reject("something went wrong")
//             } else {
//                 resolve()
//             }
//         }, 100)
//     })
//     return promise
// }




// get(coffeeSampleApiURL).then(data => {
//     console.log(data)
//     return doSomething()
// })
// .then(() => {
//     console.log("1")
//     return doSomething()
// })
// .then(() => {
//     console.log("2")
//     return doSomething()
// })
// .then(() => {
//     console.log("3")
//     return doSomething()
// })
// .catch(err => alert(err))



















// Promise.all([
//     get(coffeeSampleApiURL), 
//     doSomething(),
//     doSomething(),
// ]).then((results) => {
//     console.log(results)
// }).catch(err => alert(err))
















// async function main() {
//     const res = await get(coffeeSampleApiURL);
//     const p1 = await doSomething()
//     const p2 = await doSomething()
//     console.log(res, p1, p2)
//     // const p3 = await doSomething()
// }

// main()



