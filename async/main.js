



// function print(name="?") {
//     console.log("Hello " + name)
// }


// setTimeout(print, 100)

// print("abbas")












// const intervalId = setTimeout(() => {
//     console.log("hello")
// }, 3000);

// clearInterval(intervalId)











// let howManyCalled = 0
// let myInterval = null

// const printHello = () => {
//     howManyCalled++
//     if (howManyCalled > 5) {
//         clearInterval(myInterval)
//     } else {
//         console.log("hello")
//     }
// }

// myInterval = setInterval(printHello, 1000)















// using callback


// function printLazy() {
//     setTimeout(() => {
//         console.log("I'm lazy")
//         // callback()
//     }, 1000)
// }

// function printRightNow() {
//     console.log("I'm printed right now")
// }


// printLazy(printRightNow);










// ---------------------










// const coffeeSampleApiURL = 'https://api.sampleapis.com/coffee/hot'



// const req = new XMLHttpRequest();
// req.addEventListener("load", afterLoad);
// req.open("GET", coffeeSampleApiURL);
// req.send();



// function afterLoad(e) {
//     const xhr = e.target;
//     console.log(xhr.response[0].title)
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

// console.log(sampleJSON)
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








const url = 'https://api.sampleapis.com/coffee/hot'

// const req = new XMLHttpRequest();
// req.addEventListener("load", afterLoad);
// req.open("GET", url);
// req.send();



// function afterLoad(event) {

//     if (event.target.status !== 200) {
//         const error = event.target.statusText
//         console.error(error)
//         return;
//     }

//     const data = JSON.parse(event.target.response)
//     console.log(data)
// }





// function get(apiUrl, abbasBoazar) {
//     const req = new XMLHttpRequest();
//     const handleLoad = (event) => {
//         let result;
//         let error;
//         if (event.target.status === 200) {
//             result = JSON.parse(event.target.response)
//         } else {
//             error = "Error: something went wrong"
//         }
//         abbasBoazar(error, result)
//     }
//     req.open("GET", apiUrl);
//     req.send();
//     req.addEventListener("load", handleLoad);
// }

// const result = get(url, (error, result) => {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(result)
//     }
// });















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
//         if (howManyDoSomethingCalled >= 3) {
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
//         })
//     })
// })









// function callSomethingsAfter2Seconds(cb) {
//     setTimeout(() => {
//         cb(2)
//     }, 2000)
// }


// callSomethingsAfter2Seconds((parivash) => {
//     console.log(parivash)
// })



// const samplePromise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(2)
//     }, 2000)
// })

// samplePromise.then((akbar) => {
//     console.log(akbar)
// })











const coffeeSampleApiURL = 'https://api.sampleapis.com/coffee/hot'


function get(baseUrl) {
    const promise = new Promise((resolve, reject) => {
        const onLoad = (e) => {
            const xhr = e.target;
            if (xhr.status !== 200) {
                const error = xhr.statusText
                reject(error)
                return
            }
            const data = JSON.parse(xhr.response)
            resolve(data)
        }
        const req = new XMLHttpRequest();
        req.addEventListener("load", onLoad);
        req.open("GET", baseUrl);
        req.send();
    })
    return promise;
}


let howManyDoSomethingCalled = 0

function doSomething() {
    const abbas = new Promise((resolve, reject) => {
        setTimeout(() => {
            howManyDoSomethingCalled++
            if (howManyDoSomethingCalled === 3) {
                reject("something went wrong")
            } else {
                resolve(2)
            }
        }, 100)
    })
    return abbas
}




// get(coffeeSampleApiURL)
// .then(data => {
//     const anotherPromise = doSomething()
//     console.log(anotherPromise)
//     return anotherPromise
// })
// .then((a) => {
//     console.log(a)
//     return doSomething()
// })
// .catch(err => alert(err))










// ---------------------












Promise.all([
    get(coffeeSampleApiURL), 
    doSomething(),
    doSomething(),
    doSomething(),
]).then((results) => {
    console.log(results)
}).catch(err => alert(err))

















// async function main() {
//     const res = await get(coffeeSampleApiURL);
//     const p1 = await doSomething()
//     const p2 = await doSomething()
//     console.log(res, p1, p2)
//     // const p3 = await doSomething()
// }

// main()



// ---------------------





// https://www.youtube.com/watch?v=8aGhZQkoFbQ